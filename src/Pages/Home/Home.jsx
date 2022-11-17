import React from 'react';
import Accordion from './Accordion/Accordion';
import Banner from './Banner/Banner';
import Contact from './Contact/COntact';
import Eye from './Eye/Eye';
import InfoCards from './InfoCards/InfoCards';
import MakeAppointment from './MakeAppointment/MakeAppointment';
import Services from './Services/Services';
import Testimonials from './Testimonials/Testimonials';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <Eye></Eye>
            <MakeAppointment></MakeAppointment>
            <Testimonials></Testimonials>
            <Contact></Contact>
            <Accordion></Accordion>
        </div>
    );
};

export default Home;