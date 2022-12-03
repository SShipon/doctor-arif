import React from "react";
const AppointmentOption = ({ appointmentOption ,setTreatment}) => {
/*   console.log(setTreatment,'Set treatment updated'); */
 /*  console.log(appointmentOption); */
  const { _id, name, slots } = appointmentOption;
  return (
    <div className="card shadow-2xl">
      <div className="card-body text-center">
        <h2 className=" text-1xl lg:text-3xl text-secondary text-center">{name}</h2>
        <p>{slots.length > 0 ? slots[0]: 'Try Another day'}</p>
        <p>{slots.length} {slots.length > 1 ? 'spaces': 'space'}</p>
        <div className="card-actions justify-center">
        
          <label disabled={slots.length ===0} onClick={()=>setTreatment(appointmentOption)} htmlFor="booking-modal" className="btn btn-secondary text-white"><i className="fa-solid fa-calendar-check mr-2"></i> Book Appointment</label>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOption;
