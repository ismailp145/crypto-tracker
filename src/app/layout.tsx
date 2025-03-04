"use client";

import { ReactNode } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "@/app/globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <QueryClientProvider client={queryClient}>
          <Header />
          <main className="container mx-auto p-4">{children}</main>
          <Footer />
        </QueryClientProvider>
      </body>
    </html>
  );
}
