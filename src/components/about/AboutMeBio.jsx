import profileImage from '../../images/profile.jpg';
import { useContext } from 'react';
import AboutMeContext from '../../context/AboutMeContext';

const AboutMeBio = () => {
  const { aboutMe } = useContext(AboutMeContext);

  return (
    <div className="w-full overflow-hidden bg-transparent mt-20">
      <h1 className="text-3xl font-bold mb-6 text-center text-primary-dark dark:text-primary-light">
        About Me
      </h1>
      <div className="block sm:flex sm:gap-10 mt-10 sm:mt-20">
        <div className="w-full sm:w-1/4 mb-7 sm:mb-0">
          <img src={profileImage} className="rounded-lg w-96" alt="" />
        </div>

        <div className="font-general-regular w-full sm:w-3/4 text-left">
          {aboutMe.map((bio) => (
            <p
              className="mb-4 text-ternary-dark dark:text-ternary-light text-lg"
              key={bio.id}
            >
              {bio.bio}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutMeBio;
