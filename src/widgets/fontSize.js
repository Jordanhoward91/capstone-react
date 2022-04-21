import React, { useState } from "react";

const FontSizer = () => {
  let [size, setSize] = useState(20);

  const handleCrement = amt => {
    setSize(size + amt);
  };

  return (
    <div className="text-sizer">
      <div>
			<h1>Font Size</h1>
			<p style={{ fontSize: `${size}px` }}>{size}px</p>
			<button id="shrinkBtn" onClick={() => handleCrement(-5)}>
				Shrink
			</button>
        <button id="growBtn" onClick={() => handleCrement(5)}>
          Grow
        </button>
      </div>
    </div>
  );
};

export default FontSizer;
