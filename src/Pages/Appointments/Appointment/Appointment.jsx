import React, { useState } from 'react';
import UseTitle from '../../../Hooks/UseTitle';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import AvailableAppointments from '../AvailableAppointments/AvailableAppointments';

const Appointment = () => {
  UseTitle('Appointment')
    const [selectedDate, setSelectedDate] = useState(new Date())
    return (
        <div className='mt-16'>
          <AppointmentBanner
           selectedDate={selectedDate}
           setSelectedDate={setSelectedDate}
          ></AppointmentBanner>
          <AvailableAppointments 
            selectedDate={selectedDate}
          ></AvailableAppointments>
        </div>
    );
};

export default Appointment;