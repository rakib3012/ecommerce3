"use client";

import Link from "next/link";
import React from "react";
// import Map from './Map';
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@/store/reducer";
import {
  clearCart,
  removeProduct,
  modifyQuantityAnItem,
} from "@/store/reducer/cartReducer";
import Image from "next/image";

const CartComponent = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 px-4 sm:px-6 lg:px-8 py-10">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 flex items-center justify-center gap-2">
            <span role="img" aria-label="cart">
              🛒
            </span>
            <span>Your Shopping Cart</span>
          </h1>
          <p className="text-gray-500 text-sm md:text-base">
            Review the items in your cart before proceeding to checkout.
          </p>
        </div>

        {/* Main Cart Box */}
        <div className="bg-white/95 backdrop-blur shadow-[0_18px_45px_rgba(15,23,42,0.12)] rounded-3xl overflow-hidden border border-slate-100">
          {/* Cart Items */}
          <div className="divide-y divide-gray-100">
            {cart.length > 0 ? (
              cart.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col md:flex-row gap-5 px-4 md:px-8 py-5 items-center bg-white/95 hover:bg-emerald-50/40 transition-colors"
                >
                  {/* Image */}
                  <div className="shrink-0 flex justify-center md:justify-start w-full md:w-auto">
                    <div className="h-20 w-20 md:h-24 md:w-24 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center overflow-hidden shadow-inner">
                     <Link href= {`/product_details/${item.id}`}>
                      <Image
                        src={item.images?.[0] || "/images/placeholder.png"}
                        alt={item.title}
                        width={100}
                        height={100}
                        className="object-contain"
                      />
                     </Link>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="flex-1 w-full space-y-1 text-center md:text-left">
                    <p className="font-semibold text-gray-900 text-base md:text-lg tracking-wide line-clamp-2">
                      {item.title}
                    </p>
                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 text-sm text-gray-500">
                      <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1">
                        <span className="text-xs uppercase tracking-wide text-slate-400">
                          Price
                        </span>
                        <span className="font-semibold text-slate-800">
                          ${item.price}
                        </span>
                      </span>
                      <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1">
                        <span className="text-xs uppercase tracking-wide text-slate-400">
                          Qty
                        </span>
                        <button
                          type="button"
                          aria-label="Decrease quantity"
                          onClick={() =>
                            dispatch(
                              modifyQuantityAnItem({
                                id: item.id,
                                quantity: Math.max(1, item.quantity - 1),
                              }),
                            )
                          }
                          className="h-6 w-6 flex items-center justify-center rounded-full bg-white text-slate-700 border border-slate-200 hover:bg-emerald-50 hover:border-emerald-300 text-xs"
                        >
                          -
                        </button>
                        <span className="font-semibold text-slate-800 min-w-6 text-center">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          aria-label="Increase quantity"
                          onClick={() =>
                            dispatch(
                              modifyQuantityAnItem({
                                id: item.id,
                                quantity: item.quantity + 1,
                              }),
                            )
                          }
                          className="h-6 w-6 flex items-center justify-center rounded-full bg-white text-slate-700 border border-slate-200 hover:bg-emerald-50 hover:border-emerald-300 text-xs"
                        >
                          +
                        </button>
                      </span>
                    </div>
                  </div>

                  {/* Subtotal & Action */}
                  <div className="flex gap-16 items-center md:items-end  w-full md:w-auto">
                    <div className="">
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
                        Subtotal
                      </p>
                      <p className="text-xl font-semibold text-emerald-600 leading-tight">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        const confirmed = window.confirm(
                          "Are you sure you want to remove this item from your cart?",
                        );
                        if (confirmed) {
                          dispatch(removeProduct(item.id));
                        }
                      }}
                      className="inline-flex items-center justify-center rounded-full bg-red-500/90 px-3 py-1.5 text-[10px] md:text-xs font-semibold text-white shadow-sm hover:bg-red-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:ring-offset-1"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="flex flex-col items-center justify-center py-16 px-6 text-center space-y-3">
                <div className="h-14 w-14 rounded-full bg-slate-100 flex items-center justify-center text-2xl">
                  🛍️
                </div>
                <div className="space-y-1">
                  <p className="text-lg font-semibold text-gray-800">
                    Your cart is empty
                  </p>
                  <p className="text-sm text-gray-500">
                    Browse products and add your favorites to the cart.
                  </p>
                </div>
                <Link
                  href="/shop"
                  className="mt-2 inline-flex items-center rounded-full bg-emerald-500 px-5 py-2 text-sm font-semibold text-white shadow hover:bg-emerald-600"
                >
                  Continue Shopping
                </Link>
              </div>
            )}
          </div>

          {/* Total Summary */}
          <div className="grid gap-4 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,2fr)] items-center px-4 md:px-8 py-6 bg-liner-to-r from-slate-50 via-emerald-50 to-slate-50 border-t border-gray-100">
            <div>
              <button
                className="w-full md:w-auto mt-1 bg-red-50 text-red-600 px-4 py-2 rounded-full hover:bg-red-100 transition duration-200 text-sm font-semibold border border-red-100"
                onClick={() => {
                  const confirmed = window.confirm(
                    "Are you sure you want to clear the entire cart?",
                  );
                  if (confirmed) {
                    dispatch(clearCart());
                  }
                }}
              >
                Clear Cart
              </button>
            </div>
            <div className="text-gray-600 text-center text-sm">
              Total Items :
              <span className="font-semibold ml-1">
                {cart.reduce((sum, item) => sum + item.quantity, 0)}
              </span>
            </div>
            <div className="text-xl font-semibold text-center text-emerald-700">
              Total Cost :
              <span className="text-gray-900 ml-1">
                $
                {cart
                  .reduce((sum, item) => sum + item.price * item.quantity, 0)
                  .toFixed(2)}
              </span>
            </div>
            <div className="flex justify-end">
              <Link href={"/checkout"}>
                <button className="w-full md:w-auto bg-emerald-600 text-white px-6 py-2.5 rounded-full hover:bg-emerald-700 transition duration-200 text-sm font-semibold shadow-md">
                  Proceed to Checkout
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CartComponent;
