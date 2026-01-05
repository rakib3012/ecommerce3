import { useQuery } from "@tanstack/react-query";
import { Product } from "./fetchingProductData";


const fetchData = async (id: string): Promise<Product> => {
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch product (status: ${response.status})`);
  }
  const res = await response.json();
  return res;
};

export const useFetchDynamicProductData = ({id}: {id: string}) => {
  return useQuery<Product, Error>({
    queryKey: ["product_data", id],
    queryFn: () => fetchData(id),
    
  });
};
