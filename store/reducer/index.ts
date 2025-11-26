import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./cartReducer";

export const store = configureStore({
  reducer: {
    cart: cartReducer,   // combineReducers লাগবে না
  },
});

// Types (for useDispatch & useSelector)
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
