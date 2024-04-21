import React from "react";
import { mission0, mission1, mission2 } from "../../../../constants/images";

const Card = ({ mission, vision, text, title }) => {
  return (
    <div className="flex flex-col items-start md:flex-row md:justify-between gap-6 py-8 md:py-24 text-[#00000080]">
      <div className={`flex flex-col gap-3 w-full ${vision && "order-last"}`}>
        <span className="uppercase font-bold text-xl md:text-start text-center md:text-[32px] text-[#000000]">
          {title}
        </span>
        <span className="font-normal text-center md:text-start text-base lg:text-xl">
          {text}
        </span>
      </div>
      {vision && (
        <img
          src={mission0}
          alt="mission_image"
          className={`md:max-w-[100%] w-full ${
            vision && "md:order-first order-last"
          }`}
        />
      )}
      {mission && (
        <>
          <div className="flex flex-col gap-4 w-[100%] md:flex">
            <div className="flex items-center max-w-full gap-5 md:gap-[10px] lg:gap-5">
              <img
                src={mission0}
                alt="mission_image"
                className="md:max-w-[45%] w-full max-w-[44%]"
              />
              <img
                src={mission1}
                alt="mission_image"
                className="md:max-w-[45%] w-full max-w-[44%]"
              />
            </div>
            <img
              src={mission2}
              alt="mission_image"
              className="max-w-full md:max-w-[100%]"
            />
          </div>
          {/* <div className="md:hidden flex flex-col">
           <img src={mission0} alt="mission_image" className="md:w-[45%]" />
            <img src={mission1} alt="mission_image" className="md:w-[45%]" />
            <img src={mission2} alt="mission_image" className="max-w-auto" />
        </div> */}
        </>
      )}
    </div>
  );
};

export default Card;
