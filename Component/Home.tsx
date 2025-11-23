import Link from 'next/link'
import React from 'react'

 

const HomeComponent = ( ) => {
  return (
    <div className="min-h-screen  ">
      {/* 🛍️ Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-center px-6 md:px-16 py-16 bg-gradient-to-right from-cyan-500 to-green-400 text-black">
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Welcome to <span className="text-yellow-300">Our Shop!</span>
          </h1>
          <p className="text-lg text-emerald-50">
            Discover top-quality products at unbeatable prices. Shop smart, live better!
          </p>
           <Link href={"/shop"}><button  className="bg-white text-emerald-600 px-6 py-3 rounded-xl font-semibold hover:bg-yellow-300 hover:text-emerald-800 transition duration-300">
        Shop Now
          </button></Link>
        </div>

        {/* <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <img
            src="https://cdn.dribbble.com/users/1787323/screenshots/11183547/media/9d63c3cb43a6ee2268e63c36fbb1c93b.png"
            alt="Shopping illustration"
            className="w-80 md:w-96 drop-shadow-lg animate-float"
          />
        </div> */}
      </section>

      {/* ⚡ Features Section */}
      <section className="py-8 px-6 md:px-16 bg-white">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Why Shop With Us?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-lg transition duration-300">
            
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Fast Delivery</h3>
            <p className="text-gray-600 text-sm">Get your products delivered in record time!</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-lg transition duration-300">
           
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Secure Payments</h3>
            <p className="text-gray-600 text-sm">Your transactions are safe and encrypted.</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-lg transition duration-300">
            
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Top Rated</h3>
            <p className="text-gray-600 text-sm">Thousands of happy customers love us!</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-lg transition duration-300">
            
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Wide Selection</h3>
            <p className="text-gray-600 text-sm">Explore a huge collection of top brands.</p>
          </div>
        </div>
      </section>
       
    </div>
  )
}

export default HomeComponent