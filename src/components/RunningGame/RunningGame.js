import React from 'react';

import shadowSCImage from '../../assets/images/shadowSC.png';
import emailImage from '../../assets/images/email.png';
import githubImage from '../../assets/images/github.png';
import linkImage from '../../assets/images/linkedin.png';
import phoneImage from '../../assets/images/phone.png';
import resImage from '../../assets/images/resume.png';

function RunningGame() {
  return (
    <section className="section">

      <div className="container">

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

      <footer>

        <section className="Contacts">

          <a href="mailto:johnathanreese8@gmail.com">
            <img src={emailImage} alt="Email" />
          </a>

          <a href="https://github.com/jreese8">
            <img src={githubImage} alt="Github" />
          </a>

          <a href="https://www.linkedin.com/in/johnathan-reese-2892a3235/">
            <img src={linkImage} alt="LinkedIn" />
          </a>

          <a href="tel:804-413-1081">
            <img src={phoneImage} alt="Phone Number" />
          </a>

          <a href="https://drive.google.com/file/d/1xCidEq7UMR5-0JJFilLbmzIM4Wt-XcSX/view?usp=sharing">
            <img src={resImage} alt="Resume" />
          </a>

        </section>

      </footer>

    </section>
  );
}

export default RunningGame;