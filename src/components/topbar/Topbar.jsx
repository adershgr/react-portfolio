import React, { useState } from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { BiMessageSquareDetail } from 'react-icons/bi';


import './topbar.css';

const Topbar = () => {
  const [activeNav, setActiveNav] = useState('#home');
  return (
<nav>
  <div onClick={() => {
    document.querySelector('#home')?.scrollIntoView({ behavior: 'smooth' });
    setActiveNav('#home');
  }} className={activeNav === '#home' ? 'active' : ''}>
    <AiOutlineHome />
  </div>

  <div onClick={() => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
    setActiveNav('#about');
  }} className={activeNav === '#about' ? 'active' : ''}>
    <AiOutlineUser />
  </div>

  <div onClick={() => {
    document.querySelector('#experience')?.scrollIntoView({ behavior: 'smooth' });
    setActiveNav('#experience');
  }} className={activeNav === '#experience' ? 'active' : ''}>
    <BiBook />
  </div>

  <div onClick={() => {
    document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' });
    setActiveNav('#portfolio');
  }} className={activeNav === '#portfolio' ? 'active' : ''}>
    <RiServiceLine />
  </div>

  <div onClick={() => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
    setActiveNav('#contact');
  }} className={activeNav === '#contact' ? 'active' : ''}>
    <BiMessageSquareDetail />
  </div>
</nav>
  )
}

export default Topbar;