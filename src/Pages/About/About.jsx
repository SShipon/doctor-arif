import React from 'react';
import UseTitle from '../../Hooks/UseTitle';

const About = () => {
    UseTitle('About')
    return (
        <div className='mt-16'>
         <h1>this is about page </h1>    
        </div>
    );
};

export default About;