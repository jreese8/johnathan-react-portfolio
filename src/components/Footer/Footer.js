import React from 'react';
import emailImage from '../../assets/email.png';
import githubImage from '../../assets/github.png';
import linkImage from '../../assets/linkedin.png';
import resImage from '../../assets/resume.png';

const Footer = () => {
  return (
  <div>
    <br>
    </br>
    <br>
    </br>
    <br>
    </br>

    <div className='bg-success text-light text-center py-3 position-fixed left-0 bottom-0 w-100'>
          <a className="px-3" href="mailto:johnathanreese8@gmail.com">
            <img src={emailImage} alt="Email" />
          </a>

          <a className="px-3" href="https://github.com/jreese8">
            <img src={githubImage} alt="Github" />
          </a>

          <a className="px-3" href="https://www.linkedin.com/in/johnathan-reese-2892a3235/">
            <img src={linkImage} alt="LinkedIn" />
          </a>

          <a className="px-3" href="https://drive.google.com/file/d/12wWzyDyLQaE9ecsjp1SFqqvxQOa6S92_/view">
            <img src={resImage} alt="Resume" />
          </a>
    </div>
  </div>
  )
};

export default Footer;