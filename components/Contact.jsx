import { homeContent } from "@/content/home";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const Contact = () => {
  return (
    <section className="py-20">
      <div className="apple-card bg-[#f5f5f7] dark:bg-[#2d2d2f] border-none p-12 md:p-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-apple-text dark:text-white mb-6">
          {homeContent.contact.heading}
        </h2>
        <p className="text-xl text-apple-subtext dark:text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
          {homeContent.contact.description}
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {homeContent.contact.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
              className="bg-white dark:bg-[#1d1d1f] rounded-2xl p-6 shadow-sm flex flex-col items-center gap-3 group hover:shadow-md transition-all border border-gray-100 dark:border-gray-800"
            >
              <span className="text-sm font-semibold text-apple-subtext dark:text-gray-500 uppercase tracking-widest">
                {link.label}
              </span>
              <span className="text-lg font-bold text-apple-text dark:text-white truncate w-full">
                {link.value}
              </span>
              <span className="text-apple-blue inline-flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all">
                Connect <HiOutlineArrowNarrowRight className="w-4 h-4" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
