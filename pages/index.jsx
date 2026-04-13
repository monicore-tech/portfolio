import { useEffect } from "react";
import Head from "next/head";

import Contact from "@/components/Contact";
import Experience from "@/components/Experience";

import { BsArrowUpRight } from "react-icons/bs";
import Link from "next/link";
import { homeContent } from "@/content/home";
import { siteConfig } from "@/content/shared/site";

export default function Home() {
  useEffect(() => {
    console.clear();
    console.log.apply(console, [
      `%c ${homeContent.consoleMessage} %c\n`,
      "color: #fff; background: #8000ff; padding:5px 0;",
      "background: #242424; padding:5px 5px 5px 0",
    ]);
  }, []);

  return (
    <>
      <Head>
        <title>{homeContent.pageTitle}</title>
        <link rel="icon" href={siteConfig.seo.favicon} />
      </Head>
      <div className="lg:min-h-screen px-10 sm:px-20 md:px-32 lg:mb-12 lg:px-60 mx-auto max-w-[75rem]">
        <div className="lg:h-screen 2xl:h-max max-w-[90rem] mx-auto">
          <div className="flex flex-row justify-start items-center mt-20">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 via-indigo-500 to-red-400 text-2xl font-black text-white shadow-xl">
              {siteConfig.profile.initials}
            </div>
            <div className="flex flex-col ml-4">
              <h2 className="flex sm:text-2xl md:text-2xl lg:text-2xl">
                <span className="font-semibold">{siteConfig.profile.name}</span>
              </h2>
              <h3 className="text-[#717171bb]">{siteConfig.profile.title}</h3>
              <h3>
                <Link
                  href={homeContent.primaryLink}
                  target="_blank"
                  className="text-[#717171bb] flex items-center"
                >
                  <p>{homeContent.linkLabel}</p>
                  <BsArrowUpRight className="stroke-1 h-3" />
                </Link>
              </h3>
            </div>
          </div>
          <div className="mt-12 text-base md:text-xl lg:text-xl xl:text-xl 2xl:text-xl">
            <p className="sm:leading-6 md:leading-6 lg:leading-8">
              {siteConfig.profile.tagline} {homeContent.description}
            </p>
          </div>
        </div>
        <div className="mt-28 mx-auto">
          <Experience />
        </div>
        <div className="mt-28 mx-auto ">
          <Contact />
        </div>
      </div>
    </>
  );
}
