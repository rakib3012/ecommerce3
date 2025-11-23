"use client";
import Image from "next/image";
import { useFetchingProductData } from "../app/hook/fetchingProductData";
import Link from "next/link";

const Product = () => {
  const { data, isLoading } = useFetchingProductData();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-gray-500 text-lg animate-pulse">
          Loading products...
        </p>
      </div>
    );
  }

  if (!data || data.length === 0) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-red-500 text-lg">Failed to fetch products</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
      {data.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-200 overflow-hidden"
        >
          <div className="h-48 flex justify-center items-center bg-gray-100">
            {/* Placeholder for image if you have product.image */}
            {product.image ? (
              <Image
                src="/images/headphone.jpg"
                alt="Headphone"
                width={300} // set desired width
                height={300} // set desired height
                className="object-contain"
              />
            ) : (
              <span className="text-gray-400">No Image</span>
            )}
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {product.name}
            </h3>
            <p className="text-cyan-600 font-bold text-lg">${product.price}</p>
          </div>
          <div className="p-4 border-t border-gray-100 flex justify-between items-center">
            <Link href={"/product_details"}>
              <button className="bg-cyan-600 text-white px-3 py-1 rounded hover:bg-cyan-700 transition">
                View
              </button>
            </Link>
            <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded hover:bg-gray-300 transition">
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
