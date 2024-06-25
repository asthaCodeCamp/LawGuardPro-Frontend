import Header from "@/components/Header";
import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(new QueryClient());

  return (
    <>
      <Header />
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={true} />
        <SessionProvider session={pageProps.session}>
          <Component {...pageProps} />
          {/* <ToastContainer
            position="bottom-right"
            autoClose={3000}
            theme="light"
          /> */}
        </SessionProvider>
      </QueryClientProvider>
    </>
  );
}
