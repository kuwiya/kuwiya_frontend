import React from "react";

const TwitterIcon = ({ width, height }) => {
  return (
    <svg
      width={width || "48"}
      height={height || "49"}
      viewBox="0 0 48 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M36.6526 4.30914H43.3995L28.6594 21.1561L46 44.0811H32.4225L21.7881 30.1772L9.61989 44.0811H2.86886L18.6349 26.0613L2 4.30914H15.9222L25.5348 17.0178L36.6526 4.30914ZM34.2846 40.0427H38.0232L13.8908 8.13541H9.87892L34.2846 40.0427Z"
        fill="black"
      />
    </svg>
  );
};

export default TwitterIcon;
