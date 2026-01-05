import { Product } from "@/app/hook/fetchingProductData";
import { createAction, createReducer, PayloadAction } from "@reduxjs/toolkit";

// Product API Response Type
// export interface Product {
//   id: number;
//   title: string;
//   description: string;
//   category: string;
//   price: number;
//   discountPercentage: number;
//   rating: number;
//   stock: number;
//   tags: string[];
//   brand: string;
//   sku: string;
//   weight: number;
//   warrantyInformation: string;
//   shippingInformation: string;
//   availabilityStatus: string;
//   reviews: Review[];
//   returnPolicy: string;
//   minimumOrderQuantity: number;
//   images: string;
//   thumbnail: string;
// }
// export interface Review {
//   rating: number;
//   comment: string;
//   date: string; // ISO date string
//   reviewerName: string;
//   reviewerEmail: string;
// }

// Cart Item Type (extra quantity added)
export interface CartItem extends Product {
  quantity: number;
}
const initialState: CartItem[] = [];

export const addToCart = createAction<Product>("cart/addToCart");
export const removeProduct = createAction<number>("cart/removeProduct");
export const modifyQuantityAnItem = createAction<{ id: number; quantity: number }>(
  "cart/modifyQuantityAnItem"
);
export const clearCart = createAction("cart/clearCart");

export const cartReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addToCart, (state, action: PayloadAction<Product>) => {
      const product = state.find((item) => item.id === action.payload.id);
      if (product) {
        product.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    })

    .addCase(removeProduct, (state, action: PayloadAction<number>) => {
      return state.filter((item) => item.id !== action.payload);
    })

    .addCase(
      modifyQuantityAnItem,
      (state, action: PayloadAction<{ id: number; quantity: number }>) => {
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