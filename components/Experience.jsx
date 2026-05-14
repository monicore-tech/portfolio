import Link from "next/link";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { homeContent } from "@/content/home";

const Experience = () => {
  const today = new Date();
  const startDate = new Date(homeContent.experience.startDate);
  let diffYears = today.getFullYear() - startDate.getFullYear();
  let diffMonths = today.getMonth() - startDate.getMonth();
  if (
    diffMonths < 0 ||
    (diffMonths === 0 && today.getDate() < startDate.getDate())
  ) {
    diffYears--;
    diffMonths += 12;
  }

  return (
    <section className="py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-apple-text dark:text-white mb-4">
          Professional Snapshot
        </h2>
        <p className="text-lg text-apple-subtext dark:text-gray-400 max-w-2xl mx-auto">
          {homeContent.experience.overview}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {homeContent.experience.highlights.map((highlight) => (
          <div key={highlight.title} className="apple-card flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-apple-text dark:text-white mb-3">
                {highlight.title}
              </h3>
              <p className="text-apple-subtext dark:text-gray-400 mb-6 leading-relaxed">
                {highlight.description}
              </p>
            </div>
            <div className="mt-auto">
              <span className="inline-flex items-center gap-2 text-apple-blue font-semibold text-sm hover:underline cursor-pointer">
                Learn more <HiOutlineArrowNarrowRight className="w-4 h-4" />
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white dark:bg-[#2d2d2f] rounded-3xl p-8 md:p-12 border border-gray-100 dark:border-gray-800 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">
        <div className="flex-1">
          <h4 className="text-4xl md:text-5xl font-bold text-apple-blue mb-2">
            {diffYears}
            <span className="text-xl md:text-2xl font-medium">.{diffMonths + 1}</span>
          </h4>
          <p className="text-lg font-semibold text-apple-text dark:text-white">
            {homeContent.experience.label}
          </p>
        </div>
        <div className="flex-[2] text-apple-subtext dark:text-gray-400 text-lg leading-relaxed">
          {homeContent.experience.closing}
        </div>
        <div className="flex-1 flex justify-end">
          <Link
            href={homeContent.experience.ctaHref}
            className="bg-apple-blue text-white px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all"
          >
            {homeContent.experience.ctaLabel}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Experience;
