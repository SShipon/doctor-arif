import React from "react";
import phaco from "../../../assets/images/phaco.jpg";
import { Typewriter, } from "react-simple-typewriter";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
const Banner = () => {
 
  return (
    <div className="hero mt-16">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={phaco} className=" sm:w-1/2 rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl italic text-accent">
            <Typewriter
              words={["আমাদের এই হিসেবটা একটু অন্যরকম", "বাকী সব কিছুতেই মতের অমিল হয়না, আলহামদুলিল্লাহ", "ডা.আরিফুল ইসলাম"]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h1>
          <p className="py-6">
          আপনি কি আপনার ডিলার ব্যবসার জন্য Software খুঁজছেন।তাহলে আর চিন্তা নয়।নিচের  Video দেখে আজই Order  করেন।যেখানে পাবেন আপনার ব্যবসায়ীক যাবতীয় হিসাব।যেমন Ctn Wise Sales,Ctn Wise Return,Pcs wise sales,Pcs Wise return,Damage,Sr Wise Sale Statement,Bank  হিসাব সহ সকল ধরনের Report পাবেন।প্রয়োজনে customization এ সুবিদা আছে।
          </p>
          <button className="btn btn-primary bg-gradient-to-r from-primary to-accent text-white transition duration-300 ease-in-out">
            Get Started <FontAwesomeIcon icon={faEye} className=' p-2 ' ></FontAwesomeIcon>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
