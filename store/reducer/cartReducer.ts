import { createAction, createReducer, PayloadAction } from "@reduxjs/toolkit";

// Product API Response Type
export interface Product {
  id: string;
  name: string;
  price: number;
  brand: string;
  color: string;
  image: string;
  categoryId: number;
}

// Cart Item Type (extra quantity added)
export interface CartItem extends Product {
  quantity: number;
}
const initialState: CartItem[] = [];

// export const cartReducer = createReducer( initialState,(builder)=>{
//     builder
//     .addCase("cart/addToCart", (state, action)=>{
//         const product = state.find(item=>item.id === action.payload.id);
//         product ? (product.quantity+= 1) : state.push({...action.payload, quantity:1});
//         alert("added")
//     })
//     .addCase("cart/removeProduct", (state,action)=>{
//         return state.filter(item => item.id !== action.payload)
//     })
//     .addCase("cart/modifyQuantityAnItem", (state,action)=>{
//         const productIndex =  state.findIndex(item=>item.id===action.payload.id)
//          state[productIndex].quantity=action.payload.quantity
//     })
//     .addCase("cart/clearCart", ()=>{
//        return []
//     })
// })

export const addToCart = createAction<Product>("cart/addToCart");
export const removeProduct = createAction<string>("cart/removeProduct");
export const modifyQuantityAnItem = createAction<{
  id: string;
  quantity: number;
}>("cart/modifyQuantityAnItem");
export const clearCart = createAction("cart/clearCart");

export const cartReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addToCart, (state, action: PayloadAction<Product>) => {
      const product = state.find((item) => item.id === action.payload.id);
      alert("added the product");
      if (product) {
        product.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    })

    .addCase(removeProduct, (state, action: PayloadAction<string>) => {
      return state.filter((item) => item.id !== action.payload);
    })

    .addCase(
      modifyQuantityAnItem,
      (state, action: PayloadAction<{ id: string; quantity: number }>) => {
        const index = state.findIndex((item) => item.id === action.payload.id);
        if (index !== -1) {
          state[index].quantity = action.payload.quantity;
        }
      }
    )

    .addCase(clearCart, () => {
      return [];
    });
});
