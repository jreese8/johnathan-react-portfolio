import React from 'react';

import hsscImage from '../../assets/hssc.png'

function HouseShow() {
  return (

      <div className="">

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

  );
}

export default HouseShow;
