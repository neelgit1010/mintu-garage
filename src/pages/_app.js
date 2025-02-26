import "@/styles/globals.css";
import { Outfit } from "next/font/google";
import { CarProvider } from "@/store/CarStore";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${outfit.style.fontFamily};
        }
      `}</style>
      <CarProvider>
        <Component {...pageProps} />
      </CarProvider>
    </>
  );
}
