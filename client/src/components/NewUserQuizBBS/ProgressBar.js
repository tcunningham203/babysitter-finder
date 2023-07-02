import React, { useState } from "react";

const ProgressBar = () => {
  const [progress, setProgress] = useState(1);

  const handleClick = () => {
    if (progress < 8) {
      setProgress(progress + 1);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 10" className="w-48 h-2">
        <line
          x1="0"
          y1="5"
          x2="200"
          y2="5"
          stroke="#000"
          strokeWidth="2"
        />
        {Array.from({ length: 8 }).map((_, index) => (
          <circle
            key={index}
            cx={25 * (index + 1)}
            cy="5"
            r={index === progress - 1 ? 6 : 4}
            fill={index === progress - 1 ? "#FF0000" : "#000"}
          />
        ))}
      </svg>
      <button
        className="ml-4 py-2 px-4 bg-blue-500 text-white rounded-md"
        onClick={handleClick}
      >
        Next
      </button>
    </div>
  );
};

export default ProgressBar;
