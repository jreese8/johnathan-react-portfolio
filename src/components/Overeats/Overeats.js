import React from 'react';

import soeImage from '../../assets/images/soe.png'
import emailImage from '../../assets/images/email.png';
import githubImage from '../../assets/images/github.png';
import linkImage from '../../assets/images/linkedin.png';
import phoneImage from '../../assets/images/phone.png';
import resImage from '../../assets/images/resume.png';
import "./Overeats.css";

function Overeats() {
  return (
    <section className="section">

        <div className="portImg">

          <img src={soeImage} alt="Stack Overeats" />
      
        </div>

      <div className="text">
        <p>
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

export default Overeats;
