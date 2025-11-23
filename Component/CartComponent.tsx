import Link from 'next/link';
import React from 'react'

 {}

const CartComponent = ( ) => {
  return (
     <div className="min-h-screen bg-gray-50 px-4 sm:px-8 py-10">
      {/* Header */}
      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
        🛒 Your Shopping Cart
      </h1>

      {/* Main Cart Box */}
      <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
        {/* Table Headings */}
        <div className="hidden md:grid grid-cols-6 md:justify-center font-semibold text-gray-700 bg-gray-100 px-8 py-3 border-b">
          <p className="text-center">Image</p>
          <p className="text-center ">Title</p>
          <p className="text-center">Price</p>
          <p className="text-center">Quantity</p>
          <p className="text-center">Subtotal</p>
          <p className="text-center">Action</p>
        </div>

        {/* Cart Items */}
        <div className="divide-y divide-gray-200">
          {/* {cart.length > 0 ? (
            cart.map((item) => <CartDetails key={item.id} product={item} />)
          ) : ( */}
            <div className="text-center py-12 text-gray-500">
              🛍️ Your cart is empty. <br />
              <span className="text-sm">
                Browse products and add them to your cart!
              </span>
            </div>
          {/* )} */}
        </div>

        {/* Total Summary */}
        {/* {cart.length > 0 && ( */}
          <div className=" grid md:grid grid-cols-4 md:justify-end px-6 py-6 bg-gray-50">
            <div className="div">
              <button
                className="w-50 mt-4 md:mt-0 bg-emerald-500 text-white px-6 py-2 rounded-lg hover:bg-emerald-600 transition duration-300"
                // onClick={() => dispatch({ type: "cart/clearCart" })}
              >
                Clear Cart
              </button>
            </div>
            <div className="text-gray-600 text-center text-sm mb-3 md:mb-0">
              Total Items : <span className="font-semibold">0</span>
            </div>
            <div className="text-xl font-semibold text-center text-emerald-600">
              Total Cost : <span className="text-gray-800">$0</span>
            </div>
            <div className="text-end">
             <Link href={"/checkout"}>
               <button className="w-50 mt-4 md:mt-0 bg-emerald-500 text-white px-6 py-2 rounded-lg hover:bg-emerald-600 transition duration-300">
                Proceed to Checkout
              </button>
             </Link>
            </div>
          </div>
        {/* )} */}
      </div>
    </div>
  );
};
export default CartComponent