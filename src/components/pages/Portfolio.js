import React from 'react';

import cctImage from '../../assets/images/cct.png';
import soeImage from '../../assets/images/soe.png';
import passImage from '../../assets/images/PassSC.png';
import wdsImage from '../../assets/images/WDSsc.png';
import noteImage from '../../assets/images/notesc.png';
import pwaImage from '../../assets/images/pwabt.png';

import emailImage from '../../assets/images/email.png';
import githubImage from '../../assets/images/github.png';
import linkImage from '../../assets/images/linkedin.png';
import phoneImage from '../../assets/images/phone.png';
import fbImage from '../../assets/images/facebook.png';

function Portfolio() {
  return (
    <section className="section">

      <div className="portImages">

        <a href="https://github.com/whosshazo/cocktail-project">
          <img src={cctImage} style={{ width: "50%" }} alt="Cocky Cocktails" />
        </a>

        <a href="https://github.com/Haguermeister/stack-overeats">
          <img src={soeImage} style={{ width: "50%" }} alt="Stack Overeats" />
        </a>

        <a href="https://github.com/jreese8/Password-Generator">
          <img src={passImage} style={{ width: "50%" }} alt="Password Generator" />
        </a>

        <a href="https://github.com/jreese8/Work-Day-Scheduler">
          <img src={wdsImage} style={{ width: "50%" }} alt="Work Day Scheduler" />
        </a>
        
        <a href="https://github.com/jreese8/note-taker">
          <img src={noteImage} style={{ width: "50%" }} alt="Note Taker" />
        </a>

        <a href="https://github.com/jreese8/PWA-Budget-Tracker">
          <img src={pwaImage} style={{ width: "50%" }} alt="Budget Tracker" />
        </a>

      </div>

      <footer>

        <section id="contactImages">

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

          <a href="https://www.facebook.com/johnathan.reese.98">
            <img src={fbImage} alt="Facebook" />
          </a>

        </section>

      </footer>

    </section>
  );
}

export default Portfolio;
