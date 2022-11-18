import React from "react";
const InfoCard = ({ card }) => {
  const { name, description, icon,phone, bgClass } = card;
  return (
    <div className={`card mt-8 text-white p-6 card-side shadow-xl ${bgClass}`}>
      <figure>
        <img src={icon} alt="Movie" />
      </figure>
      <div className="card-body">
        <h1 className="text-2xl font-bold">{name}</h1>
        <p className="font-bold"><span>{phone}</span> <br/>{description}</p>
       
      </div>
    </div>
  );
};

export default InfoCard;
