"use client";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "@/store/reducer";
import { clearCart } from "@/store/reducer/cartReducer";
import type { CartItem } from "@/store/reducer/cartReducer";
const Checkout = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart);

  // Shipping form state
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");

  const subtotal = cart.reduce(
    (acc: number, item: CartItem) => acc + item.price * item.quantity,
    0,
  );
  const shipping = cart.length > 0 ? 20 : 0;
  const total = subtotal + shipping;

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* LEFT - SHIPPING INFO */}
        <div className="md:col-span-2 bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>

          <form
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="text"
              placeholder="Full Name"
              className="border rounded px-3 py-2"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email Address"
              className="border rounded px-3 py-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="border rounded px-3 py-2"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <input
              type="text"
              placeholder="City"
              className="border rounded px-3 py-2"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <input
              type="text"
              placeholder="Address"
              className="border rounded px-3 py-2 md:col-span-2"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </form>
        </div>

        {/* RIGHT - ORDER SUMMARY */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

          <div className="space-y-4">
            {cart.length > 0 ? (
              cart.map((item: CartItem) => (
                <div
                  key={item.id}
                  className="flex justify-between text-sm text-gray-700"
                >
                  <span>
                    {item.title} × {item.quantity}
                  </span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))
            ) : (
              <p className="text-sm text-gray-500">Your cart is empty.</p>
            )}
          </div>

          <hr className="my-4" />

          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>${shipping.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-semibold text-lg">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          <button
            type="button"
            disabled={cart.length === 0}
            onClick={() => {
              const missing: string[] = [];
              if (!fullName.trim()) missing.push("Full Name");
              if (!email.trim()) missing.push("Email Address");
              if (!phone.trim()) missing.push("Phone Number");
              if (!city.trim()) missing.push("City");
              if (!address.trim()) missing.push("Address");

              if (missing.length > 0) {
                window.alert(
                  `Please fill the following: ${missing.join(", ")}`,
                );
                return;
              }

              const ok = window.confirm("Confirm order and clear your cart?");
              if (ok) {
                dispatch(clearCart());
                setFullName("");
                setEmail("");
                setPhone("");
                setCity("");
                setAddress("");
              }
            }}
            className="w-full mt-6 bg-cyan-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white py-3 rounded-lg hover:bg-cyan-700 transition"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
