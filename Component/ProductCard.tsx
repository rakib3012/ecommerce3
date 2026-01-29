"use client";
import { Product } from "@/lib/hook/fetchingProductData";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addToCart } from "@/store/reducer/cartReducer";
import { toast } from "react-toastify";

const ProductCard = ({ product }: { product: Product }) => {
  const dispatch = useDispatch();
  const firstImage = product.images?.[0];

  return (
    <div
      className="group relative rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 border overflow-hidden flex flex-col
      bg-white border-slate-100
      dark:bg-slate-800 dark:border-slate-700"
    >
      {/* IMAGE + BADGES */}
      <Link href={`/product_details/${product.id}`} className="block flex-1">
        <div
          className="relative h-52 flex justify-center items-center bg-gradient-to-br from-slate-50 to-slate-100 p-4
          dark:from-slate-800 dark:to-slate-700"
        >
          {firstImage && (
            <Image
              src={firstImage}
              width={220}
              height={220}
              alt={product.title}
              className="object-contain drop-shadow-sm group-hover:scale-105 transition-transform duration-300"
            />
          )}

          {/* Rating badge */}
          {product.rating && (
            <div
              className="absolute top-3 left-3 flex items-center gap-1 rounded-full px-2 py-1 text-xs font-medium shadow-sm
              bg-white/90 text-amber-500
              dark:bg-slate-800/80 dark:text-amber-300"
            >
              <span>★</span>
              <span>{product.rating.toFixed(1)}</span>
            </div>
          )}
        </div>

        {/* CONTENT */}
        <div className="p-4 space-y-2">
          <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400 line-clamp-1">
            {product.brand || product.category}
          </p>
          <h3 className="text-sm md:text-base font-semibold text-slate-900 dark:text-slate-100 line-clamp-2 min-h-[2.5rem]">
            {product.title}
          </h3>

          <div className="flex items-center justify-between pt-2">
            <div className="flex items-baseline gap-1">
              <p className="text-lg font-bold text-emerald-600 dark:text-emerald-400">
                ${product.price}
              </p>
              {product.discountPercentage > 0 && (
                <p className="text-xs text-slate-400 dark:text-slate-500 line-through">
                  $
                  {(
                    product.price /
                    (1 - product.discountPercentage / 100)
                  ).toFixed(0)}
                </p>
              )}
            </div>
            {product.stock !== undefined && (
              <p className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">
                In stock: {product.stock}
              </p>
            )}
          </div>
        </div>
      </Link>

      {/* BUTTONS */}
      <div className="p-4 pt-0 flex items-center justify-between gap-2">
        <button
          onClick={() => {
            dispatch(addToCart(product));
            toast.success(`${product.title} added to cart`, {});
          }}
          className="cursor-pointer flex-1 inline-flex items-center justify-center rounded-full text-sm font-semibold px-3 py-2 shadow-sm transition-colors duration-200
            bg-emerald-500 hover:bg-emerald-600 text-white
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/40
            dark:bg-emerald-600 dark:hover:bg-emerald-500"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
