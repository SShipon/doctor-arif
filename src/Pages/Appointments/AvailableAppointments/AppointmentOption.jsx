import React from "react";

const AppointmentOption = ({ appointmentOption }) => {
  console.log(appointmentOption);
  const { _id, name, slots } = appointmentOption;
  return (
    <div className="card shadow-2xl">
      <div className="card-body text-center">
        <h2 className=" text-1xl lg:text-3xl  text-secondary text-center">{name}</h2>
        <p>{slots.length > 0 ? slots[0]: 'Try Another day'}</p>
        <p>{slots.length} {slots.length > 1 ? 'spaces': 'space'}</p>
        <div className="card-actions justify-center">
          <button className="btn btn-primary text-white"><i class="fa-solid fa-calendar-check mr-2"></i>Book Appointment</button>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOption;
