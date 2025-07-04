import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">LearningHub</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/modules">Modules</Link></li>
        <li><Link to="/quizzes">Quizzes</Link></li>
        <li><Link to="/community">Community</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
