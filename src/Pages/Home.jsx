import './Home.css'
import React from "react";
import HeroBanner from "../Components/HeroBanner";
import data from '../assets/data.json'
import Card from '../Components/Card';

export default function Home () {

    return (
    <div className="home-container">
        <HeroBanner 
            text='Chez vous, partout et ailleurs'
            about={false}
        />
        <section className='cards-container'>
            {data.map((card) => {
                return (
                    <div key={card.id} className='card-resizer'>
                        <Card card={card}/> 
                    </div>
                )
            })}
        </section>
    </div>
    )
}