import './Card.css'
import React from 'react'
import { Link } from 'react-router-dom'

function Card(props) {
  return (
        <div className='card'>
            <Link to={props.card.id}>
                <div className="img-wrapper">
                    <img src={props.card.cover} alt={props.card.title} />
                </div>
                <h3>
                    {props.card.title}
                </h3>
            </Link>
        </div>
  )
}

export default Card