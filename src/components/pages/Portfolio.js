import React from 'react';

import cctImage from '../../assets/images/cct.png';
import soeImage from '../../assets/images/soe.png';
import hsscImage from '../../assets/images/hssc.png';

import emailImage from '../../assets/images/email.png';
import githubImage from '../../assets/images/github.png';
import linkImage from '../../assets/images/linkedin.png';
import phoneImage from '../../assets/images/phone.png';
import resImage from '../../assets/images/resume.png';

function Portfolio() {
  return (
    <section className="section">

      <div>

        <a href="https://github.com/whosshazo/cocktail-project">
          <img src={cctImage} className="portImg" alt="Cocky Cocktails" />
        </a>

        <a href="https://github.com/Haguermeister/stack-overeats">
          <img src={soeImage} className="portImg" alt="Stack Overeats" />
        </a>

        <a href="https://github.com/Haguermeister/House-show">
          <img src={hsscImage} className="portImg" alt="House show" />
        </a>

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

export default Portfolio;
