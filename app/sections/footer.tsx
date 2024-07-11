import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-5">
      <Separator />
      <div className="my-5 text-center text-sm opacity-50">
        Feito com 💛 por{" "}
        <Link href="https://tiagomendes.dev" className="font-bold">
          Tiago Mendes
        </Link>
      </div>
    </footer>
  );
}
