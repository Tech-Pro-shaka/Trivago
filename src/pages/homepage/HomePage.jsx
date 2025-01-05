import React from 'react';
import Banner from './homecomponent/Banner';
import Service from './homecomponent/Service';
import Destination from './homecomponent/Destination';
import Dream from './homecomponent/Dream';
import TopDestination from './homecomponent/TopDestination';
import Experience from './homecomponent/Experience';
import TourGuide from './homecomponent/TourGuide';
import NewsLetter from './homecomponent/NewsLetter';


const HomePage = () => {
    return (
        <div>
            <Banner/>
            <Service/>
            <Destination/>
            <Dream/>
            <TopDestination/>
            <Experience/>
            <TourGuide/>
            <NewsLetter/>
        </div>
    );
};

export default HomePage;