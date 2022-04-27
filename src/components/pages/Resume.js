import React from 'react';

import emailImage from '../../assets/images/email.png';
import githubImage from '../../assets/images/github.png';
import linkImage from '../../assets/images/linkedin.png';
import phoneImage from '../../assets/images/phone.png';
import fbImage from '../../assets/images/facebook.png';

function Resume() {
  return (
    <section className="section">

      <div className="text">
        <p>
            Phone: 804-413-1081 | Email: JohnathanReese8@gmail.com | Gloucester, VA, 23061
            <br/>
            <a href="https://docs.google.com/document/d/1fw38aLznuq_co9NbTe-_YbejZYk5FNsRC2RADV7vpZ4/edit?usp=sharing">Resume</a> | <a href="www.linkedin.com/in/johnathan-reese-2892a3235">LinkedIn</a> | <a href="https://jreese8.github.io/johnathan-react-portfolio/">Portfolio</a> | <a href="https://github.com/jreese8">GitHub</a>
            <br/>
            <br/>
            Full-Stack web developer with a passion for designing responsive and appealing websites. 
            Recently developed skills in JavaScript, CSS, and Node.js. Able to collaborate and communicate with team members in an agile work environment. 
            Skilled enough to easily tackle tasks assigned while aiding partners when needed.
            <br/>
            <br/>
            Experience with both Bulma and Bootstrap for creating sleek, user-friendly, and mobile-accessible sites. 
            Capable of constructing GET, PUT, POST, and DESTROY routes for RESTful api usage. 
            Will earn a certificate from the University of Richmond and am excited for the future as a web developer! 
            Looking forward to creating unique, interesting designs alongside other programmers and will continue to learn 
            and implement new technologies throughout projects and applications.
            <br/>
            <br/>
            Technical Skills
            <br/>
            JavaScript ES6+, MySQL, GitHub, Express, Node, jQuery, Bootstrap
            <br/>
            <br/>
            Projects
            <br/>
            Cocky Cocktails | GitHub - whosshazo/cocktail-project | github.io/cocktail-project/
            Summary: Cocktail app that provides possible drinks based on user inputted ingredients
            Role: Front end designer | YouTube API assistance
            Tools: HTML, CSS, JavaScript, Bulma, FontsAwesome, Cocktails DB API, YouTube API
            <br/>
            <br/>
            Stack Overeats | GitHub - Haguermeister/stack-overeats | stack-overeats.herokuapp.com/
            Summary: App that can be used to track calories consumed and burned
            Role: Back end | API Routes and Models
            Tools: HTML, CSS, JavaScript, Chart.js, MySQL, Sequelize, Node, Handlebars, Express, Heroku, Insomnia
            <br/>
            <br/>
            Experience
            <br/>
            Gloucester Mathews Humane Society					   2009-2013
            Volunteer									   Gloucester, VA
            Assisted employees with various tasks such as: refilling food and water dishes, cleaning animals’ pens, and bathing animals.
            Key Accomplishments:
            Educated clients on animal behavior and common diseases e.g. giardia
            Walked dogs and socialized them with people and other dogs
            <br/>
            <br/>
            Education
            <br/>
            Certificate, Full Stack Web Development - University of Richmond		Richmond, VA
            <br/>
            Associate of Arts & Sciences Degree - Rappahannock Community College  	Glenns, VA
        </p>
    </div>

      <footer>

        <section id="contactImages">

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

          <a href="https://www.facebook.com/johnathan.reese.98">
            <img src={fbImage} alt="Facebook" />
          </a>

        </section>

      </footer>

    </section>

  );
}

export default Resume;
