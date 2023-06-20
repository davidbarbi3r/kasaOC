import './Home.css'
import React, { useEffect, useState } from "react";
import HeroBanner from "../Components/HeroBanner";
import Card from '../Components/Card';
import { useContentful } from '../hook/useContentful';

export default function Home () {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const client = useContentful();

    useEffect(() => {
      if (client) {
        setLoading(true)
        client.getEntries({content_type: "accomodation"})
        .then((response) => {
            const accomodations = response.items.map((item) => {
                return item.fields.data
            })
            setData(accomodations)
            setLoading(false)
        })
        .catch((error) => {
            console.log(error)
            setLoading(false)
        })
      }
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