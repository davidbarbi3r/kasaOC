import './Card.css'
import React from 'react'
import { Link } from 'react-router-dom'

function Card(props) {
  return (
    <Link to={props.card.id}>
      <article className="card">
        <div className="img-wrapper">
          <img src={props.card.cover} alt={props.card.title} />
        </div>
        <h3>{props.card.title}</h3>
      </article>
    </Link>
  );
}

export default Card