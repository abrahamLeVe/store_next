"use client";
import { CartProvider } from "@/context/cartModal";
import { ProductProvider } from "@/context/productModal";
import { SpeechFilterProvider } from "@/context/speechFilter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { SessionProvider } from "next-auth/react";

interface ProvidersProps {
  children: React.ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <SessionProvider>
          <ProductProvider>
            <CartProvider>
              <SpeechFilterProvider>{children}</SpeechFilterProvider>
            </CartProvider>
          </ProductProvider>
        </SessionProvider>
      </QueryClientProvider>
    </>
  );
}
