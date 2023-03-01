import React from 'react';
import { Button } from 'reactstrap';
import hsscImage from '../../assets/hssc.png'

function HouseShow() {
  return (

      <div className="text-center p-2 m-3 bg-light pt-5">

        <div className="d-flex flex-row">

          <div className="text-center mx-auto">

            <img src={hsscImage} style={{ width: "80%" }} className="rounded img-thumbnail" alt="House Show" />

          </div>

        <div className="text-center mx-auto fs-3">

          <br>
          </br>
          <p>
            An application that allows musical artists to book venues and hosts of venues to book artists. Users are able to search for artists or venues using the explore page. Searches can be filtered by cost or genre of music, etc.
          </p>
          <br>
          </br>
          <br>
          </br>
          <p className="border border-success">
            Tools: React, MongoDB, Express, CSS, Node, graphQL, Heroku, Bootstrap.
          </p>
        
        </div>
      
      </div>

      <div>

        <div className="d-flex fex-row justify-content-around pt-5">

          <a href="https://github.com/Haguermeister/House-show">
            <Button className="btn-success btn-lg">Repo</Button>
          </a>

              <h1 className="text-success">|</h1>
        
          <a href="https://house-show.herokuapp.com/">
            <Button className="btn-success btn-lg">Live</Button>
          </a>
          
        </div>

      </div>
      
    </div>

  );
}

export default HouseShow;
