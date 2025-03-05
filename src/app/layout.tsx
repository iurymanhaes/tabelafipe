import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { FipeProvider } from "@/contexts/FipeProvider";

const roboto = Roboto({
  weight: ["400"],
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tabela Fipe",
  description: "Consulte valores de veículos na Tabela Fipe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${roboto.variable}`}>
        <FipeProvider>{children}</FipeProvider>
      </body>
    </html>
  );
}
