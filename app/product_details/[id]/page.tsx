import ProductDetails from "@/Component/ProductDetails";
import React from "react";


 
 type params={
    id: string;
  };
 
const ProductDetailsPage = ({ params }:{params: params}) => {


  return (
    <div className="min-h-screen p-8">
      <ProductDetails params={params} />
    </div>
  );
};

export default ProductDetailsPage;
