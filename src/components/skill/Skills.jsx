import React from 'react';
import { motion } from 'framer-motion';
import SkillLogos from './SkillLogos';

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 0.5, delay: 0.1 }}
      className="min-h-screen w-full flex flex-col items-center justify-center px-6 py-10"
    >
      <SkillLogos />
    </motion.div>
  );
};

export default Skills;
