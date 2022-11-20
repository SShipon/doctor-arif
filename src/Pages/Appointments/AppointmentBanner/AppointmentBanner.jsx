import React, { useState } from "react";
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import phaco1 from '../../../assets/images/phaco1.jpg'
const AppointmentBanner = () => {
    const [selectedDate, setSelectedDate] = useState(new Date())
  return (
    <header>
      <div className="hero gap-8">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={phaco1}
            className=" sm:w-[500px] rounded-lg shadow-2xl"
            alt="eye phaco machine"
          />
          <div className="mr-8">
          <DayPicker
          mode="single"
          selected={selectedDate}
          onSelect={setSelectedDate}
          />
          <h6 className="text-3xl font-bold">Your have selected date: {format(selectedDate,'PP')}</h6>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppointmentBanner;
