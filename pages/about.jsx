import { useTheme } from "next-themes";
import Head from "next/head";
import Image from "next/image";
import CategoryCard from "@/components/CategoryCard";
import { aboutContent } from "@/content/about";
import { homeContent } from "@/content/home";
import { siteConfig } from "@/content/shared/site";

export default function About() {
  const { systemTheme, theme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div className="max-w-screen-xl mx-auto px-6 py-24">
      <Head>
        <title>{aboutContent.pageTitle}</title>
        <link rel="icon" href={siteConfig.seo.favicon} />
      </Head>
      <main>
        <div className="text-center mb-16">
          <h1 className="apple-title mb-8">About</h1>
          <div className="w-32 h-32 rounded-full bg-apple-blue mx-auto flex items-center justify-center text-white text-3xl font-bold mb-8 shadow-lg">
            {siteConfig.profile.initials}
          </div>
          <p className="text-xl md:text-2xl text-apple-subtext dark:text-gray-400 max-w-2xl mx-auto">
            {aboutContent.subtitle}
          </p>
        </div>

        <CategoryCard />

        <div className="max-w-3xl mx-auto bg-white dark:bg-[#2d2d2f] rounded-3xl p-8 md:p-12 border border-gray-100 dark:border-gray-800 shadow-sm">
          <p className="text-lg leading-relaxed text-apple-text dark:text-gray-300 mb-12">
            {aboutContent.intro} {aboutContent.paragraphs[0]} {aboutContent.paragraphs[1]}
          </p>

          <h3 className="text-sm font-bold text-apple-subtext dark:text-gray-500 uppercase tracking-widest mb-4">
            Contact Info
          </h3>
          <div className="space-y-4">
            {homeContent.contact.links.map((link) => (
              <div key={link.label} className="flex flex-col md:flex-row md:items-center gap-2">
                <span className="font-semibold text-apple-text dark:text-white w-24">{link.label}:</span>
                <a
                  href={link.href}
                  target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                  className="text-apple-blue hover:underline"
                >
                  {link.value}
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center">
          <span className="text-2xl font-bold text-apple-blue italic">
            {siteConfig.profile.signature}
          </span>
        </div>
      </main>
    </div>
  );
}
