import React from "react";

const Test = () => {
  return (
    <div className="grid grid-cols-3">
      <div>
        <div className="indicator">
          <span className="indicator-item indicator-center badge badge-secondary"></span>
          <div className="grid w-32 h-32 bg-base-300 place-items-center">
            content
          </div>
        </div>
      </div>
      <div>
        <div className="indicator">
          <span className="indicator-item indicator-center badge badge-secondary"></span>
          <div className="grid w-32 h-32 bg-base-300 place-items-center">
            content
          </div>
        </div>
      </div>
      <div>
        <div className="indicator">
          <span className="indicator-item indicator-center badge badge-secondary"></span>
          <div className="grid w-32 h-32 bg-base-300 place-items-center">
            content
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
