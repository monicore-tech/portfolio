import Image from "next/image";
import Link from "next/link";
import { allProjects } from "@/content/work";
import { motion } from "framer-motion";

const ProjectCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {allProjects.map((project, index) => {
        const isLarge = index % 4 === 0 || index % 4 === 3;
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            key={project.id}
            className={`border border-black dark:border-white p-4 flex flex-col justify-between ${
              isLarge ? "md:col-span-2 md:row-span-2" : "md:col-span-1"
            }`}
          >
            <Link href={`/work/${project.slug}`} className="relative group overflow-hidden block">
              <Image
                loading="lazy"
                src={project.image}
                alt={project.title}
                width={isLarge ? 800 : 400}
                height={isLarge ? 600 : 400}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                style={{ viewTransitionName: `project-image-${project.slug}` }}
              />
            </Link>
            <div className="mt-4">
              <h3 className="text-xl font-bold uppercase tracking-tighter">
                {project.title}
              </h3>
              <p className="text-sm opacity-70 mt-1 line-clamp-2">
                {project.description}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default ProjectCard;
