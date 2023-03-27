import React from 'react';
import IMG1 from '../../assets/tenzi.png';
import IMG2 from '../../assets/product-preview.png';
import IMG6 from '../../assets/foodapp.png'
import IMG3 from '../../assets/calculator.png';
import IMG4 from '../../assets/apiShop.png';
import IMG5 from '../../assets/todo.png';

import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
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
      title: 'Product Preview',
      img: IMG2,
      description:
        'Preview of a product in a responsive website',
      technologies: 'React | Bootstrap CSS | HTML',
      link: 'https://adersh-product-preview.netlify.app/',
      github: 'https://github.com/adershgr/product-preview',
    },
    {
      id: 1,
      title: 'To Do App',
      img: IMG5,
      description:
        'A responsive To-Do application with React',
      technologies: 'ReactJS | CSS | HTML',
      link: 'https://adershgr-to-do-app.netlify.app/',
      github: 'https://github.com/adershgr/to-do',
    },
    {
      id: 1,
      title: 'Online shop with API',
      img: IMG4,
      description:
        'Preview of a shop with items Loading from an API',
      technologies: 'React | Bootstrap CSS | HTML',
      link: 'https://onlineshop-with-fakeapi.netlify.app/',
      github: 'https://github.com/adershgr/onlineshop',
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
      <h5>My Recent Work</h5>
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
