import "./Footer.css"
import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className='footer-container'>
        <Link to="/">
            <div className="navbar-logo">
                <img src="/logo-K-white.svg" />
                <img src="/logo-home-white.svg" />
                <img src="/logo-S-white.svg" />
                <img src="/logo-A-white.svg" />
            </div>
        </Link>
        <p>
            © 2020 Kasa. All rights reserved
        </p>
    </footer>
  )
}