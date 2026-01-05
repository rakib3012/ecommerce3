"use client";
import React from "react";

type CartItem = {
  id: number;
  title: string;
  price: number;
  quantity: number;
};

const cartItems: CartItem[] = [
  { id: 1, title: "Essence Mascara Lash Princess", price: 9.99, quantity: 2 },
  { id: 2, title: "iPhone 15 Pro Max", price: 1199, quantity: 1 },
];

const Checkout = () => {
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const shipping = 20;
  const total = subtotal + shipping;

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* LEFT - SHIPPING INFO */}
        <div className="md:col-span-2 bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="border rounded px-3 py-2"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="border rounded px-3 py-2"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="border rounded px-3 py-2"
            />
            <input
              type="text"
              placeholder="City"
              className="border rounded px-3 py-2"
            />
            <input
              type="text"
              placeholder="Address"
              className="border rounded px-3 py-2 md:col-span-2"
            />
          </form>
        </div>

        {/* RIGHT - ORDER SUMMARY */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between text-sm text-gray-700"
              >
                <span>
                  {item.title} × {item.quantity}
                </span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
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

          <button className="w-full mt-6 bg-cyan-600 text-white py-3 rounded-lg hover:bg-cyan-700 transition">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
