import React from "react";
import { InfoDetails } from "../../../../../../constants";
import { NavLink } from "react-router-dom";
import { Button } from "../../../../../../components/ui";

const InfoSectionCard = () => {
  return (
    <div className="mx-3 md:mx-10 py-3">
      <div className="flex md:flex-row pl-[4rem] md:pl-[32rem] lg:p-0 no-scrollbar py-4 overflow-x-scroll lg:overflow-hidden md:justify-around items-center gap-10 md:gap-12 md:py-6 w-[100%] md:w-full">
        {InfoDetails.map((info) => (
          <div
            className="bg-[#FDFCFB] min-w-[218.82px] h-[255.6px] flex md:py-10 items-center flex-col md:min-w-[330px] lg:min-w-[380px]  p-5 lg:p-10 shadow-xl md:shadow-lg hover:scale-105 hover:cursor-pointer transition-all ease-in-out lg:w-[380px] md:h-[450px] rounded-[20px] gap-5 lg:gap-10"
            key={info.id}
          >
            <img
              src={info.image}
              alt={info.title}
              className="w-[70px] h-[75px] md:w-auto md:h-auto"
            />
            <div className="flex flex-col gap-2 items-center">
              <span className="uppercase font-semibold font-work-sans md:text-2xl">
                {info.title}
              </span>
              <span className="font-normal text-[11px] md:text-base">
                {info.content}
              </span>
            </div>
          </div>
        ))}
      </div>
      <NavLink to="/about-us" className="flex justify-center py-6">
        <Button
          children="learn more"
          className={
            "uppercase text-center hover:scale-105 transition-all font-medium"
          }
          padding={"10px 30px"}
        />
      </NavLink>
    </div>
  );
};

export default InfoSectionCard;
