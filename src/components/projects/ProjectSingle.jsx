import { motion } from 'framer-motion';

const ProjectSingle = ({ title, image, desc, techStack }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, delay: 1 }}
      transition={{
        ease: 'easeInOut',
        duration: 0.7,
        delay: 0.15,
      }}
    >
      <div className="h-full flex flex-col justify-between rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark">
        <img
          src={image}
          className="rounded-t-xl border-none w-full h-48 object-cover"
          alt="Project"
        />

        <div className="flex flex-col flex-grow justify-between px-4 py-6 text-center">
          <p className="font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2">
            {title}
          </p>

          <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
            {desc}
          </p>

          <div className="flex flex-wrap gap-2 justify-center mt-auto max-w-full">
            {techStack?.map((tech, index) => (
              <button
                key={index}
                className="text-sm px-3 py-1.5 flex items-center justify-center rounded-lg border border-blue-500 dark:border-black text-ternary-dark dark:text-ternary-light font-medium shadow-sm hover:bg-blue-200 dark:hover:bg-blue-700 transition duration-200"
                disabled
              >
                {tech}
              </button>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectSingle;
