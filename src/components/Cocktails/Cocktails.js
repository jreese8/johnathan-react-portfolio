import React from 'react';

import cctImage from '../../assets/images/cct.png'
import emailImage from '../../assets/images/email.png';
import githubImage from '../../assets/images/github.png';
import linkImage from '../../assets/images/linkedin.png';
import phoneImage from '../../assets/images/phone.png';
import resImage from '../../assets/images/resume.png';

function Cocktails() {
  return (
    <section className="section">

      <div className="container">

        <div className="image">

          <img src={cctImage} style={{ width: "80%" }} alt="Cocky Cocktails" />
      
        </div>

        <div className="text">
          <pre>
          </pre>
          <p>
              An application that allows users to enter different ingredients that will then provide a list of drinks that are made from a combination of those ingredients. 
          <pre>
          </pre>
              After selecting the drink of their choice, the user is then provided with a corresponding YouTube video showcasing the creation of the drink.
          <pre>
          </pre>
              Tools: HTML, CSS, JavaScript, Bulma, FontsAwesome, Cocktails DB API, YouTube API.
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

export default Cocktails;
