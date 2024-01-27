import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header.view";
import React from "react";
import { Providers } from "@/components/context-wrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pineapple Pizzas System",
  description: "Demo made by Pineapple Pizzas without any Licenses",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <Providers>
          <main className="flex min-h-screen flex-col items-center justify-between p-16 py-24 gap-8">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
