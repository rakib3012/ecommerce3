import Image from "next/image";
import Link from "next/link";
import React from "react";

const HomeComponent = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* ===== HERO SECTION ===== */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-16 py-20 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          {/* Text */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Smart Shopping <br />
              <span className="text-emerald-600">Starts Here</span>
            </h1>

            <p className="text-gray-600 text-lg max-w-md">
              Discover quality products, trusted brands, and unbeatable prices —
              all in one place.
            </p>

            <div className="flex gap-4">
              <Link href="/shop">
                <button className="bg-emerald-600 text-white px-7 py-3 rounded-lg font-medium hover:bg-emerald-700 transition">
                  Shop Now
                </button>
              </Link>

              <Link href="/shop">
                <button className="border border-gray-300 text-gray-700 px-7 py-3 rounded-lg font-medium hover:bg-gray-100 transition">
                  Browse Products
                </button>
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <Image
              src="/images/hero.png"
              alt="Hero Image"
              width={450}
              height={450}
              priority
            />
          </div>
        </div>
      </section>

      {/* ===== FEATURES SECTION ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <h2 className="text-3xl font-semibold text-center text-gray-900 mb-14">
            Why Customers Choose Us
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card */}
            <div className="p-6 rounded-xl border bg-gray-50 hover:bg-white hover:shadow-lg transition">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Fast Delivery
              </h3>
              <p className="text-sm text-gray-600">
                Quick and reliable delivery across the country.
              </p>
            </div>

            <div className="p-6 rounded-xl border bg-gray-50 hover:bg-white hover:shadow-lg transition">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Secure Payments
              </h3>
              <p className="text-sm text-gray-600">
                Encrypted and trusted payment methods.
              </p>
            </div>

            <div className="p-6 rounded-xl border bg-gray-50 hover:bg-white hover:shadow-lg transition">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Trusted Quality
              </h3>
              <p className="text-sm text-gray-600">
                Carefully selected products from top brands.
              </p>
            </div>

            <div className="p-6 rounded-xl border bg-gray-50 hover:bg-white hover:shadow-lg transition">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Wide Selection
              </h3>
              <p className="text-sm text-gray-600">
                Thousands of products to match your needs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeComponent;
