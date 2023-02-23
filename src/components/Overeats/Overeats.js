import React from 'react';

import soeImage from '../../assets/images/soe.png'

function Overeats() {
  return (

      <div className="">

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

  );
}

export default Overeats;
