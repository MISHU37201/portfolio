// Import images
import WebImage1 from '../images/web-project-1.png';
import fyntra from '../images/fyntra.JPG';
import restaurant from '../images/restaurant.jpg';

export const projectsData = [
  {
    id: 1,
    title: 'Motor Menders ',
    category: 'Web Application',
    img: WebImage1,
    description:
      'A full-stack web application that allows users to find and hire mechanics online. The frontend is developed using React.js with CSS for styling, ensuring a responsive and user-friendly interface. The backend is powered by Python Flask, integrated with a MySQL database to manage user and mechanic data efficiently. The app includes features like user authentication, mechanic profiles, service booking, and request management.',
    techStack: ['React.js', 'Python Flask', 'MySQL'],
  },
  {
    id: 2,
    title: 'Restaurant Management',
    category: 'Web Application',
    img: restaurant,
  },
  {
    id: 3,
    title: 'Fyntra',
    category: 'Web Application',
    img: fyntra,
  },
];
