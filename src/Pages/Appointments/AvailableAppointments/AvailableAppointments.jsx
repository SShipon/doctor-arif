
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentOption from './AppointmentOption';

const AvailableAppointments = ({selectedDate}) => {
    const [appointmentOption,setAppointmentOptions]  =useState([])

    useEffect(()=>{
        fetch('appointmentOptions.json')
        .then(res => res.json())
        .then(data => setAppointmentOptions(data))
    },[])
    return (
        <section className='mt-16 mx-6'>
                 <h1 className='text-center text-secondary text-[11px] md:text-[18px] lg:text-[24px] font-bold my-6'>Available Appointment on the date {format(selectedDate, 'PP')} </h1>
                <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {
                        appointmentOption.map(option=><AppointmentOption
                         key={option._id}
                         appointmentOption={option}
                        ></AppointmentOption>)
                    }
                </div>
        </section>
    );
};

export default AvailableAppointments;