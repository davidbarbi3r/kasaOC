import './Accomodation.css'
import React, {useEffect, useState} from 'react'
import { useLocation, useNavigate } from "react-router-dom";
import Dropdown from '../Components/Dropdown'
import Carroussel from '../Components/Carroussel'
import { useContentful } from "../hook/useContentful";

export default function Accomodation() {
  const {pathname} = useLocation()
  const [currentAccomodation, setCurrentAccomodation] = useState(null)
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate()

  const client = useContentful();
  
  useEffect(() => {
    if (client) {
      setLoading(true)
      client.getEntries({content_type: "accomodation"})
      .then((response) => {
          const accomodations = response.items.map((item) => {
              return item.fields.data
          })
          const currentAccomodation = accomodations.find((item) => {
            return item.id === pathname.slice(1)
          })
          setCurrentAccomodation(currentAccomodation)
          setLoading(false)
      })
      .catch((error) => {
          console.log(error)
          setLoading(false)
      })
    }
  }, []);
  
  if (loading) {
    return <div className='loading'>Loading...</div>
  }
  
  if (!currentAccomodation && !loading) {
    navigate('/404');
  }
  
  const rating = new Array(5).fill(null).map((_, index) => (
    <img
      src={index < currentAccomodation.rating ? '/full-star.svg' : '/empty-star.svg'}
      alt={`star-${index}`}
      key={`star-${index}`}
    />
  ));

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
