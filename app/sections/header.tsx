import CartSidebar from "@/components/cart/sidebar";
import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import { ShoppingCartIcon } from "lucide-react";

export default function Header() {
  return (
    // <header className="shadow py-2 border-b border-black/5">
    //   <div className="flex items-center justify-between container">
    //     <Logo />

    //     <CartSidebar />
    //   </div>
    // </header>
    <header className="h-11 px-10 grid grid-cols-3 items-center">
      <div className="text-left">
        <CartSidebar />
      </div>
      <div className="font-semibold text-lg flex-1 text-center">Loja</div>
    </header>
  );
}
