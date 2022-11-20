import React from "react";
import quote from "../../../assets/icons/quote.svg";
const TextContent = () => {
  return (
    <div className=" flex justify-between ">
      <div>
      <h2 className="md:text-2xl lg:text-3xl sm:text-2xl  font-bold text-primary mt-6">পুনঃমূল্যায়ন-</h2>
        <h2 className="md:text-2xl lg:text-3xl sm:text-2xl font-semibold mt-6 sm:text-left "> আমাদের রোগীরা যা বলে । </h2>
      </div>
      <div>
        <figure>
          <img className="sm:w-32 w-32 hidden md:block " src={quote} alt="" />
        </figure>
      </div>
    </div>
  );
};

export default TextContent;


