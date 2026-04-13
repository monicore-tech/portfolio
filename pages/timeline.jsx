import TimeLine from "@/components/TimeLine";
import Head from "next/head";
import React from "react";
import { timelineContent } from "@/content/timeline";
import { siteConfig } from "@/content/shared/site";

const Timeline = () => {
  return (
    <div className="px-10 sm:px-20 md:px-32 md:-mb-52 lg:mb-0 lg:px-60 mx-auto max-w-[75rem]">
      <Head>
        <title>{timelineContent.pageTitle}</title>
        <link rel="icon" href={siteConfig.seo.favicon} />
      </Head>
      <main className="min-h-screen max-w-screen">
        <div className="pt-24 flex flex-col items-cen mx-auto">
          <h2 className="selection:text-black/40 dark:selection:text-white/40 bg-gradient-to-r from-emerald-600 to-teal-400 bg-clip-text text-transparent items-center mx-auto text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold">
            Timeline
          </h2>
          <p className="mt-8 max-w-xl text-center md:w-[70%] mx-auto text-sm md:text-base lg:text-xl mb-2 px-2">
            {timelineContent.intro}
          </p>
          <div className="select-none flex justify-center space-x-4 items-center mt-2 text-gray-400">
            <span className="text-gray-300">~~~~~~~~</span>
            <p className="text-[#000] dark:text-[#fff]">?</p>
            <span className="text-gray-300">~~~~~~~~</span>
          </div>
          <div className="mt-10 md:ml-12 lg:ml-12">
            <TimeLine />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Timeline;
