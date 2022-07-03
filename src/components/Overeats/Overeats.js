import React from 'react';

import soeImage from '../../assets/images/soe.png'
import emailImage from '../../assets/images/email.png';
import githubImage from '../../assets/images/github.png';
import linkImage from '../../assets/images/linkedin.png';
import phoneImage from '../../assets/images/phone.png';
import resImage from '../../assets/images/resume.png';

function Overeats() {
  return (
    <section className="section">

      <div className="container">

        <div className="image">

          <img src={soeImage} style={{ width: "80%" }} alt="Stack Overeats" />
      
        </div>

        <div className="text">

          <p>
          An application that allows users to track their calories consumed and calories burned. Users can log in to update and track their progress. Once the goal has been reached, the progress wheel will turn gold.
          <pre>
          </pre>
          Tools: HTML, CSS, JavaScript, Chart.js, MySQL, Sequelize, Node, Handlebars, Express, Heroku, Insomnia.
          </p>

          <div className="divLink">
    
            <a className="links" href="https://github.com/Haguermeister/stack-overeats">
              Repo
            </a>
            
             <a className="links" href="https://stack-overeats.herokuapp.com/">
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

export default Overeats;
