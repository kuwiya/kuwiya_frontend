import React from "react";

const ArrowIcon = ({ fillColor }) => {
  return (
    <svg
      width={"12"}
      height={"22"}
      viewBox="0 0 12 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 21L11 11L1 0.999999"
        stroke={fillColor || "#FDFCFB"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowIcon;
