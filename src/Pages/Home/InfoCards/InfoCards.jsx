import React from 'react';
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'
import InfoCard from './InfoCard';
const InfoCards = () => {

    const cardData =[
        {
            id:1,
            name:'চেম্বার খোলার সময়।',
            description:'প্রতিদিন বিকাল ৪.০০ টা থেকে সন্ধ্যা ৭.০০ টা পর্যন্ত চেম্বার করবেন। শুক্রবার ব্যতীত।',
            icon:clock,
            bgClass:'bg-gradient-to-r from-indigo-500 to-accent'
        },
        {
            id:2,
            name:'আমাদের অবস্থান দেখুন',
            description:'কুমিল্লা মর্ডান হসপিটাল, লাকসাম রোড শাকতলা কুমিল্লা।',
            icon:marker,
            bgClass:'bg-gradient-to-r from-primary to-accent'
        },
        {
            id:3,
            name:'আপনার সেবার জন্য যোগাযোগ করুন।',
            description:'+88018 45678969 arifulislam@gmail.com',
            phone:'+880170305946512',
            icon:phone,
            bgClass:'bg-gradient-to-r from-violet-500 to-fuchsia-500'
        }
    ]
   
    
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
             {
              cardData.map(card=><InfoCard
              key={card.id}
               card={card}
              ></InfoCard>)  
             }       
        </div>
    );
};

export default InfoCards;