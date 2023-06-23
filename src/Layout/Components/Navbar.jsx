import './Navbar.css'
import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="navbar-container">
      <h1 className="navbar-title">Kasa</h1>
      <Link to="/">
        <div className="navbar-logo">
          <img src="/logo-K.svg" />
          <img src="/logo-home.svg" />
          <img src="/logo-S.svg" />
          <img src="/logo-A.svg" />
        </div>
      </Link>
      <ul>
        <li>
          <NavLink to="/">Accueil</NavLink>
        </li>
        <li>
          <NavLink to="a-propos">A propos</NavLink>
        </li>
      </ul>
    </header>
  );
}