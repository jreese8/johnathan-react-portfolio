import React from 'react';
import { Nav } from 'reactstrap';
import { Link } from 'react-router-dom';

const Navigation = (props) => {
  return (

      <nav className="navbar navbar-light" role="navigation">
        <Nav className="w-100">
          <div className="d-flex justify-content-around w-100">

            <Link className="" to="/">
            Johnathan Reese
            </Link>

            <Link className='link' to="/">
              About
            </Link>

            <Link className='link' to="/shop">
              Portfolio
            </Link>

            <Link className='link' to="/contact">
              Contact
            </Link>

          </div>
        </Nav>
      </nav>
    );
  }

export default Navigation;