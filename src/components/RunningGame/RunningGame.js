import React from 'react';

import shadowSCImage from '../../assets/images/shadowSC.png';

function RunningGame() {
  return (

      <div className="">

        <div className="image">

          <img src={shadowSCImage} style={{ width: "80%" }} alt="Shadow Running Game" />
      
        </div>

        <div className="text">
          <pre>
          </pre>
          <p>
              Running Game is inspired by the flash version of Shadow The Hedgehog. Three different enemies charge at Shadow, who must jump over them. Jumping can be done by pressing spacebar or the arrow up key. Jumping can also be performed on mobile by tapping. Score is saved locally. 
          <pre>
          </pre>
              Music is Westopolis, the same music from the flash game and also of the stage Westopolis from Shadow The Hedgehog (Gamecube, Playstation 2, Xbox). All sprites, save for the Egg Pawn, were provided by GaryCXJK and Frario on Spriters Resource. The Egg Pawn was provided by Mr. C.
          <pre>
          </pre>
              Tools: HTML, CSS, JavaScript.
          </p>

          <div className="divLink">
    
            <a className="links" href="https://github.com/jreese8/running-game">
                Repo
            </a>
            
            <a className="links" href="https://jreese8.github.io/running-game/">
                Live
            </a>
            
          </div>

        </div>

      </div>
  );
}

export default RunningGame;