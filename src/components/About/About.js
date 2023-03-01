import React from 'react';
import meImage from '../../assets/me.JPG'

function About() {
  return (
    
    <div className="text-center m-3 bg-light py-5">

      <div className="d-flex flex-row">

        <div className="text-center mx-auto">

          <img src={meImage} style={{ width: "80%" }} className="rounded img-thumbnail" alt="Johnathan Reese" />

        </div>

        <div className="text-center text-dark mx-auto fs-4">

          <br>
          </br>
          <p>
          Hello! I am Johnathan, a Fullstack Web Developer that has earned a Certificate from the University of Richmond’s Fullstack Coding Bootcamp.  
          <br>
          </br>
          <br>
          </br>
          Initially, I was studying veterinary medicine in Saint Kitts, an island in the Caribbean, which is shown in the image behind. 
          However, due to COVID and an unfortunate injury, I switched from studying veterinary medicine to studying code.
          <br>
          </br>
          <br>
          </br>
          It was a bit daunting making this huge leap, but I have always loved video games and had interest in computer programming. 
          Nonetheless, it has been an incredible change for the better!
          <br>
          </br>
          <br>
          </br>
          I enjoy designing and creating responsive websites. 
          It is also rewarding when I am able to solve an issue after a bit of research. I look forward to the future as a web developer!
          </p>

        </div>

      </div>

      <div className="border border-success fw-bold fs-3 text-success py-5">

        <h2>
          Technical Skills
        </h2>

        <h4 className="pt-3">
          Databases: MySQL, NoSQL, MongoDB
        </h4>

        <h4 className="pt-3">
          Languages: JavaScript, CSS, HTML, React
        </h4>

        <h4 className="pt-3">
          Tools: Bootstrap, Bulma, jQuery, Express,
          Insomnia, Git, Heroku, Node, GraphQL, MVC, ORM, OOP
        </h4>

      </div>
    </div>
  );
}

export default About;