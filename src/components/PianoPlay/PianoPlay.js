import React from 'react';
import { Button } from 'reactstrap';
import pianoImage from '../../assets/piano.png'

function PianoPlay() {
  return (

      <div className="text-center p-2 m-3 bg-light pt-5">

        <div className="d-flex flex-row">

          <div className="text-center mx-auto">

            <img src={pianoImage} style={{ width: "80%" }} className="rounded img-thumbnail" alt="Piano Play" />

          </div>

        <div className="text-center mx-auto fs-3">

          <br>
          </br>
          <p>
            Piano Play is a single-page react app the contains a functional piano courtesy of ganeshmani's example.
          <br>
          </br>
            Use your keyboard to play the piano. Also usable in mobile, where the app will display only in landscape mode. There's also a contact form.
          <br>
          </br>
          <br>
          </br>
          </p>
          <p className="border border-success">
            Tools: HTML, CSS, JavaScript, React, Soundfont Player.
          </p>

        </div>

      </div>

      <div>

        <div className="d-flex fex-row justify-content-around pt-5">
    
            <a href="https://github.com/jreese8/piano-test-site">
              <Button className="btn-success btn-lg">Repo</Button>
            </a>

              <h1 className="text-success">|</h1>
            
            <a href="https://jreese8.github.io/piano-test-site/">
              <Button className="btn-success btn-lg">Live</Button>
            </a>
            
          </div>

        </div>

      </div>
  );
}

export default PianoPlay;