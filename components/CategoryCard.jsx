import { aboutContent } from "@/content/about";

const CategoryCard = () => {
  return (
    <div className="flex select-none max-w-lg text-[0.65rem] md:text-sm lg:text-[0.9rem] xl:text-base items-center font-semibold justify-between w-[80%] sm:w-[75%] md:w-[70%] lg:w-[65%] xl:w-[60%]  mx-auto mt-6 mb-8 ">
      {aboutContent.categories.map((category) => (
        <div key={category.label} className={category.className}>
          {category.label}
        </div>
      ))}
    </div>
  );
};

export default CategoryCard;
