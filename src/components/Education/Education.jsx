
import React from 'react'
import './testimonials.css'
// import {MdLibraryBooks} from 'react-icons/md'
// import {FaSchool} from 'react-icons/fa'
// import {IoIosSchool} from 'react-icons/io'
import {GoPrimitiveDot} from 'react-icons/go'

const Education = () => {
  return (
 
    <section id='Education'>
      <h5>Where I studied</h5>
      <h2>Education</h2>

      <div className='container education__container'>
        <article className='education'>
          <div className='education__head'>
            {/* <MdLibraryBooks className='education__icon'/> */}
            <h3>Jawahar Navodaya Vidyalaya, Malappuram</h3>
          </div>
     <ul className='education__list'>
       <li>
        <GoPrimitiveDot className='education__list-icon'/>
        <p>Pre-degree education</p>
       </li>
       <li>
        <GoPrimitiveDot className='education__list-icon'/>
        <p>Grade: 92%</p>
       </li>
       {/* <li>
        <GoPrimitiveDot className='education__list-icon'/>
        <p>lorem ipsum</p>
       </li> */}

     </ul>
        </article>
        {/*    */}

     { /*   <article className='education'>
          <div className='education__head'>
             <FaSchool className='education__icon'/> 
            <h3>Abdurahiman Nagar Higher Secondary School</h3>
          </div>
     <ul className='education__list'>
     <li>
        <GoPrimitiveDot className='education__list-icon'/>
        <p>lorem ipsum</p>
       </li>
       <li>
        <GoPrimitiveDot className='education__list-icon'/>
        <p>lorem ipsum</p>
       </li>
       <li>
        <GoPrimitiveDot className='education__list-icon'/>
        <p>lorem ipsum</p>
       </li>
     </ul>
        </article> */ }

        {/*    */}

        <article className='education'>
          <div className='education__head'>
            {/* <IoIosSchool className='education__icon'/> */}
            <h3>Government Engineering College, Thrissur</h3>
          </div>
     <ul className='education__list'>
     <li>
        <GoPrimitiveDot className='education__list-icon'/>
        <p>Bachelor of Technology</p>
       </li>
       <li>
        <GoPrimitiveDot className='education__list-icon'/>
        <p>Computer Science and Engineering</p>
       </li>
       {/* <li>
        <GoPrimitiveDot className='education__list-icon'/>
        <p>Grade: 70%</p>
       </li> */}
     </ul>
        </article>

      </div>
    </section>

  )
}

export default Education