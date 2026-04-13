/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";

import TechCard from "@/components/TechCard";

import {
  HiOutlineArrowLongLeft,
  HiOutlineArrowLongRight,
} from "react-icons/hi2";
import { techContent } from "@/content/tech";
import { siteConfig } from "@/content/shared/site";

const tech = () => {
  const data = techContent.items;
  const [idNumber, setIdNumber] = useState(0);
  const Icon = data[idNumber].icon;
  const changeId = (id) => {
    setIdNumber(id);
  };
  const rightArrow = () => {
    if (idNumber + 1 >= data.length) {
      setIdNumber(0);
    } else {
      setIdNumber(idNumber + 1);
    }
  };
  const leftArrow = () => {
    if (idNumber === 0) {
      setIdNumber(data.length - 1);
    } else {
      setIdNumber(idNumber - 1);
    }
  };

  useEffect(() => {
    console.clear();
    console.log.apply(console, [
      "%c Core tools and capabilities.\n",
      "color: #fff; background: #8000ff; padding:5px 0;",
    ]);
  }, []);

  return (
    <div className="min-h-[75vh] md:min-h-[73vh] px-10 sm:px-20 md:px-32 lg:mb-12 lg:px-60 xl:px-80 mx-auto">
      <Head>
        <title>{techContent.pageTitle}</title>
        <link rel="icon" href={siteConfig.seo.favicon} />
      </Head>
      <main className="max-w-screen max-w-5xl mx-auto">
        <div className="pt-24 flex flex-col mx-auto">
          <h2 className="selection:text-black/40 dark:selection:text-white/40 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent items-center mx-auto text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold ">
            Tech Stack
          </h2>
          <p className="mt-8 max-w-xl text-center md:w-[70%] mx-auto text-sm md:text-base lg:text-xl mb-2 px-2">
            {techContent.intro}
          </p>
          <div className="select-none flex justify-center space-x-4 items-center mt-2 text-gray-400">
            <span className="text-gray-300">~~~~~~~~</span>
            <p className="text-[#000] dark:text-[#fff]">✦</p>
            <span className="text-gray-300">~~~~~~~~</span>
          </div>
        </div>
        <div className="flex mx-auto justify-between mt-12 space-x-4 md:space-x-6 lg:space-x-auto items-center">
          <button
            className="font-space group bg-[#c7dada] dark:bg-[#939f9f] dark:hover:bg-[#828686] h-max w-max hover:bg-[#f7eeff]  px-1 py-1 rounded-full select-none "
            onClick={leftArrow}
          >
            <HiOutlineArrowLongLeft className=" w-5 h-3 sm:w-6 sm:h-4 md:w-8 md:h-5 lg:w-10 lg:h-6 stroke-[3] group-hover:fill-[#00bdbd]" />
          </button>
          <div className="bg-gradient-to-tr dark:from-[#dbfefe25] dark:via-[#f9f2ff10] dark:to-[#fff2ec20] from-[#dbfefe] via-[#f9f2ff] to-[#fff2ec] flex p-2 py-2 sm:p-3 md:p-4 lg:p-6  rounded-xl sm:rounded-[0.8rem] md:rounded-[1.2rem] lg:rounded-[1.6rem] mx-auto items-center justify-center space-x-2 sm:space-x-3 md:space-x-4 h-24 md:h-max lg:space-x-6 transition-all duration-700 ease-linear ">
            <div className="basis-[30%] lg:basis-[25%] h-16 w-12 sm:h-20 sm:w-20 md:h-28 md:w-28 lg:h-32 lg:w-32 rounded-2xl ">
              {data[idNumber].main ? (
                <div className="flex mx-auto rounded-2xl relative w-full h-full bg-white">
                  <Image
                    src={data[idNumber].main}
                    alt="tech"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className=" select-none p-1 sm:p-2 md:p-3 lg:p-4 h-full w-full flex mx-auto object-contain rounded-2xl "
                  />
                </div>
              ) : (
                <div className="flex h-full w-full items-center justify-center rounded-2xl bg-white text-gray-700">
                  {Icon && <Icon className="text-3xl" />}
                </div>
              )}
            </div>
            <div className=" basis-[70%] lg:basis-[75%] mx-auto transition-all duration-500 ">
              <div className="flex mb-1 justify-between items-center ">
                <h3 className="text-[0.7rem] sm:text-sm md:text-base lg:text-xl font-semibold tracking-wide ">
                  {data[idNumber].title}
                </h3>
                <div
                  className={`${data[idNumber].bg} ${data[idNumber].text} text-[0.45rem] sm:text-[0.6rem] md:text-xs sm:px-1 lg:px-2 rounded-xl h-max fon font-bold`}
                >
                  {data[idNumber].tag}
                </div>
              </div>
              <p className=" text-[0.58rem] sm:text-[0.7rem] md:text-[0.9rem] md:text-base lg:text-[1.015rem] font-normal md:w-[90%] ">
                {data[idNumber].desc}
              </p>
            </div>
          </div>
          <button
            className="bg-[#fce4fe] dark:bg-[#a995ab] dark:hover:bg-[#7a747b] h-max w-max hover:bg-[#f7eeff] group px-1 py-1 rounded-full select-none"
            onClick={rightArrow}
          >
            <HiOutlineArrowLongRight className="w-5 h-3 sm:w-6 sm:h-4 md:w-8 md:h-5 lg:w-10 lg:h-6 stroke-[3] group-hover:fill-[#dd44eb]" />
          </button>
        </div>
        <div className="mt-12 pb-12 grid grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8 w-[80%] sm:w-[75%] md:w-[70%] mx-auto items-center justify-items-center justify-center place-content-center ">
          {data.map((obj, i) => {
            return (
              <TechCard
                id={obj.id}
                alt={obj.title}
                main={obj.main}
                icon={obj.icon}
                key={i}
                changeId={changeId}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default tech;
