import logoImage from "@/public/logo.svg";
import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="text-primary font-bold flex items-center gap-2 text-xl select-none"
    >
      <Image src={logoImage} alt="Logo Wallet" width={32} height={32} />
      LojaWPP
    </Link>
  );
}
