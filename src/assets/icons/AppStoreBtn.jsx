import React from "react";

const AppStoreBtn = ({ width, height }) => {
  return (
    <svg
      width="135"
      height="50"
      viewBox="0 0 135 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="135" height="50" rx="10" fill="url(#pattern0_1110_4135)" />
      <defs>
        <pattern
          id="pattern0_1110_4135"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_1110_4135"
            transform="matrix(0.00255428 0 0 0.00689655 -0.104087 0)"
          />
        </pattern>
        <image
          id="image0_1110_4135"
          width="473"
          height="145"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export default AppStoreBtn;
