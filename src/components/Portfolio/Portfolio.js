import React from 'react';

import petiSCImage from '../../assets/images/petiSC.png';
import shadowSCImage from '../../assets/images/shadowSC.png';
import pianoImage from '../../assets/images/piano.png';

import cctImage from '../../assets/images/cct.png';
import soeImage from '../../assets/images/soe.png';
import hsscImage from '../../assets/images/hssc.png';

import emailImage from '../../assets/images/email.png';
import githubImage from '../../assets/images/github.png';
import linkImage from '../../assets/images/linkedin.png';
import phoneImage from '../../assets/images/phone.png';
import resImage from '../../assets/images/resume.png';

import {
  Link
} from "react-router-dom";

function Portfolio() {
  return (
    <section className="section">

        <Link
            to={{ pathname: "/Petintelligent" }}
          >
            <img src={petiSCImage} className="portImg" alt="Pet Intelligent" />
        </Link>

        <Link
            to={{ pathname: "/Runninggame" }}
          >
            <img src={shadowSCImage} className="portImg" alt="Shadow Running Game" />
        </Link>

        <Link
            to={{ pathname: "/Pianoplay" }}
          >
            <img src={pianoImage} className="portImg" alt="Piano Play" />
        </Link>

        <Link
            to={{ pathname: "/Cocktails" }}
          >
            <img src={cctImage} className="portImg" alt="Cocky Cocktails" />
        </Link>

        <Link
            to={{ pathname: "/Overeats" }}
          >
            <img src={soeImage} className="portImg" alt="Overeats" />
        </Link>

        <Link
            to={{ pathname: "/Houseshow" }}
          >
            <img src={hsscImage} className="portImg" alt="House Show" />
        </Link>

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

          <a href="tel:804-413-1081">
            <img src={phoneImage} alt="Phone Number" />
          </a>

          <a href="https://drive.google.com/file/d/1xCidEq7UMR5-0JJFilLbmzIM4Wt-XcSX/view?usp=sharing">
            <img src={resImage} alt="Resume" />
          </a>

        </section>

      </footer>

    </section>
  );
}

export default Portfolio;
