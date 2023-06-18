import React from 'react'
import data from "../assets/data.json"
import { useLocation } from 'react-router-dom'
import NoMatch from '../Pages/NoMatch'
import Dropdown from '../Components/Dropdown'

export default function Accomodation() {
  const {pathname} = useLocation()
  const currentAccomodation = data.filter((accomodation) => "/" + accomodation.id === pathname )[0]

  if (!currentAccomodation) {
    return <NoMatch/>
  }

  const rating = new Array(5)
  .fill(<img src='../assets/full-start.svg'/>, 0, currentAccomodation.rating)
  .fill(<img src='../assets/full-start.svg'/>, currentAccomodation.rating, 5)

  console.log(rating)
  return (
    <div className='accomodation-container'>
      <div className='accomodation-cover'>
        Carrousel
      </div>
      <div>
        <div>
          <h1>{currentAccomodation.title}</h1>
          <p>{currentAccomodation.location}</p>
          <div>{currentAccomodation.tags.map((item, index) => {
            return <span key={index}>{item}</span>})} 
          </div>
        </div>
        <div>
          <div>
            <p>{currentAccomodation.host.name}</p>
            <img src={currentAccomodation.host.picture} alt={currentAccomodation.host.name}/>
          </div>
          <p>i</p>
        </div>
        <div>
          <Dropdown title='Description' text={currentAccomodation.description}/>
          <Dropdown title='Equipements' text={currentAccomodation.equipments} isEquipments={true}/>
        </div>
      </div>
    </div>
  )
}
