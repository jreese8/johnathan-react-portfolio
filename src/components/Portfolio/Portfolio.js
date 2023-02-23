import React from 'react';

import petiSCImage from '../../assets/images/petiSC.png';
import shadowSCImage from '../../assets/images/shadowSC.png';
import pianoImage from '../../assets/images/piano.png';

import cctImage from '../../assets/images/cct.png';
import soeImage from '../../assets/images/soe.png';
import hsscImage from '../../assets/images/hssc.png';

import {
  Link
} from "react-router-dom";

function Portfolio() {
  return (
    <div>

        <Link
            to={{ pathname: "/Petintelligent" }}
          >
            <img src={petiSCImage} className="portImg" alt="Pet Intelligent" />
        </Link>

        <Link
            to={{ pathname: "/Runninggame" }}
          >
            <img src={shadowSCImage} className="portImg" alt="Shadow Running Game" />
        </Link>

        <Link
            to={{ pathname: "/Pianoplay" }}
          >
            <img src={pianoImage} className="portImg" alt="Piano Play" />
        </Link>

        <Link
            to={{ pathname: "/Cocktails" }}
          >
            <img src={cctImage} className="portImg" alt="Cocky Cocktails" />
        </Link>

        <Link
            to={{ pathname: "/Overeats" }}
          >
            <img src={soeImage} className="portImg" alt="Overeats" />
        </Link>

        <Link
            to={{ pathname: "/Houseshow" }}
          >
            <img src={hsscImage} className="portImg" alt="House Show" />
        </Link>

    </div>
  );
}

export default Portfolio;
