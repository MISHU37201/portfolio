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
      'An online platform that enables users to easily find and hire mechanics. It offers features like user authentication, mechanic profiles, service booking, and request management through a responsive and intuitive interface that ensures smooth interaction between users and service providers.',
    techStack: ['React.js', 'CSS', 'Python Flask', 'MySQL'],
  },
  {
    id: 2,
    title: 'Restaurant Management',
    category: 'Web Application',
    img: restaurant,
    description:
      'A restaurant management platform where customers can browse menus, place orders, and reserve tables online. Admins can manage menu items, orders, staff records, and billing through a unified dashboard designed for smooth operations and a user-friendly experience.',
    techStack: ['React.js', 'CSS', 'Python Flask', 'MySQL'],
  },
  {
    id: 3,
    title: 'Fyntra',
    category: 'Web Application',
    img: fyntra,
    description:
      'An RFID-based attendance system that automates check-in/check-out using RFID cards. It replaces manual processes with contactless tracking and offers a scalable frontend built in React.js with TypeScript for efficient and maintainable performance.',
    techStack: ['React.js', 'TypeScript', 'TailwindCSS', 'Node.js'],
  },
];
