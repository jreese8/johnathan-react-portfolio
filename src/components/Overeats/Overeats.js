import React from 'react';
import { Button } from 'reactstrap';
import soeImage from '../../assets/soe.png'

function Overeats() {
  return (

      <div className="text-center p-2 m-3 bg-light pt-5">

        <div className="d-flex flex-row">

          <div className='text-center mx-auto'>

            <img src={soeImage} style={{ width: "80%" }} className="rounded img-thumbnail" alt="Stack Overeats" />

          </div>

        <div className="text-center mx-auto fs-3">
          
          <br>
          </br>
          <p>
          An application that allows users to track their calories consumed and calories burned. Users can log in to update and track their progress. Once the goal has been reached, the progress wheel will turn gold.
          </p>
          <br>
          </br>
          <p className="border border-success">
          Tools: HTML, CSS, JavaScript, Chart.js, MySQL, Sequelize, Node, Handlebars, Express, Heroku, Insomnia.
          </p>
        
        </div>
      
      </div>

      <div>

          <div className="d-flex fex-row justify-content-around pt-5">
    
            <a href="https://github.com/Haguermeister/stack-overeats">
              <Button className="btn-success btn-lg">Repo</Button>
            </a>

              <h1 className="text-success">|</h1>
            
             <a href="https://stack-overeats.herokuapp.com/">
              <Button className="btn-success btn-lg">Live</Button>
            </a>

          </div>

        </div>

      </div>

  );
}

export default Overeats;
