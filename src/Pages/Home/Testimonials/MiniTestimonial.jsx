import React from "react";

const MiniTestimonial = ({ test }) => {
  const { name, des } = test;
  return (
    
      <div className="card shadow-2xl gap-8">
      <figure className="px-10 pt-10">
        <img style={{width:'150px',height:'150px', borderRadius:'50%'}}
          src="https://placeimg.com/400/225/arch"
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{des}</p>
      </div>
    </div>
  );
};

export default MiniTestimonial;
