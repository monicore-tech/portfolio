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
    <div className="px-6 md:px-12 lg:px-24 mx-auto max-w-[90rem]">
      <Head>
        <title>{workContent.pageTitle}</title>
        <link rel="icon" href={siteConfig.seo.favicon} />
      </Head>
      <main className="min-h-screen">
        <div className="pt-24 pb-12 border-b border-black dark:border-white mb-12">
          <h2 className="text-4xl md:text-6xl lg:text-8xl font-black uppercase tracking-tighter">
            Work
          </h2>
          <p className="mt-6 max-w-2xl text-lg md:text-xl opacity-80 uppercase italic">
            {workContent.intro}
          </p>
        </div>
        <div className="mb-20">
          <ProjectCard />
        </div>
      </main>
    </div>
  );
}
