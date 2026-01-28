import { Product } from "@/lib/hook/fetchingProductData";
import { createAction } from "@reduxjs/toolkit";

export const addToCart = createAction<Product>("cart/addToCart");
