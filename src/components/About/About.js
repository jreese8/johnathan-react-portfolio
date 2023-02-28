import React from 'react';
import meImage from '../../assets/me.JPG'

function About() {
  return (
    <div className="text-center p-2 m-3 position-absolute">

      <div className="d-flex flex-row">

        <div className="text-center mx-auto">

          <img src={meImage} style={{ width: "80%" }} className="rounded img-thumbnail" alt="Johnathan Reese" />

        </div>

        <div className="text-center mx-auto fs-3">

          <pre>
          </pre>
          <p>
            Filler.
          </p>

        </div>

      </div>

      <div className="fw-bold fs-2">
        <pre>
        </pre>
        <h2>
          Technical Skills
        </h2>
        <pre>
        </pre>
          Databases: MySQL, NoSQL, MongoDB
        <pre>
        </pre>
          Languages: JavaScript, CSS, HTML, React
        <pre>
        </pre>
          Tools: Bootstrap, Bulma, jQuery, Express,
          Insomnia, Git, Heroku, Node, GraphQL, MVC, ORM, OOP
      </div>
        
    </div>
  )
}

export default About;