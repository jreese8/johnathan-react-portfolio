import React from 'react';

import cctImage from '../../assets/images/cct.png'

function Cocktails() {
  return (

      <div className="">

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
  );
}

export default Cocktails;
