import React from 'react';

import petiSCImage from '../../assets/petiSC.png'

function PetIntelligent() {
  return (

      <div className="">

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

  );
}

export default PetIntelligent;