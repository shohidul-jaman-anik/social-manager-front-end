import React from 'react';
import Banner from '../Banner/Banner';
import OurPlan from '../OurPlan/OurPlan';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Testimonials></Testimonials>
            <OurPlan></OurPlan>
        </div>
    );
};

export default Home;