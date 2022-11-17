import React from "react";
import treatment from "../../../assets/images/treatment.png";
import PrimaryButton from "../../PrimaryButton/PrimaryButton";
const Eye = () => {
  return (
    <section className="hero mt-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-center items-center ">
        <div>
          <img
            style={{ width: "550px" }}
            src={treatment}
            alt=""
            className="rounded-lg shadow-2xl"
          />
        </div>
        <div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis
            odio inventore culpa, provident recusandae enim ipsa vero fugit,
            sint nobis totam explicabo eveniet officiis ea quis, minus illum
            similique molestiae. Accusantium nesciunt hic a, architecto,
            reiciendis voluptates, perferendis eius iure dicta saepe animi nemo
            nostrum commodi adipisci? Odit, totam officiis.
          </p>
          <PrimaryButton>GET STARTED</PrimaryButton>
        </div>
      </div>
    </section>
  );
};

export default Eye;

/* 

<div className="hero mt-16">
      <div className="hero-content flex-col lg:flex-row-reverse">
      <div>
        
        <p className="py-6">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Perferendis sunt ratione quidem qui beatae facere iure maxime illo
          repudiandae! Fugiat dolore minima ducimus tenetur quas. Asperiores
          quasi dolorum dignissimos officiis!
        </p>
        <button className="btn btn-primary bg-gradient-to-r from-neutral to-accent text-white">
          Get Started
        </button>
      </div>
        <img src={treatment} className=" w-2/4 rounded-lg shadow-2xl" />
      </div>
    </div>

*/
