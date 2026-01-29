"use client";

import { useState } from "react";
import { useFetchDynamicProductData } from "@/lib/hook/fetchDynamicProduct";
import { useFetchingProductData } from "@/lib/hook/fetchingProductData";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, modifyQuantityAnItem } from "@/store/reducer/cartReducer";
import type { CartItem } from "@/store/reducer/cartReducer";
import type { Product } from "@/lib/hook/fetchingProductData";
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
        (item: Product) =>
          item.category === data.category && item.id !== data.id,
      )
    : [];

  const addProductWithQuantity = (product: Product, qty: number) => {
    const existingItem = cart.find((item: CartItem) => item.id === product.id);

    if (existingItem) {
      const newQuantity = existingItem.quantity + qty;
      dispatch(
        modifyQuantityAnItem({
          id: product.id,
          quantity: newQuantity,
        }),
      );
    } else {
      dispatch(addToCart(product));
      if (qty > 1) {
        dispatch(
          modifyQuantityAnItem({
            id: product.id,
            quantity: qty,
          }),
        );
      }
    }

    toast.success(`${qty} × ${product.title} added to cart`);
  };

  const addToCartHandler = () => addProductWithQuantity(data, quantity);

  return (
    <div className="max-w-6xl mx-auto p-6 md:p-12 space-y-12">
      <div
        className="grid md:grid-cols-2 gap-8 rounded-lg shadow-lg
        bg-white dark:bg-slate-800"
      >
        {/* IMAGE */}
        <div
          className="flex justify-center items-center rounded-lg p-4
          bg-gray-100 dark:bg-slate-700"
        >
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
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-slate-100">
              {data.title}
            </h1>
            <p className="font-bold text-2xl mb-2 text-cyan-600 dark:text-cyan-400">
              ${data.price}
            </p>
            {data.rating && (
              <p className="mb-2 text-yellow-500 dark:text-yellow-400">
                ⭐⭐⭐ {data.rating.toFixed(1)}
              </p>
            )}
            <p className="mb-4 text-gray-700 dark:text-slate-300">
              {data.description}
            </p>
            <p className="mb-1 text-gray-600 dark:text-slate-400">
              Stock: <span className="font-semibold">{data.stock}</span>
            </p>
            <p className="mb-1 text-gray-600 dark:text-slate-400">
              Brand: <span className="font-semibold">{data.brand}</span>
            </p>
            <p className="mb-6 text-gray-600 dark:text-slate-400">
              Category: <span className="font-semibold">{data.category}</span>
            </p>

            {/* Quantity selector */}
            <div className="mt-4 flex items-center gap-4">
              <span className="font-medium text-gray-700 dark:text-slate-300">
                Quantity:
              </span>
              <div
                className="inline-flex items-center gap-2 rounded-full px-3 py-1
                bg-gray-100 dark:bg-slate-700"
              >
                <button
                  type="button"
                  aria-label="Decrease quantity"
                  onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                  className="h-7 w-7 flex items-center justify-center rounded-full text-xs
                    bg-white text-slate-700 border border-slate-200 hover:bg-cyan-50 hover:border-cyan-300
                    dark:bg-slate-800 dark:text-slate-200 dark:border-slate-600 dark:hover:bg-slate-700 dark:hover:border-cyan-400"
                >
                  -
                </button>
                <span className="font-semibold min-w-7 text-center text-slate-800 dark:text-slate-200">
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
                  className="h-7 w-7 flex items-center justify-center rounded-full text-xs
                    bg-white text-slate-700 border border-slate-200 hover:bg-cyan-50 hover:border-cyan-300
                    dark:bg-slate-800 dark:text-slate-200 dark:border-slate-600 dark:hover:bg-slate-700 dark:hover:border-cyan-400"
                >
                  +
                </button>
              </div>
              <p className="text-xs text-gray-500 dark:text-slate-400">
                Available: <span className="font-semibold">{data.stock}</span>
              </p>
            </div>
          </div>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <button
              onClick={addToCartHandler}
              className="px-6 py-3 rounded-md transition font-semibold text-white
                bg-cyan-600 hover:bg-cyan-700
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/40
                dark:bg-cyan-500 dark:hover:bg-cyan-400"
            >
              Add to Cart
            </button>

            <button
              onClick={() => {
                const existingItem = cart.find(
                  (item: CartItem) => item.id === data.id,
                );

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
              className="px-6 py-3 rounded-md transition font-semibold border
                border-gray-300 hover:bg-gray-100
                dark:text-slate-200 dark:border-slate-600 dark:hover:bg-slate-700"
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
            {relatedProducts.map((item: Product) => (
              <div
                key={item.id}
                className="rounded-lg p-4 flex flex-col shadow-md
                  bg-white dark:bg-slate-800"
              >
                <Link href={`/product_details/${item.id}`} className="mt-auto">
                  <div
                    className="flex justify-center items-center rounded-md mb-4 h-40
                    bg-gray-100 dark:bg-slate-700"
                  >
                    <Image
                      src={item.images?.[0] || "/images/placeholder.png"}
                      alt={item.title}
                      width={200}
                      height={200}
                      className="object-contain rounded-md"
                    />
                  </div>

                  <h3 className="font-semibold mb-2 line-clamp-2 text-slate-900 dark:text-slate-100">
                    {item.title}
                  </h3>
                  <p className="font-bold mb-4 text-cyan-600 dark:text-cyan-400">
                    ${item.price}
                  </p>
                </Link>

                <button
                  onClick={() => addProductWithQuantity(item, 1)}
                  className="w-full py-2 rounded-md transition text-sm font-semibold text-white
                    bg-cyan-500 hover:bg-cyan-600
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/40
                    dark:bg-cyan-500 dark:hover:bg-cyan-400"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductDetails;
