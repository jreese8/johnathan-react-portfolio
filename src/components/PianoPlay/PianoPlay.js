import React from 'react';

import pianoImage from '../../assets/images/piano.png'
import emailImage from '../../assets/images/email.png';
import githubImage from '../../assets/images/github.png';
import linkImage from '../../assets/images/linkedin.png';
import phoneImage from '../../assets/images/phone.png';
import resImage from '../../assets/images/resume.png';

function PianoPlay() {
  return (
    <section className="section">

      <div className="container">

        <div className="image">

          <img src={pianoImage} style={{ width: "80%" }} alt="Piano Play" />
      
        </div>

        <div className="text">
          <pre>
          </pre>
          <p>
              Piano Play is a single-page react app the contains a functional piano courtesy of ganeshmani's example.
          <pre>
          </pre>
              Use your keyboard to play the piano. Also usable in mobile, where the app will display only in landscape mode. There's also a contact form.
          <pre>
          </pre>
              Tools: HTML, CSS, JavaScript, React, Soundfont Player.
          </p>

          <div className="divLink">
    
            <a className="links" href="https://github.com/whosshazo/cocktail-project">
                Repo
            </a>
            
            <a className="links" href="https://whosshazo.github.io/cocktail-project/">
                Live
            </a>
            
          </div>

        </div>

      </div>

      <footer>

        <section className="Contacts">

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

export default PianoPlay;