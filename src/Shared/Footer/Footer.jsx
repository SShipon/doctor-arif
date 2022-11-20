import React from "react";
import { Link } from "react-router-dom";
import DateFooter from "./DateFooter";
import'./Footer.css'


const Footer = () => {
  return (
    <section className="mt-8 bg-accent p-3 md:p-16 sm:text-center">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-left text-[13px] md:text-[14px] lg:text-[18px]  p-4">
        <div className="footer_parent text-white ">
          <span className="footer-title">Services</span>
           <li><Link>Branding</Link></li>
           <li><Link>Design</Link></li>
           <li><Link>Marketing</Link></li>
           <li><Link>Advertisement</Link></li>
        </div>
        <div className="footer_parent text-white ">
        <span className="footer-title">Company</span> 
           <li><Link>About us</Link></li>
           <li><Link>Contact</Link></li>
           <li><Link>Jobs</Link></li>
           <li><Link>Press kit</Link></li>
        </div>
        <div className="footer_parent text-white">
        <span className="footer-title">Legal</span> 
           <li><Link>Terms of use</Link></li>
           <li><Link>Privacy policy</Link></li>
           <li><Link>Cookie policy</Link></li>
        </div>
        <div className="footer_parent text-white">
        <span className="footer-title">Help</span>
           <li><Link><i class="fa-solid fa-phone"></i>01703059462</Link></li>
           <li><Link><i class="fa-solid fa-phone-volume"></i> +880005455</Link></li>
           <li><Link><i class="fa-solid fa-envelope-circle-check text-sm"></i> arifulislam@gmail.com</Link></li>
        </div>
      </div>
      <p className="text-center my-6"><DateFooter></DateFooter></p>
      <div className="text-center text-primary icon-parent">
      <i class="m-2 text-3xl  fa-brands fa-facebook"></i>
      <i class="m-2 text-3xl  fa-brands fa-facebook-messenger"></i>
      <i class="m-2 text-3xl  fa-brands fa-linkedin"></i>
      <i class="m-2 text-3xl  fa-brands fa-youtube"></i>
      </div>
    </section>
  );
};

export default Footer;
