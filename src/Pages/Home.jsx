import './Home.css'
import React, { useEffect, useState } from "react";
import HeroBanner from "../Components/HeroBanner";
// import data from '../assets/data.json'
import Card from '../Components/Card';

export default function Home () {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      setLoading(true);
      fetch("https://sea-lion-app-d9i46.ondigitalocean.app/api/accomodations", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: "Bearer " + import.meta.env.VITE_API_TOKEN,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          const accomodations = data.data.map((accomodation) => {
            return accomodation.attributes.data;
          });
          console.log(accomodations);
          setData(accomodations);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    }, []);
    
    return (
    <div className="home-container">
        <HeroBanner 
            text='Chez vous, partout et ailleurs'
            about={false}
        />
        <div className='cards-container'>
            {loading && <div className='loading'>Loading...</div>}
            {!loading && data.map((card) => {
                return (
                    <div key={card.id} className='card-resizer'>
                        <Card card={card}/> 
                    </div>
                )
            })}
        </div>
    </div>
    )
}