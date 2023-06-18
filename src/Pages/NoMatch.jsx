import './NoMatch.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default function NoMatch() {
  return (
    <div className='no-match'>
      <h2>404</h2>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/">Retourner sur la page d’accueil</Link>
    </div>
  )
}
