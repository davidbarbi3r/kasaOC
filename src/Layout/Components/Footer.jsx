import "./Footer.css"
import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className='footer-container'>
        <Link to="/">
            <div className="navbar-logo">
                <img src="/src/assets/logo-K-white.svg" />
                <img src="/src/assets/logo-home-white.svg" />
                <img src="/src/assets/logo-S-white.svg" />
                <img src="/src/assets/logo-A-white.svg" />
            </div>
        </Link>
        <p>
            © 2020 Kasa. All rights reserved
        </p>
    </div>
  )
}