import React from 'react';
import { Button } from 'reactstrap';
import shadowSCImage from '../../assets/shadowSC.png';

function RunningGame() {
  return (

      <div className="text-center p-2 m-3 bg-light pt-5">

        <div className='d-flex flex-row'>

          <div className="text-center mx-auto">

            <img src={shadowSCImage} style={{ width: "80%" }} className="rounded img-thumbnail" alt="Shadow Running Game" />
      
          </div>

          <div className="text-center mx-auto fs-3">

            <br>
            </br>

            <p>
              Running Game is inspired by the flash version of Shadow The Hedgehog. Three different enemies charge at Shadow, who must jump over them. Jumping can be done by pressing spacebar or the arrow up key. Jumping can also be performed on mobile by tapping. Score is saved locally. 
            <br>
            </br>
            <br>
            </br>
              Music is Westopolis, the same music from the flash game and also of the stage Westopolis from Shadow The Hedgehog (Gamecube, Playstation 2, Xbox). All sprites, save for the Egg Pawn, were provided by GaryCXJK and Frario on Spriters Resource. The Egg Pawn was provided by Mr. C.
            <br>
            </br>
            <br>
            </br>
            </p>
            <p className="border border-success">
              Tools: HTML, CSS, JavaScript.
            </p>

          </div>

        </div>

        <div>

          <div className="d-flex fex-row justify-content-around pt-5">
    
            <a href="https://github.com/jreese8/running-game">
              <Button className="btn-success btn-lg">Repo</Button>
            </a>

              <h1 className="text-success">|</h1>
            
            <a href="https://jreese8.github.io/running-game/">
              <Button className="btn-success btn-lg">Live</Button>
            </a>
            
          </div>

        </div>

      </div>
  );
}

export default RunningGame;