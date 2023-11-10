import React from 'react'
import HomeTop from "./HomeTop";
import HomeHotels from "./HomeHotels";
import HomeAccordian from "./HomeAccordian";
import HomeContact from "./HomeContact";

const Home = () => {
    return (
    <div className='home'>
        <HomeTop />
        <HomeHotels/>
        <HomeAccordian />
        <HomeContact />
    </div>
    )
}

export default Home