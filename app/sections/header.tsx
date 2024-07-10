import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import { ShoppingCartIcon } from "lucide-react";

export default function Header() {
  return (
    <header className="shadow py-2">
      <div className="flex items-center justify-between container">
        <Logo />

        <Button className="" variant="secondary">
          <ShoppingCartIcon color="#facc15" size={16} />
        </Button>
      </div>
    </header>
  );
}
