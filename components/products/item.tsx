"use client";

import { useCartStore } from "@/app/stores/cart-store";
import { Product } from "@/app/types/product";
import { Button } from "@/components/ui/button";
import { ToastAction } from "@/components/ui/toast";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useToast } from "@/components/ui/use-toast";
import Image from "next/image";

type Props = {
  item: Product;
};

export const ProductItem = ({ item }: Props) => {
  const { toast } = useToast();
  const { upsertCartItem } = useCartStore();

  function handleAddToCart() {
    upsertCartItem(item, 1);
    toast({
      title: "Adicionado ao carrinho",
      description: item.name,
      action: <ToastAction altText="fechar">Fechar</ToastAction>,
    });
  }

  return (
    <div className="overflow-hidden bg-slate-100 dark:bg-slate-800 dark:text-white rounded p-4 drop-shadow-md hover:drop-shadow-lg">
      <Image
        src={item.image}
        alt={item.name}
        width={400}
        height={300}
        className="w-full h-32 object-cover rounded"
      />
      <Button onClick={handleAddToCart} className="mt-4 w-full">
        Adicionar
      </Button>
      <div className="mt-2 flex flex-col">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger className="text-left">
              <p className="text-base font-semibold hover:decoration-dashed hover:underline transition">
                {item.name}
              </p>
            </TooltipTrigger>
            <TooltipContent>
              <p>{item.ingredients}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <p className="text-sm font-semibold">R$ {item.price.toFixed(2)}</p>
      </div>
    </div>
  );
};
