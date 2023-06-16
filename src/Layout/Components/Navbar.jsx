import './Navbar.css'
import React from "react";
import { 
    Link, 
    // useParams 
} from "react-router-dom";

export default function Navbar () {
    // const currentPath = useParams()

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
                <Link to="/">
                    <li>Accueil</li>
                </Link>
                <Link to="a-propos">
                    <li>A propos</li>
                </Link>
            </ul>

        </div>
    )
}