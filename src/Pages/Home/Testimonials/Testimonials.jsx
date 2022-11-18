import React from 'react';
import Slider from "react-slick";
import MiniTestimonial from './MiniTestimonial';
const Testimonials = () => {
const testcode =[
  {
  id:1,
  name:'Bahi',
  des:'hello i sm shipon form comilla is very nice zone'
},
{
  id:2,
  name:'Arif',
  des:'hello i sm shipon form comilla is very nice zone'
},
{
  id:3,
  name:'Shipon',
  des:'hello i sm shipon form comilla is very nice zone'
}

]

   var settings = {
     autoplay:true,
      dots: true,
      infinite: true,
     speed: 500,
    vertical: true,
     verticalSwiping:true,
      slidesToShow: 1,
      slidesToScroll: 1,
     
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
  return (
    <>
      <div>
        <h2> Responsive </h2>
        <Slider className='mx-auto' {...settings}>
         {
            testcode.map(test=><MiniTestimonial
              key={test.id}
             test={test}
            ></MiniTestimonial>)
          }
        </Slider>
      </div>
    </>
  );
};

export default Testimonials;