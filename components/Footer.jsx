import { useEffect, useState } from "react";
import Link from "next/link";
import { FiGitBranch } from "react-icons/fi";
import { FaRegStar } from "react-icons/fa";
import LinkedIn from "../public/icons/linkedin@2x.png";
import GitHub from "../public/icons/github@2x.png";
import Behance from "../public/icons/behance@2x.png";
import Gmail from "../public/icons/google@2x.png";
import Image from "next/image";
import Star from "@/public/Star.svg";
import { siteConfig } from "@/content/shared/site";

const Footer = () => {
  const [metaData, setMetaData] = useState({ star: 0, forks: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetch(siteConfig.footer.repoApi).then((res) =>
          res.json()
        );
        setMetaData({
          star: data.stargazers_count ?? 0,
          forks: data.forks_count ?? 0,
        });
      } catch (error) {
        setMetaData({ star: 0, forks: 0 });
      }
    };
    getData();
  }, []);

  const iconMap = {
    linkedin: LinkedIn,
    github: GitHub,
    behance: Behance,
    gmail: Gmail,
  };

  return (
    <div className=" flex select-none text-sm  py-16 mt-16 flex-col h-max items-center mx-auto justify-center">
      <div className="flex justify-center space-x-4 md:space-x-6 dark:text-white/70 text-gray-500 text-[0.6rem] sm:text-xs md:text-sm lg:text-md mt-2">
        {siteConfig.footer.socials.map((social) => (
          <Link
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noreferrer"
            className=" dark:hover:text-purple-400 hover:text-purple-600 font-semibold"
          >
            {social.icon ? (
              <Image src={iconMap[social.icon]} alt={social.label} width="30" />
            ) : (
              <span className="inline-flex h-[30px] w-[30px] items-center justify-center rounded-full border border-current text-[0.55rem] font-bold">
                {social.text}
              </span>
            )}
          </Link>
        ))}
      </div>
      <a
        href={siteConfig.footer.repoUrl}
        target="_blank"
        rel="noreferrer"
        className="flex flex-col text-center group hover:text-purple-800 w-max hover:font-black items-center text-gray-600 text-[0.6rem] sm:text-xs md:text-sm lg:text-md mt-8 md:mt-12 font-syne"
      >
        <div
          onMouseOut={() => setIsHovering(false)}
          onMouseOver={() => setIsHovering(true)}
          className="relative transition-all ease-in-out duration-1000"
        >
          <p
            className={`${
              isHovering && "scale-150 blur-[6px]"
            } group font-bold animate-text duration-700 transition-all linear group-hover:bg-white lg:text-gray-700 lg:dark:text-white/40 lg:group-hover:text-transparent bg-gradient-to-r mb-2 from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-sm sm:text-base md:text-lg`}
          >
            {siteConfig.footer.creditName}
          </p>
          {isHovering && (
            <p className="opacity-0 bg-purple-100 px-1 md:px-2 py-1 rounded-2xl bg-opacity-30 backdrop-blur-xl hover:opacity-100 transition-all duration-1000 linear absolute top-[35%] left-[50%] -translate-x-[50%]  -translate-y-[50%] w-max text-gray-800 font-bold text-base z-10 flex text-center">
              <span>{siteConfig.footer.repoLabel}</span>
              <span className="px-1">
                <Image src={Star} alt="star" className="h-5 w-5" />
              </span>
              <span>GitHub</span>
            </p>
          )}
        </div>
        <div className="flex space-x-4 ">
          <div className="flex dark:group-hover:text-purple-400 group-hover:text-purple-600  space-x-1 items-center ">
            <FaRegStar className="h-4 w-4 group-hover:stroke-[2.2px] dark:group-hover:fill-purple-400  group-hover:fill-purple-800 " />
            <p className="font-semibold text-sm group-hover:font-extrabold ">
              {metaData.star}
            </p>
          </div>
          <div className="flex  dark:group-hover:text-purple-400 group-hover:text-purple-600 space-x-1 items-center ">
            <FiGitBranch className="h-4 w-4 group-hover:stroke-[2.2px]  dark:group-hover:stroke-purple-400 group-hover:stroke-purple-800 " />
            <p className="font-semibold text-sm group-hover:font-extrabold ">
              {metaData.forks}
            </p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Footer;
