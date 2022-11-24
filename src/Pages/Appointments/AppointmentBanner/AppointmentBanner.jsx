import React, { useState } from "react";
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import phaco1 from '../../../assets/images/phaco1.jpg'
const AppointmentBanner = ({selectedDate,setSelectedDate}) => {
    
  return (
    <header>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img 
            src={phaco1}
            className="rounded-lg shadow-2xl sm:text-center sm:w-1/2"
            alt="eye phaco machine"
          />
          <div className="sm:w-1/3">
          <DayPicker 
          mode="single"
          selected={selectedDate}
          onSelect={setSelectedDate}
          />
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppointmentBanner;
