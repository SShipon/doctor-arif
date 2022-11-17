import React from "react";
import quote from "../../../assets/icons/quote.svg";
import people1 from '../../../assets/images/people1.png'
import people2 from '../../../assets/images/people2.png'
import people3 from '../../../assets/images/people3.png'
const Testimonials = () => {
    const reviews =[
        {
            id:1,
            name:'Jamil Hasan',
            review:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro neque accusamus ducimus optio blanditiis, perferendis minima nobis quibusdam impedit necessitatibus eaque reiciendis ',
            location:'comilla'
        },
        {
            id:2,
            name:'Jamil Hasan',
            review:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro neque accusamus ducimus optio blanditiis, perferendis minima nobis quibusdam impedit necessitatibus eaque reiciendis ',
            location:'comilla'
        },
        {
            id:3,
            name:'Abdul Hasan',
            review:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro neque accusamus ducimus optio blanditiis, perferendis minima nobis quibusdam impedit necessitatibus eaque reiciendis ',
            location:'comilla'
        }
    ]
  return (
    <section className="my-16">
      <div className="flex justify-between">
        <div>
          <h4 className="text-xl text-primary font-bold">Testimonial</h4>
          <h2 className="text-4xl">what Our Patients Says</h2>
        </div>
 
          <figure>
            <img className="w-24 lg:w-48" src={quote} alt="" />
          </figure>
        </div>
    </section>
  );
};

export default Testimonials;
