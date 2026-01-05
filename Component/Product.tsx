"use client";

 
import { useFetchingProductData } from "../app/hook/fetchingProductData";

import ProductCard from "./ProductCard";

const Product = () => {
  const { data, isLoading } = useFetchingProductData();

const products = data?.products || [];

  return (
   <div className="">
    {isLoading ? (
        <div className="flex justify-center items-center py-20">
          <div className="w-10 h-10 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="pb-16">
          {products?.length === 0 ? (
            <div className="text-center text-gray-500 text-lg">
              No products available at the moment.
            </div>
          ) : (
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
              {products?.map((product) => (
                <li key={product.id} className="w-full sm:w-64">
                  <ProductCard  product={product} />
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
   </div>
  );
};

export default Product;
