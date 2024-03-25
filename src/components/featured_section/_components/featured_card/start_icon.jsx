import React from "react";

const StarIcon = (props) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.9999 4.43951H7.41988L5.99988 -0.000488281L4.57988 4.43951H-0.00012207L3.69988 7.17951L2.29988 11.5995L5.99988 8.85951L9.69988 11.5995L8.27988 7.15951L11.9999 4.43951Z"
        fill={props.fillColor || "#FFCE31"}
      />
    </svg>
  );
};

export default StarIcon;
