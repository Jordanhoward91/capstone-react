import React, { useState } from "react";

const ShowHide = () => {
  let [isHidden, setIsHIdden] = useState(false);

  return (
    <div className="show-hide">
      <div>
        <h1 style={{ visibility: isHidden ? "hidden" : "visible" }}>Hide Me</h1>
        <button id="show" onClick={() => setIsHIdden(!isHidden)}>
          {isHidden ? "Hide" : "Show"}
        </button>
      </div>
    </div>
  );
};

export default ShowHide;
