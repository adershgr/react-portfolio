import React from 'react';
import IMG1 from '../../assets/tenzi.png';
import IMG2 from '../../assets/product-preview.png';
// import IMG10 from '../../assets/bookstore.png';
import IMG3 from '../../assets/calculator.png';
import IMG4 from '../../assets/apiShop.png';
import IMG5 from '../../assets/resumeHtml.png';

import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    // {
    //   id: 1,
    //   title: 'Bookstore',
    //   img: IMG2,
    //   description:
    //     'BookStore app that allows users to store books and update progress',
    //   technologies: 'React | Redux | Ruby on Rails',
    //   link: 'https://melodic-boba-111583.netlify.app/',
    //   github: 'https://github.com/Meri-MG/bookstore---react',
    // },
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
      title: 'Arithmetic Calculator',
      img: IMG3,
      description:
        'A basic Aruthmetic software using java',
      technologies: 'Java | Java swing',
      link: 'https://github.com/adershgr/Arithmetic-Calculator',
      github: 'https://github.com/adershgr/Arithmetic-Calculator',
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
      title: 'Resume website',
      img: IMG5,
      description:
        'A responsive resume website with vanila javascript',
      technologies: 'Vanila JS | CSS | HTML',
      link: 'https://adershgr.github.io/resumeWeb/',
      github: 'https://github.com/adershgr/resumeWeb',
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