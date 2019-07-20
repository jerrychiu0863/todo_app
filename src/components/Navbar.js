import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light"
      style={{ marginBottom: '20px', backgroundColor: 'lightblue' }}
    >
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link to="/" className="nav-item nav-link active">
            Home
          </Link>
          <Link to="/add" className="nav-item nav-link active">
            Add Todo Item
          </Link>
          <Link to="/search" className="nav-item nav-link active">
            Search
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
