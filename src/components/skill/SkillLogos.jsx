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
    <div className="w-full overflow-hidden bg-transparent">
      <h1 className="text-3xl font-bold mb-6 text-center text-primary-dark dark:text-primary-light">
        Skills
      </h1>

      <h2 className="text-lg mb-6 text-center text-primary-dark dark:text-primary-light">
        The skills, tools and technologies I am really good at:
      </h2>

      <div className="w-full overflow-hidden group">
        <div className="marquee">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center min-w-[120px]"
            >
              <img
                src={skill.logo}
                alt={skill.name}
                className="w-12 h-12 object-contain"
              />
              <p className="text-sm mt-2 text-center text-primary-dark dark:text-primary-light">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillLogos;
