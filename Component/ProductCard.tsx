"use client";
import { Product } from "@/app/hook/fetchingProductData";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addToCart } from "@/store/reducer/cartReducer";

const ProductCard = ({ product }: { product: Product }) => {
  const dispatch = useDispatch();
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-200 overflow-hidden">
      {/* IMAGE */}
      <div className="h-48 flex justify-center items-center bg-gray-100">
        {product.images?.map((img, i) =>
          img ? (
            <Image
              key={i}
              src={img}
              width={200}
              height={200}
              alt={`${product.title}-${i}`}
            />
          ) : null
        )}
      </div>

      {/* CONTENT */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          {product.title}
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
         <button
          onClick={() => dispatch(addToCart(product))}
          className="bg-cyan-200 text-white px-3 py-1 rounded hover:bg-cyan-700 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
