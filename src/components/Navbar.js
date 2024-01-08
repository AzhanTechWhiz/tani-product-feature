import React from 'react';
import logo from './tani.png';
import './components.css';
import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg shadow-lg">
      <div className="container-fluid">
        <div className="d-flex align-items-center">
          <a className="navbar-brand" href="/"><img src={logo} alt="" /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
          <ul className="navbar-nav mx-3"> 
            <li className="nav-item">
              <Link exact to="/" className="nav-link mx-3" activeClassName="active-link">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link mx-3" to="/stocks">Stock-Adjustment</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link mx-3" to="/Manufacturing">Manufacture</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
