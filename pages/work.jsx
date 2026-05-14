import { useEffect } from "react";
import Head from "next/head";
import ProjectCard from "@/components/ProjectCard";
import { workContent } from "@/content/work";
import { siteConfig } from "@/content/shared/site";

export default function Work() {
  useEffect(() => {
    console.clear();
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto px-6 py-24 min-h-screen">
      <Head>
        <title>{workContent.pageTitle}</title>
        <link rel="icon" href={siteConfig.seo.favicon} />
      </Head>
      <main>
        <div className="text-center mb-16">
          <h1 className="apple-title mb-4">Work</h1>
          <p className="text-xl md:text-2xl text-apple-subtext dark:text-gray-400 max-w-2xl mx-auto">
            {workContent.intro}
          </p>
        </div>

        <div className="mt-20">
          <ProjectCard />
        </div>
      </main>
    </div>
  );
}
