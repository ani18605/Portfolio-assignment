import React from 'react';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import ME from '../../assets/pp.jpg';
import './intro.css';

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>20+ Completed Projects</small>
            </article>
          </div>
          <p>a first-year student at Scaler School of Tech with a passion for competitive programming and web development. I enjoy solving algorithmic challenges on platforms like Codeforces and LeetCode, and I have experience building dynamic web applications using HTML, CSS, JavaScript, Node.js, and Spring Boot. My projects range from full-stack web apps to algorithm visualizers, reflecting my commitment to continuous learning and innovation. I'm excited to collaborate with the tech community and look forward to making a meaningful impact in the world of technology.</p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default Intro