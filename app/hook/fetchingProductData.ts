import { useQuery } from "@tanstack/react-query";

export interface Product {
  id: string;
  name: string;
  price: number;
  brand: string;
  color: string;
  image: string;
  categoryId: number;
}

export interface ApiErrorResponse {
  status: "failed";
  message: string;
}

const defaultResponse: Product[] = [];

const fetchData = async (): Promise<Product[]> => {
  try {
    const response = await fetch(`http://localhost:5000z/products`);
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
  return useQuery<Product[], Error>({
    queryKey: ["product_data"],
    queryFn: fetchData,
  });
};
