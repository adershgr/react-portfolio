import React from 'react';
import AdershGR from '../../assets/AdershGR.pdf';

const CTA = () => {
  return (
    <div className="cta">
      <a href={AdershGR} download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's talk
      </a>
    </div>
  );
};

export default CTA;
