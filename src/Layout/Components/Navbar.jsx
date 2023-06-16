import './Navbar.css'
import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar () {
    const { pathname } = useLocation();

    return (
      <div className="navbar-container">
        <Link to="/">
          <div className="navbar-logo">
            <img src="/src/assets/logo-K.svg" />
            <img src="/src/assets/logo-home.svg" />
            <img src="/src/assets/logo-S.svg" />
            <img src="/src/assets/logo-A.svg" />
          </div>
        </Link>
        <ul>
          <Link to="/" className={pathname === "/" ? "underline" : ""}>
            <li>Accueil</li>
          </Link>
          <Link
            to="a-propos"
            className={pathname === "/a-propos" ? "underline" : ""}
          >
            <li>A propos</li>
          </Link>
        </ul>
      </div>
    );
}