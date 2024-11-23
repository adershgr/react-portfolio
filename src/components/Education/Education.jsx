
import React from 'react'
import './testimonials.css'
import { educationData } from '../utils/utils'
import {GoPrimitiveDot} from 'react-icons/go'

const Education = () => {
  return (
    <section id='Education'>
      <h5>Where I studied</h5>
      <h2>Education</h2>
      <div className="container education__container">
      {educationData.map((edu, index) => (
        <article className="education" key={index}>
          <div className="education__head">
            <h3>{edu.school}</h3>
          </div>
          <ul className="education__list">
            {edu.details.map((detail, detailIndex) => (
              <li key={detailIndex}>
                <GoPrimitiveDot className="education__list-icon" />
                <p>{detail.text}</p>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
    </section>
  )
}

export default Education