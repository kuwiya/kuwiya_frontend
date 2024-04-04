import React from "react";
import { mission0, mission1, mission2 } from "../../../../constants/images";

const Card = ({ mission, vision, text, title }) => {
  return (
    <div className="flex justify-between gap-6 py-24">
      <div className={`flex flex-col gap-3 w-[50%] ${vision && "order-last"}`}>
        <span className="uppercase font-bold text-[32px]">{title}</span>
        <span className="font-normal text-xl">{text}</span>
      </div>
      {vision && (
        <img
          src={mission0}
          alt="mission_image"
          className={`w-[50%] ${vision && "order-first"}`}
        />
      )}
      {mission && (
        <div className="flex flex-col gap-4 w-[50%]">
          <div className="flex items-center gap-5">
            <img src={mission0} alt="mission_image" className="w-[45%]" />
            <img src={mission1} alt="mission_image" className="w-[45%]" />
          </div>
            <img src={mission2} alt="mission_image" className="w-full" />
        </div>
      )}
    </div>
  );
};

export default Card;
