import './Dropdown.css'
import React, {useState} from 'react'

function Dropdown (props) {
    const [open, setOpen] = useState(false)
    console.log(props.text)

    return (
        <div className='dropdown-container' onClick={() => setOpen((prev) => !prev)}>
            <h3>
                {props.title}
                <img src="/src/assets/arrow.svg" alt="arrow" className={open ? "rotate" : ""}/>
            </h3>
            {open && props.isEquipments ?
                <ul className='dropdown-content'>
                    {props.text.map((item, index) => {
                        return <p key={index}>{item}</p>})
                    }
                </ul> : open && <div><p>{props.text}</p></div>
            }
        </div>
  )
}

export default Dropdown