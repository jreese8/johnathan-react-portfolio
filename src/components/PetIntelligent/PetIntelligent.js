import React from 'react';
import { Button } from 'reactstrap';
import petiSCImage from '../../assets/petiSC.png'

function PetIntelligent() {
  return (

      <div className="text-center p-2 m-3 bg-light pt-5">

        <div className="d-flex flex-row">

          <div className='text-center mx-auto'>

            <img src={petiSCImage} style={{ width: "80%" }} className="rounded img-thumbnail" alt="Pet Intelligent" />
      
          </div>

        <div className="text-center mx-auto fs-3">

          <br>
          </br>
          <p>
              Pet Intelligent is a faux, lite version of PetSmart and other similar pet-based eCommerce sites.  Once I am able to seed the databse on Render, you can browse through products and purchase them with Stripe.
          <br>
          </br>
          <br>
          </br>
              A map displays the location of my local PetCo since Pet Intelligent obviously does not exist. Finally, the contact form will send me emails.
          </p>
          <br>
          </br>
          <br>
          </br>
          <p className="border border-success">
              Tools: HTML, CSS, JavaScript, React, Google Maps API, MongoDB, Render, Stripe.
          </p>

        </div>

      </div>

      <div>

          <div className="d-flex fex-row justify-content-around pt-5">
    
            <a href="https://github.com/jreese8/pet-intelligent">
              <Button className="btn-success btn-lg">Repo</Button>
            </a>

              <h1 className="text-success">|</h1>
            
            <a href="https://pet-intelligent.onrender.com/">
              <Button className="btn-success btn-lg">Live</Button>
            </a>
            
          </div>

        </div>

      </div>

  );
}

export default PetIntelligent;