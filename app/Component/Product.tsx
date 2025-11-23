import React from "react";
import {  useFetchingProductData } from "../hook/fetchingProductData";

const Product = () => {
  const { data, isLoading } = useFetchingProductData();
  console.log("data...", data);

        if(!data){
            return <p className="mt-16">Faield to Fetch Data</p>
        }

        if(isLoading){
            return <p>Loding.....</p>
        }
        

  return (
    <div className=" flex gap-6 mt-5">
      
      {data?.map((product) => (
        <div
          key={product.id}
       
        >
       <div className=" border-2 border-cyan-600 p-4">
           <p>{product.name}</p>
           <p>{product.price}</p>
       </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
