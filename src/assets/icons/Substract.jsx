import React from "react";

const SubtractIcon = ({ width, height, fillColor }) => {
  return (
    <svg
      width={width || "348"}
      height={height || "110"}
      viewBox="0 0 348 110"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_828_14286)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3 9C3 4.58172 6.58172 1 11 1H337C341.418 1 345 4.58172 345 9V36.5815C344.669 36.5611 344.336 36.5507 344 36.5507C335.163 36.5507 328 43.7142 328 52.5507C328 61.3873 335.163 68.5507 344 68.5507C344.336 68.5507 344.669 68.5404 345 68.52V97C345 101.418 341.418 105 337 105H11C6.58173 105 3 101.418 3 97V68.5507C11.8366 68.5507 19 61.3873 19 52.5507C19 43.7142 11.8366 36.5507 3 36.5507V9Z"
          fill={fillColor || "#F8A434"}
        />
      </g>
      <defs>
        <filter
          id="filter0_d_828_14286"
          x="0"
          y="0"
          width="348"
          height="110"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="1.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_828_14286"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_828_14286"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default SubtractIcon;