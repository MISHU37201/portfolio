import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ProjectSingle = ({ title, category, image, desc, techStack }) => {
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
      {/* <Link to="/projects/single-project" aria-label="Single Project"> */}
      <div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark">
        <div>
          <img
            src={image}
            className="rounded-t-xl border-none"
            alt="Single Project"
          />
        </div>
        <div className="text-center px-4 py-6">
          <p className="font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2">
            {title}
          </p>
          <span className="text-lg text-ternary-dark dark:text-ternary-light">
            {category}
          </span>

          <span className="text-lg text-ternary-dark dark:text-ternary-light">
            {desc}
          </span>

          <div className="flex flex-wrap gap-2 mt-3">
            {techStack?.map((tech, index) => (
              <button
                key={index}
                className="text-sm px-3 py-1 rounded-full bg-blue-100 dark:text-white text-blue-700 dark:text-white font-medium shadow-sm hover:bg-blue-200 dark:hover:bg-blue-700 transition duration-200"
                disabled
              >
                {tech}
              </button>
            ))}
          </div>
        </div>
      </div>
      {/* </Link> */}
    </motion.div>
  );
};

export default ProjectSingle;
