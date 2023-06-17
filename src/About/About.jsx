import React from 'react'
import HeroBanner from '../Components/HeroBanner'
import Dropdown from './Dropdown'

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
    <div>
       <HeroBanner 
            text=''
            about={true}
        />
        {dropdownText.map((dropdown, index) => 
            <Dropdown text={dropdown.text} title={dropdown.title} key={index} />
        )}
    </div>
  )
}
