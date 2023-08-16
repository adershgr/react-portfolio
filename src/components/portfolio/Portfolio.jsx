import React from 'react';
import IMG1 from '../../assets/tenzi.png';
import IMG2 from '../../assets/weather.png';
import IMG6 from '../../assets/foodapp.png'
import IMG3 from '../../assets/calc.png';
import IMG4 from '../../assets/keepnote.png';
import IMG5 from '../../assets/tasklist.png'

import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
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
      title: 'Tenzi Game',
      img: IMG1,
      description:
        'Tenzi dice game allows user to play this classic game with dice',
      technologies: 'React | HTML | CSS',
      link: 'https://adershgr-tenzi-game.netlify.app/',
      github: 'https://github.com/adershgr/tenzi-game',
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
        '"Designed and developed a user-friendly application for seamless note-taking.',
      technologies: 'ReactJS | Bootstrap CSS | HTML',
      link: 'https://keep-yournotes.netlify.app/',
      github: 'https://github.com/adershgr/keepnotes',
    },
    {
      id: 1,
      title: 'Arithmetic Calculator',
      img: IMG3,
      description:
        'A basic Aruthmetic software using java',
      technologies: 'Java | Java swing',
      link: 'https://github.com/adershgr/Arithmetic-Calculator',
      github: 'https://github.com/adershgr/Arithmetic-Calculator',
    },


  ];

  return (
    <section id="portfolio">
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Visit Website
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
