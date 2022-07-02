import React from 'react';
import meImage from '../../assets/images/me.JPG';
import emailImage from '../../assets/images/email.png';
import githubImage from '../../assets/images/github.png';
import linkImage from '../../assets/images/linkedin.png';
import phoneImage from '../../assets/images/phone.png';
import resImage from '../../assets/images/resume.png';

function About() {
  return (
    <section className="section">

      <div className="container">

        <div className="image">

          <img src={meImage} style={{ width: "80%" }} alt="Johnathan Reese" />
      
        </div>

        <div className="text">
          <pre>
          </pre>
          <p>
          Hello! I am Johnathan, a Fullstack Web Developer that has earned a Certificate from the University of Richmond’s Fullstack Coding Bootcamp.  
          <pre>
          </pre>
          Initially, I was studying veterinary medicine in Saint Kitts, an island in the Caribbean, which is shown in the image behind. 
          However, due to COVID and an unfortunate injury, I switched from studying veterinary medicine to studying code.
          <pre>
          </pre>
          It was a bit daunting making this huge leap, but I have always loved video games and had interest in computer programming. 
          Nonetheless, it has been an incredible change for the better!
          <pre>
          </pre>
          I enjoy designing and creating responsive websites. 
          It is also rewarding when I am able to solve an issue after a bit of research. I look forward to the future as a web developer!
          </p>
        </div>

      </div>

      <div className="skills">
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

          <a href="804-413-1081">
            <img src={phoneImage} alt="Phone Number" />
          </a>

          <a href="https://drive.google.com/file/d/10-bIb-xhxwbIH_sdxkBEIknO9x2HSdKM/view?usp=sharing">
            <img src={resImage} alt="Resume" />
          </a>

        </section>

      </footer>

    </section>
  );
}

export default About;