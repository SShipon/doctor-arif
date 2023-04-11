import React from 'react';
import UseTitle from '../../Hooks/UseTitle';
import OutSide from '../../Shared/outSide/OutSide';
import Accordion from './Accordion/Accordion';
import Banner from './Banner/Banner';
import Contact from './Contact/Contact';
import Counter from './Counter/Counter';
import Eye from './Eye/Eye';
import InfoCards from './InfoCards/InfoCards';
import MakeAppointment from './MakeAppointment/MakeAppointment';
import Services from './Services/Services';
import Testimonials from './Testimonials/Testimonials';
import TextContent from './Testimonials/TextContent';

const Home = () => {
    UseTitle('Home')
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <Eye></Eye>
            <MakeAppointment></MakeAppointment>
            <Counter></Counter>
            <Contact></Contact>
            <TextContent></TextContent>
            <Testimonials></Testimonials>
            <Accordion></Accordion>
            <OutSide></OutSide>
        </div>
    );
};

export default Home;