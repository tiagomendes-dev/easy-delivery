import CartSidebar from "@/components/cart/sidebar";

export default function Header() {
  return (
    <header className="h-11 px-10 grid grid-cols-3 items-center">
      <div className="text-left">
        <CartSidebar />
      </div>
      <div className="font-semibold text-lg flex-1 text-center">
        Easy Delivery
      </div>
    </header>
  );
}
