import React from 'react';

import petiSCImage from '../../assets/petiSC.png';
import shadowSCImage from '../../assets/shadowSC.png';
import pianoImage from '../../assets/piano.png';

import cctImage from '../../assets/cct.png';
import soeImage from '../../assets/soe.png';
import hsscImage from '../../assets/hssc.png';

import {
  Link
} from "react-router-dom";

function Portfolio() {
  return (

    <div className="text-center bg-light py-5">

        <Link
            to={{ pathname: "/Petintelligent" }}
          >
            <img src={petiSCImage} style={{ width: "30%" }} className="px-3" alt="Pet Intelligent" />
        </Link>

        <Link
            to={{ pathname: "/Runninggame" }}
          >
            <img src={shadowSCImage} style={{ width: "30%" }} className="px-3" alt="Shadow Running Game" />
        </Link>

        <Link
            to={{ pathname: "/Pianoplay" }}
          >
            <img src={pianoImage} style={{ width: "30%" }} className="px-3" alt="Piano Play" />
        </Link>

        <Link
            to={{ pathname: "/Cocktails" }}
          >
            <img src={cctImage} style={{ width: "30%" }} className="px-3" alt="Cocky Cocktails" />
        </Link>

        <Link
            to={{ pathname: "/Overeats" }}
          >
            <img src={soeImage} style={{ width: "30%" }} className="px-3" alt="Overeats" />
        </Link>

        <Link
            to={{ pathname: "/Houseshow" }}
          >
            <img src={hsscImage} style={{ width: "30%" }} className="px-3" alt="House Show" />
        </Link>

    </div>
  );
}

export default Portfolio;
