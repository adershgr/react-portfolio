import React from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";
import "./experience.css";
import { coreTech, additionalSkills } from "../utils/utils";

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <h5>The Skills I Have</h5>
      <h2>Skills</h2>
      <div className="container experience__container">
        <div>
          <h3>Core Technologies</h3>
          <div className="experience__content">
            {coreTech.map((language, index) => (
              <article className="experience__details" key={index}>
                <BsFillPatchCheckFill className="experience__details-icon" />
                <h4>{language}</h4>
              </article>
            ))}
          </div>
        </div>
        <div>
          <h3>Additional Skills</h3>
          <div className="experience__content">
            {additionalSkills.map((tech, index) => (
              <article className="experience__details" key={index}>
                <BsFillPatchCheckFill className="experience__details-icon" />
                <h4>{tech}</h4>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
