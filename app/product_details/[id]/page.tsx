import ProductDetails from "@/Component/ProductDetails";
import React from "react";

type PageProps = {
  params: {
    id: string;
  };
};
const ProductDetailsPage = ({ params }: PageProps) => {
  return (
    <div className="min-h-screen p-8">
      <ProductDetails id={params.id} />
    </div>
  );
};

export default ProductDetailsPage;
