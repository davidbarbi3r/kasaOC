import './HeroBanner.css'
import React from 'react'

function HeroBanner(props) {
  return (
    <div className={props.about ? 'hero-container about' :'hero-container'}>
        <h2>
            {props.text}
        </h2>
    </div>
  )
}

export default HeroBanner