import TabsSkeleton from "@/components/products/skeleton";
import ProductsTab from "@/components/products/tab";
import Image from "next/image";
import { Suspense } from "react";

export default function Home() {
  return (
    <main>
      <div className="mx-3">
        <Suspense fallback={<TabsSkeleton />}>
          <ProductsTab />
        </Suspense>
      </div>
    </main>
  );
}
