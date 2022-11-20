import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import appointment from "../../../assets/images/appointment.png";
import PrimaryButton from "../../PrimaryButton/PrimaryButton";
import UseContact from "../../UseLottie/UseContact";
import Swal from "sweetalert2";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_q7fw8tc",
        "template_y10yfz7",
        form.current,
        "0AGx-yacdwuJYI7go"
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire(
            "ধন্যবাদ আপনার মেসেজটি সফল হয়েছে। !!!",
            "ক্লিক করুন ওকে বাটনে!",
            "ok"
          );
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <section
      style={{
        borderRadius: "7px",
        background: `url(${appointment})`,
      }}
      className="bg-primary px-10 py-14 "
    >
      <div className="text-center pb-14 text-white">
        <p className="text-4xl font-bold text-primary">Contact Us</p>
        <h1 className="lg:text-4xl sm:text-3xl">Stay connected with us</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <div>
          <UseContact></UseContact>
        </div>

        <div>
          <form ref={form} onSubmit={sendEmail}>
            <div className="grid grid-cols-1 justify-items-center gap-5">
              <input
                type="text"
                placeholder="Name*"
                name="user_name}"
                className="input w-full max-w-md"
              />
              <input
                type="text"
                placeholder="Email Address*"
                name="user_email"
                className="input w-full max-w-md"
              />
              <input
                type="text"
                placeholder="Subject*"
                name="from_name"
                className="input w-full max-w-md"
              />
              <textarea
                className="textarea w-full max-w-md"
                placeholder="Your message*"
                name="message"
                rows={6}
              ></textarea>
              <PrimaryButton type="submit" value="send">
                Submit
              </PrimaryButton>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
