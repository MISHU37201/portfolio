import React from 'react';
import tailwind from '../../assets/tailwind.png';
import react from '../../assets/react.png';
import python from '../../assets/python.png';
import bootstrap from '../../assets/bootstrap.png';
import typescript from '../../assets/typescript.png';
import canva from '../../assets/canva.png';
import git from '../../assets/git.png';
import javascript from '../../assets/javascript.png';

const skills = [
  { name: 'Tailwind CSS', logo: tailwind },
  { name: 'React', logo: react },
  { name: 'Python', logo: python },
  { name: 'Bootstrap', logo: bootstrap },
  { name: 'TypeScript', logo: typescript },
  { name: 'Canva', logo: canva },
  { name: 'Git', logo: git },
  { name: 'JavaScript', logo: javascript },
];

const SkillLogos = () => {
  return (
    <div className="w-full px-6 py-10 bg-white dark:bg-primary-dark">
      <h1 className="text-4xl font-bold mb-8 text-center text-primary-dark dark:text-primary-light">
        Skills
      </h1>
      <div className="max-w-6xl mx-auto grid grid-cols-4 gap-10">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={skill.logo}
              alt={skill.name}
              className="w-16 h-16 object-contain"
            />
            <p className="mt-2 text-sm text-center text-primary-dark dark:text-primary-light">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillLogos;
