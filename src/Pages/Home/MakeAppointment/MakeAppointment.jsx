import React from "react";
import doctor from '../../../assets/images/doctor.png'
import appointment from '../../../assets/images/appointment.png'
import PrimaryButton from "../../PrimaryButton/PrimaryButton";
const MakeAppointment = () => {
  return (
    <section style={{
      borderRadius:'7px',
        background:`url(${appointment})`
    }} className="mt-32 sm:mt-32">
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={doctor}
            className="-mt-32 hidden md:block lg:w-1/2 rounded-lg shadow-2xl"
          />
          <div>
            <h4 className="sm:text-2xl lg:text-3xl text-primary ">Appointment</h4>
            <h1 className="sm:text-3xl lg:text-4xl font-bold text-white">Make an appointment Today!</h1>
            <p className="py-6 text-white">
            Build powerful apps. Spin up your backend without managing servers. Effortlessly scale to support millions of users with Firebase databases, machine learning infrastructure, hosting and storage solutions, and Cloud Functions.
            </p>
            <PrimaryButton>Appointment</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
