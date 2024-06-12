import React from 'react';
import pdf from './cv.pdf';  // Import the PDF file from the same directory

const CTA = () => {
  return (
    <div className="cta">
      <a href={pdf} download="cv.pdf" className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's talk
      </a>
    </div>
  );
};
export default CTA;
