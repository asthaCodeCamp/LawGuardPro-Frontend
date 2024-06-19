import Header from "@/components/Header";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />
        <ToastContainer
        position="bottom-right"
        autoClose={3000}
        theme="light"
        />
      </SessionProvider>
    </>
  );
}
