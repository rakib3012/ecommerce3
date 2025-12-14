
import React from 'react'

 export type props ={
    id: string;
 }

const ProductDetails = async ({params }:{params: props}) => {
   
  const res = await fetch(
    `http://localhost:5000/products/${params.id}`,
    { cache: "no-store" }
  );

  const product = await res.json();

  return (
    <div>
       <h1 className="text-2xl font-bold mb-4">
        {product.name}
      </h1>

      <p className="text-gray-600">
        Product ID: <span className="font-semibold">{product.id}</span>
      </p>

    </div>
  )
}

export default ProductDetails