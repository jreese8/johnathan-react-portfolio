import React from 'react';

import petiSCImage from '../../assets/images/petiSC.png'
import emailImage from '../../assets/images/email.png';
import githubImage from '../../assets/images/github.png';
import linkImage from '../../assets/images/linkedin.png';
import phoneImage from '../../assets/images/phone.png';
import resImage from '../../assets/images/resume.png';

function PetIntelligent() {
  return (
    <section className="section">

      <div className="container">

        <div className="image">

          <img src={petiSCImage} style={{ width: "80%" }} alt="Pet Intelligent" />
      
        </div>

        <div className="text">
          <pre>
          </pre>
          <p>
              Pet Intelligent is a faux, lite version of PetSmart and other similar pet-based eCommerce sites.  Once I am able to seed the databse on Render, you can browse through products and purchase them with Stripe.
          <pre>
          </pre>
              A map displays the location of my local PetCo since Pet Intelligent obviously does not exist. Finally, the contact form will send me emails.
          <pre>
          </pre>
              Tools: HTML, CSS, JavaScript, React, Google Maps API, MongoDB, Render, Stripe.
          </p>

          <div className="divLink">
    
            <a className="links" href="https://github.com/jreese8/pet-intelligent">
                Repo
            </a>
            
            <a className="links" href="https://pet-intelligent.onrender.com/">
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

export default PetIntelligent;