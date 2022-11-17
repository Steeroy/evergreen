import React from 'react';
import { Container } from 'react-bootstrap';
import '../App.css';

const nav__links = [
  {
    display: 'Community',
    path: '#community',
  },
  {
    display: 'Team',
    path: '#team',
  },
  {
    display: 'Projects',
    path: '#projects',
  },
];

function NavBar() {
  return (
    <Container>
      <div className="navbar d-flex align-items-center justify-content-between w-100">
        <div className="brandname">
          <a href="#logo">EverGreen</a>
        </div>

        <div className="nav__menu d-flex align-items-center gap-5">
          {nav__links.map((item, index) => (
            <p key={index}>
              <a
                href={item.path}
                className={(navClass) =>
                  navClass.isActive ? 'active__menu' : ''
                }
              >
                {item.display}
              </a>
            </p>
          ))}
        </div>

        <div className="d-flex align-items-center gap-3">
          <a href="#contact">
            <button type="button" className="button__primary">
              Join
            </button>
          </a>

          <a href="#signin">
            <button type="button" className="button__secondary">
              Sign In
            </button>
          </a>
        </div>
      </div>
    </Container>
  );
}

export default NavBar;
