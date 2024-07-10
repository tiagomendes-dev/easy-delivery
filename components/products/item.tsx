"use client";

import { useCartStore } from "@/app/stores/cart-store";
import { Product } from "@/app/types/product";
import { Badge } from "@/components/ui/badge";
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

import { Separator } from "../ui/separator";

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
    <div className="rounded-lg shadow relative group hover:shadow-lg transition">
      <div className="h-32 w-full bg-primary/20 rounded-t-lg" />
      <div className="px-4 pt-4 h-32">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-bold text-2xl line-clamp-1">{item.name}</h3>
            <p className="text-primary font-black text-xl">
              {item.price.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
          </div>
          <Badge variant="secondary">{item.category}</Badge>
        </div>
        <Separator className="my-2" />
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger className="text-left">
              <p className="text-black/40 line-clamp-1">{item.ingredients}</p>
            </TooltipTrigger>
            <TooltipContent side="bottom">
              <p>{item.ingredients}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <div className="hidden absolute top-2 right-2 group-hover:block transition">
        <Button>Adicionar</Button>
      </div>
    </div>
  );
};
