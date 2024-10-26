import { getAllProducts } from "@/app/services/product";
import { Product } from "@/app/types/product";
import { ProductEmpty } from "@/components/products/empty";
import { ProductItem } from "@/components/products/item";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type Tab = {
  title: string;
  value: string;
  products: Product[];
};

const ProductsTab = async () => {
  const products = await getAllProducts();

  const tabs = [
    {
      title: "Todos",
      value: "todos",
      products: products,
    },
    {
      title: "Pizza",
      value: "pizza",
      products: products.filter((item) => item.category === "Pizza"),
    },
    // {
    //   title: "Hambúrguer",
    //   value: "hambúrguer",
    //   products: products.filter((item) => item.category === "Hambúrguer"),
    // },
    {
      title: "Doces",
      value: "doces",
      products: products.filter((item) => item.category === "Doces"),
    },
    // {
    //   title: "Combos",
    //   value: "combos",
    //   products: products.filter((item) => item.category === "Combos"),
    // },
    {
      title: "Salgados",
      value: "salgados",
      products: products.filter((item) => item.category === "Salgados"),
    },
    {
      title: "Bebidas",
      value: "bebidas",
      products: products.filter((item) => item.category === "Bebidas"),
    },
    // {
    //   title: "Combos Japoneses",
    //   value: "combos japoneses",
    //   products: products.filter((item) => item.category === "Combos Japoneses"),
    // },
    // {
    //   title: "Combos Árabes",
    //   value: "combos árabes",
    //   products: products.filter((item) => item.category === "Combos Árabes"),
    // },
    // {
    //   title: "Combos Italianos",
    //   value: "combos italianos",
    //   products: products.filter((item) => item.category === "Combos Italianos"),
    // },
  ];

  return (
    <Tabs defaultValue="todos">
      <TabsList className="flex scrollbar">
        {tabs.map((item) => (
          <TabsTrigger key={item.value} value={item.value} className="">
            {item.title}
          </TabsTrigger>
        ))}
      </TabsList>
      {tabs.map((item) => (
        <TabsContent key={item.value} value={item.value} className="mt-6">
          {item.products.length > 0 && (
            // <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-4">
            //   {item.products.map((product) => (
            //     <ProductItem key={product.id} item={product} />
            //   ))}
            // </div>
            <div>
              <div className="grid grid-cols-2 gap-2">
                {item.products.map((product) => (
                  <ProductItem key={product.id} item={product} />
                ))}
              </div>
            </div>
          )}

          {item.products.length === 0 && <ProductEmpty />}
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default ProductsTab;
