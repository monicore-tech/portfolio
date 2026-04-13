import { useTheme } from "next-themes";
import Head from "next/head";
import Image from "next/image";

import CategoryCard from "@/components/CategoryCard";

import Flash from "@/public/Flash.svg";
import Rocket from "@/public/Rocket.svg";
import Sparkles from "@/public/Sparkles.svg";
import love_black from "@/public/love-black.svg";
import love_white from "@/public/love-white.svg";
import { aboutContent } from "@/content/about";
import { homeContent } from "@/content/home";
import { siteConfig } from "@/content/shared/site";

export default function About() {
  const { systemTheme, theme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div className="px-10 sm:px-20 md:px-32 lg:mb-12 lg:px-60 mx-auto max-w-[75rem]">
      <Head>
        <title>{aboutContent.pageTitle}</title>
        <link rel="icon" href={siteConfig.seo.favicon} />
      </Head>
      <main className="  max-w-screen ">
        <div className=" mx-auto pt-16 -pb-10 max-w-7xl">
          <div className=" mx-auto flex flex-col ">
            <h1 className="mt-6 mb-12 bg-gradient-to-br to-blue-500 via-red-400/90 from-yellow-500  bg-clip-text text-transparent selection:text-gray-700 dark:selection:text-white/90 items-center mx-auto text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold">
              About
            </h1>
            <div className="mx-auto transition-all duration-1000 ease-in-out -mt-8">
              <div className="flex h-40 w-40 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 via-indigo-500 to-red-400 text-4xl font-black text-white shadow-xl">
                {siteConfig.profile.initials}
              </div>
            </div>
            <p className="mt-8 max-w-xl text-center md:w-[70%] mx-auto text-sm md:text-base lg:text-xl mb-2 px-2">
              {aboutContent.subtitle}
            </p>
            <div className="select-none flex justify-center space-x-4 items-center mt-2 text-gray-400">
              <span className="text-gray-300">~~~~~~~~</span>
              <p className="text-[#000] dark:text-[#fff]">✦</p>
              <span className="text-gray-300">~~~~~~~~</span>
            </div>
          </div>
          <CategoryCard />
          <div className=" text-[0.92rem] text-base mx-12 font-light dark:text-white text-gray-900">
            <p className="mt-6 mb-12 font-normal">
              {aboutContent.intro}{" "}
              <span className="inline-flex items-baseline">
                <Image
                  src={Rocket}
                  alt="rocket"
                  className="self-center w-5 h-5 mx-1"
                />
              </span>{" "}
              {aboutContent.paragraphs[0]}{" "}
              <span className="inline-flex items-baseline">
                <Image
                  src={Sparkles}
                  alt="sparkles"
                  className="self-center w-5 h-5 mx-1"
                />
              </span>{" "}
              {aboutContent.paragraphs[1]}{" "}
              <span className="inline-flex items-baseline">
                <Image
                  src={Flash}
                  alt="flash"
                  className="self-center w-5 h-5 mx-1"
                />
              </span>
            </p>

            <p className="text-gray-400 select-none font-semibold mb-1 dark:text-white/30 ">
              Contact
            </p>

            <p className="">
              {aboutContent.contactIntro}
              <br />
              {homeContent.contact.links.map((link, index) => (
                <span key={link.label}>
                  {index === 0 ? "You can reach me via " : ", "}
                  <span className="font-bold">{link.label}</span>{" "}
                  <a
                    className="underline underline-offset-4 decoration-2 decoration-purple-400 group select-all font-semibold dark:hover:text-purple-400 hover:text-purple-700 cursor-pointer select"
                    href={link.href}
                    target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={
                      link.href.startsWith("mailto:")
                        ? undefined
                        : "noopener noreferrer"
                    }
                  >
                    {link.value}
                  </a>
                  {index === homeContent.contact.links.length - 1 ? "." : ""}
                </span>
              ))}
            </p>
          </div>
          <div className="flex mx-auto justify-center mt-16 select-none">
            <span className="font-black font-app text-2xl md:text-3xl align-text-bottom tracking-wider mx-3 md:mx-6">
              {siteConfig.profile.signature}
            </span>
            {currentTheme === "dark" ? (
              <Image src={love_white} alt="love" width="30" className="-mt-4" />
            ) : (
              <Image src={love_black} alt="love" width="30" className="-mt-4" />
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
