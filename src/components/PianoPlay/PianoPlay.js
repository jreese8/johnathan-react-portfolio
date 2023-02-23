import React from 'react';

import pianoImage from '../../assets/images/piano.png'

function PianoPlay() {
  return (
      <div>

        <div className="image">

          <img src={pianoImage} style={{ width: "80%" }} alt="Piano Play" />
      
        </div>

        <div className="text">
          <pre>
          </pre>
          <p>
              Piano Play is a single-page react app the contains a functional piano courtesy of ganeshmani's example.
          <pre>
          </pre>
              Use your keyboard to play the piano. Also usable in mobile, where the app will display only in landscape mode. There's also a contact form.
          <pre>
          </pre>
              Tools: HTML, CSS, JavaScript, React, Soundfont Player.
          </p>

          <div className="divLink">
    
            <a className="links" href="https://github.com/jreese8/piano-test-sitet">
                Repo
            </a>
            
            <a className="links" href="https://jreese8.github.io/piano-test-site/">
                Live
            </a>
            
          </div>

        </div>

      </div>
  );
}

export default PianoPlay;