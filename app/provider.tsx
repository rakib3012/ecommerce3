"use client";

import { store } from "@/store/reducer";
import { HeroUIProvider } from "@heroui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider as NextThemesProvider } from "next-themes";

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <HeroUIProvider>
        <Provider store={store}>
          <QueryClientProvider client={queryClient}>
            {children}
            <ToastContainer
              position="top-right"
              autoClose={2000}
              hideProgressBar={false}
              newestOnTop
              closeOnClick
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
          </QueryClientProvider>
        </Provider>
      </HeroUIProvider>
    </NextThemesProvider>
  );
}
