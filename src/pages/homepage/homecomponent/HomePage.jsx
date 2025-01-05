import React from 'react';
import Banner from './Banner';
import Service from './Service';
import Destination from './Destination';
import Dream from './Dream';
import TopDestination from './TopDestination';
import Experience from './Experience';
import TourGuide from './TourGuide';
import NewsLetter from './NewsLetter';

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