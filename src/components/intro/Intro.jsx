import React from 'react';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import me from '../../assets/me-3.jpg'
import './intro.css';

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={me} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>2+ years working</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>20+ Completed Projects</small>
            </article>
          </div>
          <p className='intro-text-color'>I’m a Software Developer at Solvative, where I contribute to US-based client projects focused on scalable, user-centric solutions. This role has strengthened my skills in full-stack development and sharpened my ability to solve real-world problems through technology. 
          </p>   
          <p className='intro-text-color'>
          Prior to this, I was with Neetable, and I’m a graduate of Government Engineering College, Thrissur. My foundation was built through hands-on development work, and I continue to stay driven by curiosity, innovation, and a passion for learning.</p>        
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default Intro