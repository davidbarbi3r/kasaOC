import './Accomodation.css'
import React, {useEffect, useState} from 'react'
// import data from "../assets/data.json"
import { useLocation } from 'react-router-dom'
import NoMatch from '../Pages/NoMatch'
import Dropdown from '../Components/Dropdown'
import Carroussel from '../Components/Carroussel'

export default function Accomodation() {
  const {pathname} = useLocation()
  const [currentAccomodation, setCurrentAccomodation] = useState(null)
  const [loading, setLoading] = useState(false)
  
  useEffect(() => {
    setLoading(true)
    fetch('https://sea-lion-app-d9i46.ondigitalocean.app/api/accomodations', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'authorization': 'Bearer ' + import.meta.env.VITE_API_TOKEN
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log(data.data[0].attributes)
        const accomodation = data.data.filter((accomodation) => {
            return accomodation.attributes.data.id === pathname.split('/')[1]
        })
        setCurrentAccomodation(accomodation[0].attributes.data)
        setLoading(false)
    })
    .catch(error => {
        console.log(error)
        setLoading(false)
    })
}, [pathname])

  if (!currentAccomodation) {
    return <NoMatch/>
  }

  const rating = new Array(5)
  .fill(<img src='/full-star.svg'/>, 0, currentAccomodation.rating)
  .fill(<img src='/empty-star.svg'/>, currentAccomodation.rating, 5)

  if (loading) {
    return <div className='loading'>Loading...</div>
  }

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
