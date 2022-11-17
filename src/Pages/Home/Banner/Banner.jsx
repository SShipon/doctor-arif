import React from "react";
import phaco from "../../../assets/images/phaco.jpg";
import { Typewriter, } from "react-simple-typewriter";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart,faCableCar,faEye  } from '@fortawesome/free-solid-svg-icons';
const Banner = () => {
 
  return (
    <div className="hero mt-16">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={phaco} className=" sm:w-1/2 rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl italic text-accent">
            <Typewriter
              words={["Hello I am !!", "Doctor", "Ariful Islam"]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h1>
          <p className="py-6">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Perferendis sunt ratione quidem qui beatae facere iure maxime illo
            repudiandae! Fugiat dolore minima ducimus tenetur quas. Asperiores
            quasi dolorum dignissimos officiis!
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
