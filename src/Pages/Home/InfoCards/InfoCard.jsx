import React from "react";
const InfoCard = ({ card }) => {
  const { name, description, icon,phone, bgClass } = card;
  return (
    <div className={`card mt-8 text-white p-6 card-side shadow-xl ${bgClass}`}>
      <figure>
        <img src={icon} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="text-1xl font-bold">{name}</h2>
        <p><span>{phone}</span> <br/>{description}</p>
       
      </div>
    </div>
  );
};

export default InfoCard;
