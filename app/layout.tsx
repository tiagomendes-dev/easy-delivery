import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";

import "./globals.css";

import Footer from "@/app/sections/footer";
import Header from "@/app/sections/header";
import { Toaster } from "@/components/ui/toaster";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Easy Delivery",
  description:
    "O EasyDelivery é um serviço de delivery inovador que simplifica o processo de pedir comida. A interface intuitiva permite selecionar itens do menu, adicioná-los ao carrinho e visualizar o valor final. Ao confirmar o pedido, você fornece seu nome e endereço, e uma mensagem formatada com os detalhes do pedido é enviada diretamente para o WhatsApp do restaurante.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Header />
        {children}
        <Footer />

        <Toaster />
      </body>
    </html>
  );
}
