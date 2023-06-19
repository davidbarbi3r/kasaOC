import './Accomodation.css'
import React from 'react'
import data from "../assets/data.json"
import { useLocation } from 'react-router-dom'
import NoMatch from '../Pages/NoMatch'
import Dropdown from '../Components/Dropdown'
import Carroussel from '../Components/Carroussel'

export default function Accomodation() {
  const {pathname} = useLocation()
  const currentAccomodation = data.filter((accomodation) => "/" + accomodation.id === pathname )[0]

  if (!currentAccomodation) {
    return <NoMatch/>
  }

  const rating = new Array(5)
  .fill(<img src='/full-star.svg'/>, 0, currentAccomodation.rating)
  .fill(<img src='/empty-star.svg'/>, currentAccomodation.rating, 5)

  return (
    <div className='accomodation-container'>
      <Carroussel images={currentAccomodation.pictures}/>
      <div className='accomodation-details'>
        <div className='accomodation-highlight'>
          <div className='accomodation-essentials'>
            <h1>{currentAccomodation.title}</h1>
            <p>{currentAccomodation.location}</p>
            <div>{currentAccomodation.tags.map((item, index) => {
              return <span key={index}>{item}</span>})} 
            </div>
          </div>
          <div className='accomodation-host-container'>
            <div className='accomodation-host'>
              <p>{currentAccomodation.host.name}</p>
              <img src={currentAccomodation.host.picture} alt={currentAccomodation.host.name}/>
            </div>
            <span>{rating}</span>
          </div>
        </div>
        <div className='description-container'>
          <Dropdown title='Description' text={currentAccomodation.description}/>
          <Dropdown title='Equipements' text={currentAccomodation.equipments} isEquipments={true}/>
        </div>
      </div>
    </div>
  )
}
