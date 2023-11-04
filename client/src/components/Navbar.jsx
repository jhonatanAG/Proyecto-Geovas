import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

function Navbar() {
  return (
    <nav>
      <ul className="navbar">
        <li className="navbar-item">
          <Link to="/">Inicio</Link>
        </li>
        <li className="navbar-item">
          <Link to="/new">Crear stock</Link>
        </li> 
        <li className="navbar-item">
          <Link to="/getStock">Ver stock</Link>
        </li> 
        <li className="navbar-item">
          <Link to="/getStock">Inventari app</Link>
          </li>
      </ul>
    </nav>
  );
}

export default Navbar;
