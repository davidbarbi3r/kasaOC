import React from 'react'
import data from "../assets/data.json"
import { useLocation } from 'react-router-dom'

export default function Accomodation() {
  const {pathname} = useLocation()
  const currentAccomodation = data.filter((accomodation) => "/" + accomodation.id === pathname )[0]

  return (
    <div>{currentAccomodation.title}</div>
  )
}
