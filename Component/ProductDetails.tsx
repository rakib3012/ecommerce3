"use client";


import { useFetchDynamicProductData } from "@/app/hook/fetchDynamicProduct";
import { useParams } from "next/navigation";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { addToCart } from "@/store/reducer/cartReducer";
import Link from "next/link";
 

const ProductDetails = () => {
 const params = useParams<{ id: string }>();
const id = params.id;

const { data, isLoading, isError, error } = useFetchDynamicProductData({ id });
  const dispatch = useDispatch();
console.log("params id",id)
// if (!id) return <div>Loading...</div>;


  // const { data, isLoading, isError, error } = useFetchDynamicProductData({id});

  if (isLoading) {
    return (
      <div className="py-16 text-center text-gray-500 animate-pulse">
        Loading product...
      </div>
    );
  }

  if (isError) {
    return (
      <div className="py-16 text-center text-red-600">
        Error loading product: {error?.message}
      </div>
    );
  }

  if (!data) {
    return (
      <div className="py-16 text-center text-gray-400">No product data.</div>
    );
  }

  const imageSrc = data.images?.[0] || "/images/placeholder.png";

  return (
    <div className="max-w-6xl mx-auto p-6 md:p-12 grid md:grid-cols-2 gap-8 bg-white shadow-lg rounded-lg">
      {/* IMAGE */}
      <div className="flex justify-center items-center bg-gray-100 rounded-lg p-4">
        <Image
          src={imageSrc}
          alt={data.title}
          width={400}
          height={400}
          className="object-contain rounded-lg"
        />
      </div>

      {/* DETAILS */}
      <div className="flex flex-col justify-between">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{data.title}</h1>
          <p className="text-cyan-600 font-bold text-2xl mb-2">
            ${data.price}
          </p>
          {data.rating && (
            <p className="text-yellow-500 mb-2">⭐⭐⭐ {data.rating.toFixed(1)}</p>
          )}
          <p className="text-gray-700 mb-4">{data.description}</p>
          <p className="text-gray-600 mb-1">
            Stock: <span className="font-semibold">{data.stock}</span>
          </p>
          <p className="text-gray-600 mb-6">
            Brand: <span className="font-semibold">{data.brand}</span>
          </p>
        </div>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Link href={"/cart"}>
          <button
            onClick={() => dispatch(addToCart(data))}
            className="bg-cyan-600 text-white px-6 py-3 rounded-md hover:bg-cyan-700 transition font-semibold"
          >
            Add to Cart
          </button>
          </Link>
          <button className="border border-gray-300 px-6 py-3 rounded-md hover:bg-gray-100 transition font-semibold">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
