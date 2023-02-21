import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/adersh-gr-506a1b1a6/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/adershgr" target="_blank" rel="noreferrer" ><FaGithub /></a>
      <a href="https://www.instagram.com/adershgr/" target="_blank" rel="noreferrer" ><BsInstagram /></a>
    </div>
  )
}

export default HeaderSocials