import { useEffect } from "react";
import { useRouter } from "next/router";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ReducedMotionToggle from "@/components/ReducedMotionToggle";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      if (!document.startViewTransition) return;
      document.startViewTransition();
    };

    router.events.on('routeChangeStart', handleRouteChange);
    return () => router.events.off('routeChangeStart', handleRouteChange);
  }, [router]);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // Variable Font Weight based on scroll
    const updateFontWeight = () => {
      const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      const weight = 400 + scrollPercent * 400; // Scale from 400 to 800
      document.documentElement.style.setProperty('--font-weight', weight);
    };

    window.addEventListener('scroll', updateFontWeight);

    return () => {
      lenis.destroy();
      window.removeEventListener('scroll', updateFontWeight);
    };
  }, []);

  return (
    <ThemeProvider defaultTheme="dark" enableSystem={true} attribute="class">
      <main className="land relative z-10 bg-white dark:bg-black">
        <Header />
        <Component {...pageProps} />
        <Footer />
        <ReducedMotionToggle />
      </main>
    </ThemeProvider>
  );
}
