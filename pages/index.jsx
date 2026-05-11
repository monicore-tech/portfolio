import { useEffect, useRef } from "react";
import Head from "next/head";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import Contact from "@/components/Contact";
import Experience from "@/components/Experience";

import { BsArrowUpRight } from "react-icons/bs";
import Link from "next/link";
import { homeContent } from "@/content/home";
import { siteConfig } from "@/content/shared/site";

export default function Home() {
  const heroRef = useRef(null);
  const headlineRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        pin: headlineRef.current,
        pinSpacing: false,
      });

      gsap.to(headlineRef.current, {
        opacity: 0,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "center top",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Head>
        <title>{homeContent.pageTitle}</title>
        <link rel="icon" href={siteConfig.seo.favicon} />
      </Head>
      <div className="px-6 md:px-12 lg:px-24 mx-auto max-w-[90rem]">
        <section ref={heroRef} className="h-screen flex flex-col justify-center border-b border-black dark:border-white">
          <div ref={headlineRef} className="z-10">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-none">
              {siteConfig.profile.name}
            </h1>
            <h2 className="text-2xl md:text-4xl mt-4 opacity-70 uppercase italic">
              {siteConfig.profile.title}
            </h2>
          </div>

          <div className="mt-12 max-w-3xl text-xl md:text-2xl uppercase border-l-4 border-black dark:border-white pl-6">
            <p>
              {siteConfig.profile.tagline} {homeContent.description}
            </p>
            <Link
              href={homeContent.primaryLink}
              target="_blank"
              className="mt-6 flex items-center gap-2 hover:line-through"
            >
              <span>{homeContent.linkLabel}</span>
              <BsArrowUpRight className="h-5 w-5" />
            </Link>
          </div>
        </section>

        <div className="mt-28">
          <Experience />
        </div>
        <div className="mt-28">
          <Contact />
        </div>
      </div>
    </>
  );
}
