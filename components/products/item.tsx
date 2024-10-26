"use client";

import { useCartStore } from "@/app/stores/cart-store";
import { Product } from "@/app/types/product";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";

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

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div
          className="rounded-lg relative group transition"
          onClick={() => setSelectedProduct(item)}
        >
          <div className="h-48 w-full shadow bg-primary/20 rounded-lg" />
          <div className="pt-2 pb-3">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm line-clamp-1">{item.name}</h3>
                <p className="text-black font-semibold text-sm">
                  {item.price.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent>
        {selectedProduct && (
          <>
            <DialogHeader className="">
              <DialogTitle className="my-4 text-center">
                {selectedProduct.name}
              </DialogTitle>
              <DialogDescription>
                <div className="flex items-center flex-col gap-4">
                  <div className="h-48 w-full shadow bg-primary/20 rounded-lg" />

                  {selectedProduct.ingredients}
                </div>
              </DialogDescription>
            </DialogHeader>
            <div className="mt-4">
              <p className="text-lg font-bold text-center mb-4">
                {selectedProduct.price.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>

              <p className="text-black font-semibold text-sm"></p>
              <Button onClick={handleAddToCart} className="w-full">
                Adicionar ao carrinho
              </Button>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};
