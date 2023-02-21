import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">ADERSH G R</a>
      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Skills</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#Education">Education</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className='footer__socials'>
        <a href='https://www.facebook.com/adersh.gr' className='logo__footer'><BsFacebook /></a>
        <a href='https://twitter.com/_adersh_' className='logo__footer'><BsTwitter /></a>
        <a href='https://www.instagram.com/adershgr/' className='logo__footer'><BsInstagram /></a>
        <a href='https://github.com/adershgr' className='logo__footer'><FaGithub /></a>
        <a href='https://www.linkedin.com/in/adersh-gr-506a1b1a6/' className='logo__footer'><BsLinkedin /></a>

      </div>
    </footer>
  )
}

export default Footer