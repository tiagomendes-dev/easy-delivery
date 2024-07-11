import TabsSkeleton from "@/components/products/skeleton";
import ProductsTab from "@/components/products/tab";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="container mt-10">
      <Suspense fallback={<TabsSkeleton />}>
        <ProductsTab />
      </Suspense>
    </main>
  );
}
