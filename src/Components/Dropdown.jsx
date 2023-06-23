import './Dropdown.css'
import React, {useState} from 'react'

function Dropdown (props) {
    const [open, setOpen] = useState(false)

    return (
        <div className={`dropdown-container ${open ? 'open' : ''}`} onClick={() => setOpen((prev) => !prev)}>
            <h3>
                {props.title}
                <img src="/arrow.svg" alt="arrow" className={open ? "rotate" : ""}/>
            </h3>
            {props.isEquipments ?
                <ul className='dropdown-content'>
                    {props.text.map((item, index) => {
                        return <li key={index}>{item}</li>})
                    }
                </ul> : <div className='dropdown-content'><p>{props.text}</p></div>
            }
        </div>
    )
}

export default Dropdown