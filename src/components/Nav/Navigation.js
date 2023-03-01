import React from 'react';
import { Nav } from 'reactstrap';
import { Link } from 'react-router-dom';

const Navigation = (props) => {
  return (

      <nav className="navbar bg-success" data-bs-theme="dark" role="navigation">
        <Nav className="w-100">
          <div className="d-flex justify-content-around w-100">

            <h1 className='text-light'>
              |
            </h1>

            <Link className="text-light text-decoration-none fs-3" to="/">
            Johnathan Reese | About
            </Link>

            <h1 className='text-light'>
              |
            </h1>

            <Link className='text-light text-decoration-none fs-3' to="/portfolio">
              Portfolio
            </Link>

              <h1 className='text-light'>
                |
              </h1>

            <Link className='text-light text-decoration-none fs-3' to="/contact">
              Contact
            </Link>

            <h1 className='text-light'>
              |
            </h1>

          </div>
        </Nav>
      </nav>
    );
  }

export default Navigation;