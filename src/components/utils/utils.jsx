import IMG1 from '../../assets/tenzi.png';
import IMG2 from '../../assets/weather.png';
import IMG6 from '../../assets/foodapp.png'
import IMG3 from '../../assets/ahead.png';
import IMG4 from '../../assets/keepnote.png';
import IMG5 from '../../assets/tasklist.png'
import { BsFacebook, BsInstagram, BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

export const coreTech = [
  'JavaScript',
  'TypeScript',
  'ReactJS',
  "CSS",
  'NextJS',
  'HTML5',
  'Redux',
  "Jest JS",
];

export const additionalSkills = [
    'Git',
    'Bootstrap CSS',
    'Java',
    'Figma',
    'Postman',
    'Less JS',
    'Swagger',
    'Material UI',     
  ];

  export const educationData = [
    {
      school: "Jawahar Navodaya Vidyalaya, Malappuram",
      details: [
        { text: "Pre-degree education" },
        { text: "Grade: 92%" }
      ]
    },
    {
      school: "Government Engineering College, Thrissur",
      details: [
        { text: "Bachelor of Technology" },
        { text: "Computer Science and Engineering" },
      ]
    }
  ];

  export   const soloProjects = [
    {
      id: 1,
      title: 'Task-List',
      img: IMG5,
      description:
        'A TaskList application to read, write and update your daily activities',
      technologies: 'React | Redux | Bootstrap',
      link: 'https://adershgr-react-tasklist.netlify.app/',
      github: 'https://github.com/adershgr/TaskList',
    },
    {
      id: 1,
      title: 'Weather Now',
      img: IMG2,
      description:
        'Get real-time weather updates for any city, instantly',
      technologies: 'React | Bootstrap CSS | API Integration',
      link: 'https://weatherapp-15.netlify.app/',
      github: 'https://github.com/adershgr/weatherApp',
    },
    {
      id: 1,
      title: 'Tenzi game',
      img: IMG1,
      description:
        'Tenzi dice game allows user to play this classic game with dice',
      technologies: 'React | HTML | CSS',
      link: 'https://adershgr-tenzi-game.netlify.app/',
      github: 'https://github.com/adershgr/tenzi-game',
    },
    {
      id: 1,
      title: 'Ahead app redesign',
      img: IMG3,
      description:
        'Redesigned Ahead App for Enhanced User Experience',
      technologies: 'Nextjs | GSAP animation | Bootstrap',
      link: 'https://ahead-redesign-app.netlify.app/',
      github: 'https://github.com/adershgr/ahead-redesign-concept',
    },
    {
      id: 1,
      title: 'Food delivery app',
      img: IMG6,
      description:
        'A responsive food delivery app with option to add items into cart',
      technologies: 'React | Redux | Router',
      link: 'https://adershgr-food-delivery.netlify.app/',
      github: 'https://github.com/adershgr/food-delivery-app',
    },
    {
      id: 1,
      title: 'Keep Notes',
      img: IMG4,
      description:
        'Designed and developed a user-friendly application for seamless note-taking.',
      technologies: 'ReactJS | Bootstrap CSS | HTML',
      link: 'https://keep-yournotes.netlify.app/',
      github: 'https://github.com/adershgr/keepnotes',
    },
  ];

  export const LINKEDIN = "https://www.linkedin.com/in/adershgr/" 
  export const INSTAGRAM = "https://www.instagram.com/adershgr/"
  export const LEETCODE = "https://leetcode.com/IMsherlocked/"
  export const GITHUB = "https://github.com/adershgr"

  export const footerSocials = [
    { icon: <BsLinkedin />, link: 'https://www.linkedin.com/in/adershgr/' },
    { icon: <SiLeetcode />, link: 'https://leetcode.com/IMsherlocked/' },
    { icon: <BsInstagram />, link: 'https://www.instagram.com/adershgr/' },
    { icon: <FaGithub />, link: 'https://github.com/adershgr' },
    { icon: <BsFacebook />, link: 'https://www.facebook.com/adersh.gr' },
  ];

  export const headerSocials = [
   { icon: <SiLeetcode />, link: 'https://leetcode.com/IMsherlocked/' },
   { icon: <FaGithub />, link: 'https://github.com/adershgr' },
   { icon: <BsLinkedin />, link: 'https://www.linkedin.com/in/adershgr/'},
 ];

  export const permalinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#experience" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Education", href: "#Education" },
    { label: "Contact", href: "#contact" },
  ];
