import { Cart } from "@/app/types/cart";
import { CartItemQuantity } from "@/components/cart/item-quantity";
import Image from "next/image";

type Props = {
  item: Cart;
};

export const CartItem = ({ item }: Props) => {
  return (
    <div className="flex items-star justify-between">
      <div className="flex gap-4">
        <div className="w-16 h-16 bg-primary/20 rounded" />
        <div className="flex justify-between flex-col">
          <p className="text-sm font-semibold">{item.product.name}</p>
          <CartItemQuantity cartItem={item} />
        </div>
      </div>
      <div>
        <p className="text-sm font-semibold">
          R$ {item.product.price.toFixed(2)}
        </p>
      </div>
    </div>
  );
};
