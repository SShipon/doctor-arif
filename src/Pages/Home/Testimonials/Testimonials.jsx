import React from "react";
import Slider from "react-slick";
import MiniTestimonial from "./MiniTestimonial";
const Testimonials = () => {
  const person = [
    {
      id: 1,
      name: "oxShipon",
      des: "hello i sm shipon form comilla is very nice zone",
    
    },
    {
      id: 2,
      name: "Mahmudul hasan Razu",
      des: "hello i sm shipon form comilla is very nice zone",
    },
    {
      id: 3,
      name: "Rased khan",
      des: "hello i sm shipon form comilla is very nice zone",
    },
    {
      id: 4,
      name: "Rakibul islam",
      des: "hello i sm shipon form comilla is very nice zone",
    },
    {
      id: 3,
      name: "Riaz Uddin",
      des: "hello i sm shipon form comilla is very nice zone",
    },
    {
      id: 3,
      name: "putul",
      des: "hello i sm shipon form comilla is very nice zone",
    },
  ];

  var settings = {
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 500,
    horizontal: true,
    horizontalSwiping: true,
    slidesToShow: 1,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section>
      <div className="my-8">
        <div className="sm:w-96 mx-auto shadow-lg">
          <Slider {...settings}>
            {person.map((test) => (
              <MiniTestimonial key={test.id} test={test}></MiniTestimonial>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;


