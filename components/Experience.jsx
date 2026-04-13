import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";

import { BsArrowUpRight } from "react-icons/bs";

import FloatBlack from "@/public/float-black.svg";
import FloatWhite from "@/public/float-white.svg";
import { homeContent } from "@/content/home";

const Experience = () => {
  const { systemTheme, theme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

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
    <div className=" mt-32 lg:mt-8 flex flex-col justify-start space-y-12 mx-auto items-center md:mt-20 lg:min-h-screen">
      <div className="bg-purple-300 w-36 h-36 rounded-lg p-4 select-none ">
        <div className="bg-purple-400  h-28 w-28 flex-col justify-end mx-auto blur-none z-40 items-center text-center text-xl text-white font-medium rounded-lg p-2">
          <div className="basis-[60%] text-5xl font-black ">
            <h2 className="text-border mt-1 ">
              {diffYears}
              <sup className="text-lg">{`.${diffMonths + 1}`}</sup>
            </h2>
          </div>
          <div className="basis-[30%] text-xs mt-3 font-out">
            {homeContent.experience.label}
          </div>
        </div>
      </div>
      <div className="w-[80%] mx-auto">
        <div className="text-center max-w-2xl mx-auto tracking-normal leading-5 text-base sm:text-[1.1rem] lg:text-lg">
          {homeContent.experience.overview}
        </div>
        <div className="flex justify-center select-none space-x-8 items-center  my-4">
          <span className="text-gray-300">~~~~~~~~</span>
          <p className="text-[#000] dark:text-[#fff]">✦</p>
          <span className="text-gray-300">~~~~~~~~</span>
        </div>
      </div>
      <div className="flex flex-col relative space-y-16 md:space-y-10 lg:space-y-8 items-center">
        {homeContent.experience.highlights.map((highlight, index) => (
          <div
            key={highlight.title}
            className={`${
              index === 0
                ? "drop-shadow-2xl"
                : "drop-shadow-xl rounded-[1.4rem] p-4 rounded-tl-none"
            } flex flex-col space-y-4 mx-6 md:mx-20 lg:mx-0 md:w-[70%] lg:w-[80%] max-w-2xl`}
          >
            <div className={highlight.titleClass}>{highlight.title}</div>
            <div className="font-normal sm:text-[0.95rem] md:text-base text-center">
              {highlight.description}
            </div>
          </div>
        ))}
        <div className="relative w-full h-80 transition duration-150 ease-out">
          <Image
            fill
            priority
            src={currentTheme === "dark" ? FloatBlack : FloatWhite}
            alt="Experience visual"
            sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw"
            className=""
          />
        </div>
      </div>
      <div className="w-[80%] max-w-2xl mx-auto">
        <div className="text-center font-normal mb-6 tracking-normal text-sm leading-5 sm:text-base lg:text-lg ">
          That is a snapshot of the work I enjoy most. If you want the practical
          version, the project section is the best place to see how it comes
          together.
        </div>
        <div className="flex justify-center space-x-3 md:space-x-6 lg:space-x-8 items-center  my-4">
          <div className=" group border-blue-400 hover:bg-blue-400 text-blue-500 hover:text-white hover:drop-shadow-2xl rounded-md md:rounded-xl px-2 py-1 md:px-4 md:py-2 shadow-md drop-shadow-lg dark:bg-blue-400 dark:shadow-none dark:hover:shadow-white select-none dark:text-white shadow-blue-300">
            <Link
              href={homeContent.experience.ctaHref}
              className="flex items-center font-normal lg:font-bold space-x-2 text-sm md:text-base"
            >
              <BsArrowUpRight className=" dark:stroke-white stroke-blue-400 stroke-2 group-hover:stroke-white " />
              <p>{homeContent.experience.ctaLabel}</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
