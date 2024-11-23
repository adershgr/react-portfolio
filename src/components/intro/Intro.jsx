import React from 'react';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import me from '../../assets/me.jpeg'
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
          <p>I’m a Software Developer at Solvative, where I’ve spent over a year working on US-based client projects. This role has helped me grow as both a developer and a problem solver, driving me to learn new technologies and apply innovative solutions. Before Solvative, I worked at Neetable and graduated from Government Engineering College, Thrissur, where I refined my skills through hands-on projects. I’m always eager to take on new challenges and continue expanding my expertise.</p>        
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default Intro