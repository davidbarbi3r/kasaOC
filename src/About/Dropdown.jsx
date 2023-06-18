import './Dropdown.css'
import React, {useState} from 'react'

function Dropdown (props) {
    const [open, setOpen] = useState(false)

    return (
        <div className='dropdown-container' onClick={() => setOpen((prev) => !prev)}>
            <h3>
                {props.title}
                <img src="/src/assets/arrow.svg" alt="arrow" className={open ? "rotate" : ""}/>
            </h3>
            {open && 
            <div className='dropdown-content'>
                <p>{props.text}</p>
            </div>}
        </div>
  )
}

export default Dropdown