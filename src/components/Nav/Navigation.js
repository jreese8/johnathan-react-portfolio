import React from 'react';
import { Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

const tabs = [
  {
    route: "/",
    label: "About",
  },
  {
    route: "/portfolio",
    label: "Portfolio",
  },
  {
    route: "/contact",
    label: "Contact",
  },
];

const Navigation = (props) => {
  return (
    <nav className="tab-nav navbar navbar-light" role="navigation">
      <Nav className="w-100">
        <div className="d-flex flex-row justify-content-around w-100">
          {tabs.map((tab, index) => (
            <NavItem key={`tab-${index}`}>
              <NavLink
                to={tab.route}
                className="nav-link"
                activeClassName="active"
              >
                <div className="row d-flex flex-column justify-content-center align-items-center">
                  <div>{tab.label}</div>
                </div>
              </NavLink>
            </NavItem>
          ))}
        </div>
      </Nav>
    </nav>
  );
};

export default Navigation;