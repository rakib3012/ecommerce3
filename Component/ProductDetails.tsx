"use client";

import { useState } from "react";
import { useFetchDynamicProductData } from "@/app/hook/fetchDynamicProduct";
import { useFetchingProductData } from "@/app/hook/fetchingProductData";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, modifyQuantityAnItem } from "@/store/reducer/cartReducer";
import type { RootState } from "@/store/reducer";
import Link from "next/link";
import { toast } from "react-toastify";

const ProductDetails = () => {
  const params = useParams<{ id: string }>();
  const id = params.id;
  const router = useRouter();

  const { data, isLoading, isError, error } = useFetchDynamicProductData({
    id,
  });
  const { data: listData } = useFetchingProductData();
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart);
  const [quantity, setQuantity] = useState(1);
  console.log("params id", id);
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

  const relatedProducts = Array.isArray(listData?.products)
    ? listData.products.filter(
        (item) => item.category === data.category && item.id !== data.id,
      )
    : [];

  return (
    <div className="max-w-6xl mx-auto p-6 md:p-12 space-y-12">
      <div className="grid md:grid-cols-2 gap-8 bg-white shadow-lg rounded-lg">
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
        <div className="flex flex-col justify-between p-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {data.title}
            </h1>
            <p className="text-cyan-600 font-bold text-2xl mb-2">
              ${data.price}
            </p>
            {data.rating && (
              <p className="text-yellow-500 mb-2">
                ⭐⭐⭐ {data.rating.toFixed(1)}
              </p>
            )}
            <p className="text-gray-700 mb-4">{data.description}</p>
            <p className="text-gray-600 mb-1">
              Stock: <span className="font-semibold">{data.stock}</span>
            </p>
            <p className="text-gray-600 mb-1">
              Brand: <span className="font-semibold">{data.brand}</span>
            </p>
            <p className="text-gray-600 mb-6">
              Category: <span className="font-semibold">{data.category}</span>
            </p>

            {/* Quantity selector */}
            <div className="mt-4 flex items-center gap-4">
              <span className="text-gray-700 font-medium">Quantity:</span>
              <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1">
                <button
                  type="button"
                  aria-label="Decrease quantity"
                  onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                  className="h-7 w-7 flex items-center justify-center rounded-full bg-white text-slate-700 border border-slate-200 hover:bg-cyan-50 hover:border-cyan-300 text-xs"
                >
                  -
                </button>
                <span className="font-semibold text-slate-800 min-w-7 text-center">
                  {quantity}
                </span>
                <button
                  type="button"
                  aria-label="Increase quantity"
                  onClick={() =>
                    setQuantity((prev) =>
                      data.stock ? Math.min(data.stock, prev + 1) : prev + 1,
                    )
                  }
                  className="h-7 w-7 flex items-center justify-center rounded-full bg-white text-slate-700 border border-slate-200 hover:bg-cyan-50 hover:border-cyan-300 text-xs"
                >
                  +
                </button>
              </div>
              <p className="text-xs text-gray-500">
                Available: <span className="font-semibold">{data.stock}</span>
              </p>
            </div>
          </div>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href={"/cart"}>
              <button
                onClick={() => {
                  const existingItem = cart.find((item) => item.id === data.id);

                  if (existingItem) {
                    const newQuantity = existingItem.quantity + quantity;
                    dispatch(
                      modifyQuantityAnItem({
                        id: data.id,
                        quantity: newQuantity,
                      }),
                    );
                  } else {
                    // First add the product, then adjust quantity if needed
                    dispatch(addToCart(data));
                    if (quantity > 1) {
                      dispatch(
                        modifyQuantityAnItem({
                          id: data.id,
                          quantity,
                        }),
                      );
                    }
                  }

                  toast.success(`${quantity} × ${data.title} added to cart`);
                }}
                className="bg-cyan-600 text-white px-6 py-3 rounded-md hover:bg-cyan-700 transition font-semibold"
              >
                Add to Cart
              </button>
            </Link>
            <button
              onClick={() => {
                const existingItem = cart.find((item) => item.id === data.id);

                if (existingItem) {
                  const newQuantity = existingItem.quantity + quantity;
                  dispatch(
                    modifyQuantityAnItem({
                      id: data.id,
                      quantity: newQuantity,
                    }),
                  );
                } else {
                  dispatch(addToCart(data));
                  if (quantity > 1) {
                    dispatch(
                      modifyQuantityAnItem({
                        id: data.id,
                        quantity,
                      }),
                    );
                  }
                }

                toast.success(
                  `${quantity} × ${data.title} added. Going to checkout…`,
                );
                router.push("/checkout");
              }}
              className="border border-gray-300 px-6 py-3 rounded-md hover:bg-gray-100 transition font-semibold"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {relatedProducts.length > 0 && (
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            More in <span className="text-cyan-600">{data.category}</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {relatedProducts.map((item) => (
              <div
                key={item.id}
                className="bg-white shadow-md rounded-lg p-4 flex flex-col"
              >
                <div className="flex justify-center items-center bg-gray-100 rounded-md mb-4 h-40">
                  <Image
                    src={item.images?.[0] || "/images/placeholder.png"}
                    alt={item.title}
                    width={200}
                    height={200}
                    className="object-contain rounded-md"
                  />
                </div>

                <h3 className="font-semibold mb-2 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-cyan-600 font-bold mb-4">${item.price}</p>

                <Link href={`/product_details/${item.id}`} className="mt-auto">
                  <button className="w-full bg-cyan-500 text-white py-2 rounded-md hover:bg-cyan-600 transition text-sm font-semibold">
                    View Details
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductDetails;
