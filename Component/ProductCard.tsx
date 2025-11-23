"use client";
import { Product } from "@/app/hook/fetchingProductData";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }:{product:Product}) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-200 overflow-hidden">
      {/* IMAGE */}
      <div className="h-48 flex justify-center items-center bg-gray-100">
        {product.image ? (
          <Image
            src={product.image} // 👉 dynamic image support
            alt={product.name}
            fill
            className="object-contain"
          />
        ) : (
          <span className="text-gray-400">No Image</span>
        )}
      </div>

      {/* CONTENT */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          {product.name}
        </h3>
        <p className="text-cyan-600 font-bold text-lg">${product.price}</p>
      </div>

      {/* BUTTONS */}
      <div className="p-4 border-t border-gray-100 flex justify-between items-center">
        <Link href={`/product_details/${product.id}`}>
          <button className="bg-cyan-600 text-white px-3 py-1 rounded hover:bg-cyan-700 transition">
            View
          </button>
        </Link>
        <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded hover:bg-gray-300 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
