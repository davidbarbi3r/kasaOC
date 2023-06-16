import './Home.css'
import React from "react";
import HeroBanner from "../Components/HeroBanner";


export default function Home () {
    return (
    <div className="home-container">
        <HeroBanner 
            text='Chez vous, partout et ailleurs'
            about={false}
        />
    </div>
    )
}