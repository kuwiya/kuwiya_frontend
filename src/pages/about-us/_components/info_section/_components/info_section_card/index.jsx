import React from "react";
import { InfoDetails } from "../../../../../../constants";
import { NavLink } from "react-router-dom";
import { Button } from "../../../../../../components/ui";

const InfoSectionCard = () => {
  return (
    <div className="mx-6 md:mx-10 py-3">
      <div className="flex md:flex-row md:pl-[32rem] lg:p-0 no-scrollbar py-4 overflow-x-scroll lg:overflow-visible md:justify-around items-center gap-12 md:gap-12 md:py-6 w-[113%] md:ml-0 md:w-full">
        {InfoDetails.map((info) => (
          <div
            className="flex items-center flex-col min-w-[80%] md:min-w-[330px] lg:min-w-[380px] lg:p-10 shadow-xl md:shadow-lg hover:scale-105 hover:cursor-pointer transition-all ease-in-out lg:w-[380px] md:h-[450px] rounded-[20px] p-10 gap-10"
            key={info.id}
          >
            <img
              src={info.image}
              alt={info.title}
              className="w-[100px] lg:w-auto"
            />
            <div className="flex flex-col gap-2 items-center">
              <span className="uppercase font-semibold font-work-sans text-xl md:text-2xl">
                {info.title}
              </span>
              <span className="font-normal text-sm md:text-base">
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
