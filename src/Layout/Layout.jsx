import './Layout.css'
import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Outlet } from "react-router-dom";

export default function Layout () {
    return (
        <div className="layout-container">
            <Navbar/>
                <Outlet/>
            <Footer/>
        </div>
    )
}