import React from 'react';
import Typical from 'react-typical';
import Fade from 'react-reveal/Fade';
import './header.css';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <Fade top>
          <h1>
            <Typical
              steps={[
                "Hello, I'm Aniruddha Mahadev Patil",
                1000, // Adjust the pause duration as needed
                "", // Add an empty string to simulate a pause
                500  // Duration for the pause
              ]}
              loop={Infinity}
              wrapper="p"
              cursor={true} // Enable the cursor
              cursorStyle="..." // Define cursor style here
            />
          </h1>
        </Fade>
        <Fade top>
          <h5>
            <Typical
              steps={['Get to know me', 1000]}
              loop={Infinity}
              wrapper="p"
              cursor={true} // Enable the cursor
              cursorStyle="..." // Define cursor style here
            />
          </h5>
        </Fade>
        <CTA />
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
