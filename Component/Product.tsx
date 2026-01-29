"use client";

import { Input } from "@heroui/react";
import { useFetchingProductData } from "../lib/hook/fetchingProductData";

import ProductCard from "./ProductCard";

import { SearchIcon } from "lucide-react";
import { useState } from "react";

const Product = () => {
  const [searchItem, setSearchItem] = useState("");

  const { data, isLoading } = useFetchingProductData();

  const products = data?.products || [];

  console.log(" searchItem......", searchItem);

  const filterProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchItem.toLowerCase()),
  );

  return (
    <div className="bg-white dark:bg-slate-900  ">
      {isLoading ? (
        <div className="flex justify-center items-center py-20">
          <div className="w-10 h-10 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
        </div>
      ) : (
        <div>
          <div className="w-full flex  justify-center py-8">
            <Input
            variant="bordered"
              value={searchItem}
              onChange={(e) => setSearchItem(e.target.value)}
              classNames={{
                base: "max-w-full sm:max-w-[10rem] lg:max-w-4xl h-10",
                mainWrapper: "h-full",
                input: "text-small outline-none",
                inputWrapper:
                  "h-full  font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
              }}
              placeholder="Type to search..."
              size="sm"
              startContent={<SearchIcon size={18} />}
              type="search"
            />
          </div>
        <div className="text-center text-gray-500 text-lg">
            {products?.length > 0 && searchItem && filterProducts.length === 0 && <p>No matching products found</p>}

        </div>
          <div className="pb-16">
            {products?.length === 0 ? (
              <div className="text-center text-gray-500 text-lg">
                No products available at the moment.
              </div>
            ) : (
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
                {filterProducts?.map((product) => (
                  <li key={product.id} className="w-full sm:w-64">
                    <ProductCard product={product} />
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
