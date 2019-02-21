import React from 'react';

export const Navbar = () => (
  <nav className="navbar navbar-expand-lg  nav-fill w-100  navbar-light bg-light">
    <div className="container">
    <a className="navbar-brand" href="#">
      <img src="/ronni_logo.png"  height="50" alt="" />
    </a>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <a className="nav-link" href="#">tapahtumat <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">historia </a>
        </li>
      </ul>
    </div>
    </div>
  </nav>
);
