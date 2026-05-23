import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <main className="land relative z-10">
        <Header />
        <Component {...pageProps} />
        <Footer />
      </main>
      <SpeedInsights route={router.pathname} />
    </ThemeProvider>
  );
}
