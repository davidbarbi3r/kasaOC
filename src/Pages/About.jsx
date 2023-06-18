import './About.css'
import React from 'react'
import HeroBanner from '../Components/HeroBanner'
import Dropdown from '../Components/Dropdown'

export default function About() {
  const dropdownText = [
    {
      title: 'Fiabilité',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis diam in nunc lobortis lacinia. Donec euismod, nisl vitae aliquam ultricies, nunc nisl aliquet nunc, vitae aliquam nisl nunc eu nisl. Donec euismod, nisl vitae aliquam ultricies, nunc nisl aliquet nunc, vitae aliquam nisl nunc eu nisl.'
    },
    {
      title: 'Respect',
      text: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'
    },
    {
      title: 'Service',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis diam in nunc lobortis lacinia. Donec euismod, nisl vitae aliquam ultricies, nunc nisl aliquet nunc, vitae aliquam nisl nunc eu nisl. Donec euismod, nisl vitae aliquam ultricies, nunc nisl aliquet nunc, vitae aliquam nisl nunc eu nisl.'
    },
    {
      title: 'Sécurité',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis diam in nunc lobortis lacinia. Donec euismod, nisl vitae aliquam ultricies, nunc nisl aliquet nunc, vitae aliquam nisl nunc eu nisl. Donec euismod, nisl vitae aliquam ultricies, nunc nisl aliquet nunc, vitae aliquam nisl nunc eu nisl.'
    }
  ] 
  
  return (
    <div className='about'>
       <HeroBanner 
            text=''
            about={true}
        />
        <div className='dropdown-items'>
          {dropdownText.map((dropdown, index) => 
              <Dropdown text={dropdown.text} title={dropdown.title} key={index} />
          )}
        </div>
    </div>
  )
}
