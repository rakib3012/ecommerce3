import { useQuery } from "@tanstack/react-query";

// Dimensions of the product
export interface ProductDimensions {
  width: number;
  height: number;
  depth: number;
}

// Product review
export interface ProductReview {
  rating: number;
  comment: string;
  date: string; // ISO date string
  reviewerName: string;
  reviewerEmail: string;
}

// Meta information
export interface ProductMeta {
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  barcode: string;
  qrCode: string;
}

// Main Product Interface
export interface Product {
  id: number;
  title: string;
  description: string;
  category: string;

  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;

  tags: string[];
  brand: string;
  sku: string;
  weight: number;

  dimensions: ProductDimensions;

  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: "In Stock" | "Out of Stock" | string;

  reviews: ProductReview[];

  returnPolicy: string;
  minimumOrderQuantity: number;

  meta: ProductMeta;

  images: string[];
  thumbnail: string;
}

export interface ProductApiResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

const defaultResponse: ProductApiResponse = {
  products: [],
  total: 0,
  skip: 0,
  limit: 0
};

const fetchData = async (): Promise<ProductApiResponse> => {
  try {
    const response = await fetch(`https://dummyjson.com/products`);
    if (!response.ok) {
      throw new Error("data fetching faield ");
    }
    const res = await response.json();
    console.log("response data .....>>>", res);
    return res;
  } catch (err) {
    console.error(err);
    return defaultResponse;
  }
};

export const useFetchingProductData = () => {
  return useQuery<ProductApiResponse, Error>({
    queryKey: ["product_data"],
    queryFn: fetchData,
  });
};
