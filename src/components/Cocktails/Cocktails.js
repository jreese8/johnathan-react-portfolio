import React from 'react';
import { Button } from 'reactstrap';
import cctImage from '../../assets/cct.png'

function Cocktails() {
  return (

      <div className="d-flex flex-row">

        <div className="text-center mx-auto">

          <img src={cctImage} style={{ width: "80%" }} className="rounded img-thumbnail" alt="Cocky Cocktails" />
      
        </div>

        <div className="text-center mx-auto fs-3">
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

          <div className="d-flex fex-row justify-content-around">
    
            <a href="https://github.com/whosshazo/cocktail-project">
                <Button className="btn-outline-primary">Repo</Button>
            </a>
            
            <a href="https://whosshazo.github.io/cocktail-project/">
                <Button className="btn-outline-primary">Live</Button>
            </a>
            
          </div>

        </div>

      </div>
  );
}

export default Cocktails;
