import ProjectGallery from '../components/projects/ProjectGallery';
import ProjectHeader from '../components/projects/ProjectHeader';
import { motion } from 'framer-motion';

const ProjectSingle = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, delay: 1 }}
      transition={{
        ease: 'easeInOut',
        duration: 0.6,
        delay: 0.15,
      }}
      className="container mx-auto mt-5 sm:mt-10"
    >
      {/* <SingleProjectProvider>
        <ProjectHeader />
        <ProjectGallery />
      </SingleProjectProvider> */}
    </motion.div>
  );
};

export default ProjectSingle;
