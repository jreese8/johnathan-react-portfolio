import React from 'react';

import cctImage from '../../assets/images/cct.png';
import soeImage from '../../assets/images/soe.png';
import hsscImage from '../../assets/images/hssc.png';
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

      <div>

        <a href="https://github.com/whosshazo/cocktail-project">
          <img src={cctImage} className="portImg" alt="Cocky Cocktails" />
        </a>

        <a href="https://github.com/Haguermeister/House-show">
          <img src={hsscImage} className="portImg" alt="House show" />
        </a>

        <a href="https://github.com/Haguermeister/stack-overeats">
          <img src={soeImage} className="portImg" alt="Stack Overeats" />
        </a>

        <a href="https://github.com/jreese8/PWA-Budget-Tracker">
          <img src={pwaImage} className="portImg" alt="Budget Tracker" />
        </a>

        <a href="https://github.com/jreese8/Work-Day-Scheduler">
          <img src={wdsImage} className="portImg" alt="Work Day Scheduler" />
        </a>
        
        <a href="https://github.com/jreese8/note-taker">
          <img src={noteImage} className="portImg" alt="Note Taker" />
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
