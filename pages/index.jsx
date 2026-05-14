import { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { homeContent } from "@/content/home";
import { siteConfig } from "@/content/shared/site";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

export default function Home() {
  useEffect(() => {
    console.clear();
    console.log(`%c ${homeContent.consoleMessage} `, "color: #fff; background: #0066cc; padding:5px 0;");
  }, []);

  return (
    <>
      <Head>
        <title>{homeContent.pageTitle}</title>
        <link rel="icon" href={siteConfig.seo.favicon} />
      </Head>

      <main className="pt-24 pb-12">
        {/* Hero Section */}
        <div className="max-w-screen-xl mx-auto px-6 text-center mb-20">
          <div className="w-20 h-20 rounded-full bg-apple-blue mx-auto flex items-center justify-center text-white text-2xl font-bold mb-8 shadow-lg shadow-apple-blue/20">
            {siteConfig.profile.initials}
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-apple-text dark:text-white mb-4">
            {siteConfig.profile.brand} Support
          </h1>
          <p className="text-xl md:text-2xl text-apple-subtext dark:text-gray-400 max-w-2xl mx-auto">
            {siteConfig.profile.tagline}
          </p>
        </div>

        {/* Navigation Grid (Product Grid Style) */}
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 mb-32">
          {siteConfig.navigation.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              className="group flex flex-col items-center gap-3 transition-transform hover:scale-105"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white dark:bg-[#2d2d2f] shadow-sm border border-gray-100 dark:border-gray-800 flex items-center justify-center group-hover:shadow-md transition-shadow">
                {/* Placeholder for Icons - in real world would use specific product icons */}
                <span className="text-2xl font-bold text-apple-blue">
                  {item.name.charAt(0).toUpperCase()}
                </span>
              </div>
              <span className="text-sm font-medium text-apple-text dark:text-white">
                {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
              </span>
            </Link>
          ))}
        </div>

        {/* Quick Help Section (Cards Style) */}
        <div className="bg-[#f5f5f7] dark:bg-[#1d1d1f] py-20 mb-32 border-y border-gray-100 dark:border-gray-800">
          <div className="max-w-screen-xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Quick Help</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {siteConfig.footer.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="apple-card flex items-center justify-between group"
                >
                  <div className="flex flex-col">
                    <span className="text-lg font-bold text-apple-text dark:text-white">
                      {social.label}
                    </span>
                    <span className="text-sm text-apple-subtext dark:text-gray-400">
                      Reach out via {social.label}
                    </span>
                  </div>
                  <HiOutlineArrowNarrowRight className="w-5 h-5 text-apple-blue group-hover:translate-x-1 transition-transform" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-screen-xl mx-auto px-6">
          <Experience />
        </div>

        <div className="max-w-screen-xl mx-auto px-6 mt-32">
          <Contact />
        </div>
      </main>
    </>
  );
}
