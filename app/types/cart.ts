import { Product } from "@/app/types/product";

export type Cart = {
	product: Product;
	quantity: number;
};