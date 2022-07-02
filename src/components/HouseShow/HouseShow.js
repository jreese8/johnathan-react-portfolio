import React from 'react';

import hsscImage from '../../assets/images/hssc.png'
import emailImage from '../../assets/images/email.png';
import githubImage from '../../assets/images/github.png';
import linkImage from '../../assets/images/linkedin.png';
import phoneImage from '../../assets/images/phone.png';
import resImage from '../../assets/images/resume.png';

function HouseShow() {
  return (
    <section className="section">

      <div className="container">

        <div className="image">

          <img src={hsscImage} style={{ width: "80%" }} alt="House Show" />
      
        </div>

        <div className="text">
          <pre>
          </pre>
          <p>
            An application that allows musical artists to book venues and hosts of venues to book artists. Users are able to search for artists or venues using the explore page. Searches can be filtered by cost or genre of music, etc.
          <pre>
          </pre>
            Tools: React, MongoDB, Express, CSS, Node, graphQL, Heroku, Bootstrap.
          </p>

          <div className="divLink">

            <a className="links" href="https://github.com/Haguermeister/House-show">
              Repo
            </a>
        
            <a className="links" href="https://house-show.herokuapp.com/">
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

export default HouseShow;
