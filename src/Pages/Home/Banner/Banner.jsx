import React from "react";
import phaco from "../../../assets/images/phaco.jpg";
import { Typewriter } from "react-simple-typewriter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
const Banner = () => {
  return (
    <div className="hero mt-16">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={phaco} className=" sm:w-1/2 rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-4xl italic text-accent">
            <Typewriter
              words={[
                "আসসালামু আলাইকুম।",
                "আমি ডাক্তার. মোহাম্মদ আরিফুল ইসলাম।",
                "",
              ]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h1>
          <p className="py-6 text-black">
            চোখ নিয়ে কেউ অবহেলা করবেন না। চোখ একটি অমূল্য সম্পদ। আপনার একটি হাত
            না থাকলেও আপনি স্বাভাবিকভাবে চলতে পারবেন কিন্তু চোখ না থাকলে তা
            সম্ভব নয়। চোখের দৃষ্টি বিহীন আপনার পৃথিবী অন্ধকার। সুতরাং চোখের কোন
            সমস্যা হলে দেরি না করে আমাদের সাথে যোগাযোগ করুন। কুমিল্লায় আধুনিক
            এবং উন্নতমানের চোখের সেবায় আমরা আছি আপনাদের পাশে। চোখের যে কোন
            চিকিৎসা ও অপারেশন আমরা করে থাকি। দরিদ্র অসহায়দের জন্য কম খরচে চোখের
            অপারেশনের সুব্যবস্থা রয়েছে।
          </p>
          <button className="btn btn-primary bg-gradient-to-r from-primary to-accent text-white transition duration-300 ease-in-out">
            Get Started{" "}
            <FontAwesomeIcon icon={faEye} className=" p-2 "></FontAwesomeIcon>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
