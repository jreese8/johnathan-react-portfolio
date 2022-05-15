import React from 'react';
import meImage from '../../assets/images/me.JPG';

import emailImage from '../../assets/images/email.png';
import githubImage from '../../assets/images/github.png';
import linkImage from '../../assets/images/linkedin.png';
import phoneImage from '../../assets/images/phone.png';
import resImage from '../../assets/images/resume.png';

function About() {
  return (
    <section className="section">

        <div className="meImage">

          <img src={meImage} style={{ width: "50%" }} alt="Johnathan Reese" />
      
        </div>

      <div className="text">
        <p>
        Hello! I am new to coding and excited for this new change!
        I was initially studying veterinary medicine in Saint Kitts, an island in the Caribbean, 
        which is shown in the image behind.
        <br/>   
        <br/>
        I was only three months into the program when the COVID pandemic hit.
        Due to the difficulties of international travel and the unforeseeable end of the pandemic,
        I have made the switch from studying medicine to studying code. It was a bit daunting making this huge leap, 
        but I have always loved video games and had interest in computer programming.
        </p>
      </div>

      <footer>

        <section>

          <a href="mailto:johnathanreese8@gmail.com">
            <img src={emailImage} alt="Email" />
          </a>

          <a href="https://github.com/jreese8">
            <img src={githubImage} alt="Github" />
          </a>

          <a href="https://www.linkedin.com/in/johnathan-reese-2892a3235/">
            <img src={linkImage} alt="LinkedIn" />
          </a>

          <a href="804-413-1081">
            <img src={phoneImage} alt="Phone Number" />
          </a>

          <a href="https://drive.google.com/file/d/10-bIb-xhxwbIH_sdxkBEIknO9x2HSdKM/view?usp=sharing">
            <img src={resImage} alt="Resume" />
          </a>

        </section>

      </footer>

    </section>
  );
}

export default About;
