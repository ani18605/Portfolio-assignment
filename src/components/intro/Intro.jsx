import React from 'react';
import { VscFolderLibrary } from 'react-icons/vsc';
import ME from '../../assets/me.jpeg';
import Typical from 'react-typical';
import Fade from 'react-reveal/Fade';
import './intro.css';

const Intro = () => {
  return (
    <section id="about">
      <Fade top>
        <h2>
          <Typical
            steps={["About Me", 1000,"",
                500 ]} // Display 'About Me' for 1 second before looping
            loop={Infinity}
            wrapper="p"
          />
        </h2>
      </Fade>
      <div className="container about__container">
        <Fade left>
          <div className="about__me">
            <div className="about__me-image">
              <img src={ME} alt="me" />
            </div>
          </div>
        </Fade>
        <Fade right>
          <div className="about__content">
            <div className="about__cards">
              <article className="about__card">
                <VscFolderLibrary className="about__icon" />
                <h5>Projects</h5>
                <small>20+ Completed Projects</small>
              </article>
            </div>
            <p>
              <Typical
                steps={[
                  "I'm a first-year student at Scaler School of Tech with a passion for competitive programming and web development...I enjoy solving algorithmic challenges on platforms like Codeforces and LeetCode...I have experience building dynamic web applications using HTML, CSS, JavaScript, Node.js, and Spring Boot...My projects range from full-stack web apps to algorithm visualizers, reflecting my commitment to continuous learning and innovation...I'm excited to collaborate with the tech community and look forward to making a meaningful impact in the world of technology...",
                  1000,"",
                500 
                ]}
                loop={Infinity}
                wrapper="p"
              />
            </p>
            <a href="#contact" className="btn btn-primary">Let's Talk</a>
          </div>
        </Fade>
      </div>
    </section>
  );
}

export default Intro;
