import React from 'react';
import { Button } from 'reactstrap';
import cctImage from '../../assets/cct.png'

function Cocktails() {
  return (

    <div className="text-center p-2 m-3 bg-light pt-5">

      <div className="d-flex flex-row">

        <div className="text-center mx-auto">

          <img src={cctImage} style={{ width: "80%" }} className="rounded img-thumbnail" alt="Cocky Cocktails" />
      
        </div>

        <div className="text-center mx-auto fs-3">

          <br>
          </br>
          <p>
              An application that allows users to enter different ingredients that will then provide a list of drinks that are made from a combination of those ingredients. 
          <br>
          </br>
          <br>
          </br>
              After selecting the drink of their choice, the user is then provided with a corresponding YouTube video showcasing the creation of the drink.
          </p>
          <br>
          </br>
          <br>
          </br>
          <p className="border border-success">
              Tools: HTML, CSS, JavaScript, Bulma, FontsAwesome, Cocktails DB API, YouTube API.
          </p>

        </div>

    </div>

    <div>

      <div className="d-flex fex-row justify-content-around pt-5">
    
        <a href="https://github.com/whosshazo/cocktail-project">
            <Button className="btn-success btn-lg">Repo</Button>
        </a>

          <h1 className="text-success">|</h1>
            
        <a href="https://whosshazo.github.io/cocktail-project/">
            <Button className="btn-success btn-lg">Live</Button>
        </a>
            
      </div>

      </div>

    </div>

  );
}

export default Cocktails;
