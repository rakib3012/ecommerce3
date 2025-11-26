import { createAction } from "@reduxjs/toolkit";
import { Product } from "../reducer/cartReducer";
 

export const addToCart = createAction<Product>("cart/addToCart");