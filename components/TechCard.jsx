import Image from "next/image";

const TechCard = (props) => {
  const Icon = props.icon;

  return (
    <div
      className="tech group relative dark:bg-white/25 lg:bg-none lg:dark:hover:bg-slate-50/50  h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 lg:h-20 lg:w-20 tech rounded-md sm:rounded-lg md:rounded-xl "
      onClick={() => {
        props.changeId(props.id);
        window.scrollTo(0, 0);
      }}
    >
      {props.main ? (
        <div className="h-full w-full p-2 md:p-3 lg:p-4 relative">
          <Image
            src={props.main}
            fill
            className="select-none group-hover:scale-[1.1] transition-all duration-700 object-contain p-2 md:p-3 rounded-lg md:rounded-xl lg:rounded-2xl"
            alt={props.alt}
            sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw"
          />
        </div>
      ) : (
        <div className="flex h-full w-full items-center justify-center rounded-md sm:rounded-lg md:rounded-xl bg-white/70 p-2 text-gray-700 transition-all duration-700 group-hover:scale-[1.05] dark:bg-white/20 dark:text-white">
          {Icon && <Icon className="text-lg md:text-2xl" />}
        </div>
      )}
    </div>
  );
};

export default TechCard;
