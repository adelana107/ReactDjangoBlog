import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">My Blog</div>

      <ul className="navbar-list">
        <li>
          <Link to="/" className="navbar-link">Home</Link>
        </li>
        <li>
          <Link to="/create" className="navbar-link">Create Post</Link>
        </li>
        <li>
          <Link to="/about" className="navbar-link">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
