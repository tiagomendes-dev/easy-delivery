import { products } from "@/app/data/products";
import { Product } from "@/app/types/product";

export const getAllProducts = async (): Promise<Product[]> => {
  return new Promise((resolve, reject) => {
    return setTimeout(() => {
      resolve(products);
    }, 2000);
  });
};
