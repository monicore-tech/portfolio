import Link from "next/link";
import { siteConfig } from "@/content/shared/site";

const Footer = () => {
  return (
    <footer className="bg-[#f5f5f7] dark:bg-[#1d1d1f] py-12 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-12">
          {/* Section 1 */}
          <div className="flex flex-col gap-4">
            <h5 className="text-xs font-bold text-apple-text dark:text-white uppercase tracking-wider">
              Navigation
            </h5>
            <div className="flex flex-col gap-2">
              {siteConfig.navigation.map((link) => (
                <Link
                  key={link.name}
                  href={link.link}
                  className="text-xs text-apple-subtext dark:text-gray-400 hover:text-apple-blue hover:underline"
                >
                  {link.name.charAt(0).toUpperCase() + link.name.slice(1)}
                </Link>
              ))}
            </div>
          </div>

          {/* Section 2 */}
          <div className="flex flex-col gap-4">
            <h5 className="text-xs font-bold text-apple-text dark:text-white uppercase tracking-wider">
              Social
            </h5>
            <div className="flex flex-col gap-2">
              {siteConfig.footer.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-apple-subtext dark:text-gray-400 hover:text-apple-blue hover:underline"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          {/* Section 3 */}
          <div className="flex flex-col gap-4">
            <h5 className="text-xs font-bold text-apple-text dark:text-white uppercase tracking-wider">
              Project
            </h5>
            <div className="flex flex-col gap-2">
              <a
                href={siteConfig.footer.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="text-xs text-apple-subtext dark:text-gray-400 hover:text-apple-blue hover:underline"
              >
                GitHub Repository
              </a>
              <span className="text-xs text-apple-subtext dark:text-gray-500 italic">
                {siteConfig.profile.signature}
              </span>
            </div>
          </div>

          {/* Section 4 */}
          <div className="flex flex-col gap-4 text-right md:text-left">
            <div className="text-2xl font-bold text-apple-blue">
              {siteConfig.profile.initials}
            </div>
            <p className="text-xs text-apple-subtext dark:text-gray-400 max-w-[200px]">
              {siteConfig.seo.description}
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-apple-subtext dark:text-gray-500">
            Copyright © {new Date().getFullYear()} {siteConfig.profile.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <span className="text-xs text-apple-subtext dark:text-gray-500 hover:text-apple-text dark:hover:text-white cursor-pointer underline-offset-4 hover:underline">
              Privacy Policy
            </span>
            <span className="text-xs text-apple-subtext dark:text-gray-500 hover:text-apple-text dark:hover:text-white cursor-pointer underline-offset-4 hover:underline">
              Terms of Use
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
