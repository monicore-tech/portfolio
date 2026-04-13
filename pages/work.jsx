import { useEffect } from "react";

import Head from "next/head";

import ProjectCard from "@/components/ProjectCard";
import { workContent } from "@/content/work";
import { siteConfig } from "@/content/shared/site";

export default function Work() {
  useEffect(() => {
    console.clear();
    console.log.apply(console, [
      "%c Selected project work.\n",
      "color: #fff; background: #8000ff; padding:5px 0;",
    ]);
  }, []);

  return (
    <div className="px-10 sm:px-20 md:px-32 md:-mb-52 lg:mb-0 lg:px-60 mx-auto max-w-[75rem]">
      <Head>
        <title>{workContent.pageTitle}</title>
        <link rel="icon" href={siteConfig.seo.favicon} />
      </Head>
      <main className="min-h-screen max-w-screen">
        <div className="pt-24 flex flex-col items-cen mx-auto">
          <h2 className="selection:text-black/40 dark:selection:text-white/40 bg-gradient-to-br from-green-400 to-blue-600 bg-clip-text text-transparent items-center mx-auto text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold">
            Work
          </h2>
          <p className="mt-8 max-w-xl text-center md:w-[70%] mx-auto text-sm md:text-base lg:text-xl mb-2 px-2">
            {workContent.intro}
          </p>
          <div className="select-none flex justify-center space-x-4 items-center mt-2 text-gray-400">
            <span className="text-gray-300">~~~~~~~~</span>
            <p className="text-[#000] dark:text-[#fff]">?</p>
            <span className="text-gray-300">~~~~~~~~</span>
          </div>
        </div>
        <div className="mt-20 mb-20">
          <ProjectCard />
        </div>
      </main>
    </div>
  );
}
