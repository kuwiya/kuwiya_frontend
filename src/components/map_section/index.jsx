import React from "react";
import Map from "./_components/map";
import Button from "../button";

const MapSection = () => {
  const selectArrow = `
      select{
        -webkit-appearance: none;
       -moz-appearance: none;
            appearance: none;
      
        background-position: calc(100% - .9rem);
        background-image: url(/dropdown.png);
        background-repeat: no-repeat;
        // width: 20px;  
      
      }     
      `;

  return (
    <>
      <div className="md:py-24 py-16 md:px-[9rem] px-6  flex-col">
        <div className="flex flex-col pb-10 md:pb-4  md:space-y-2 space-y-1">
          <span className="uppercase font-bold text-base md:text-[28px]">
            near me
          </span>
          <span className="text-sm md:text-base font-normal font-work-sans">
            Featured restaurants around you.
          </span>
        </div>
        <div className="relative">
          <Map />
          <div className="absolute top-5 left-[30%] md:left-[40%]">
            <select
              name="near_location"
              id="near_location"
              className="outline-none font-work-sans font-medium text-[10px] md:text-sm text-black bg-white opacity-100 rounded-[20px] w-[120%] md:w-full mr-0 md:mr-10 px-4 md:px-10 mx-0 py-2 placeholder-slate-700"
            >
              <option value="ikoyi" className="rounded-10">
                Ikoyi, Lagos, Nigeria.
              </option>
              <option value="bariga">Bariga, Lagos</option>
            </select>
          </div>
        </div>
        <div className="flex items-center justify-center py-10">
          <Button
            children="view all"
            className={
              "uppercase w-auto md:w-fit text-center hover:scale-105 transition-all font-medium"
            }
            padding={"10px 35px"}
          />
        </div>
      </div>
      <style>{selectArrow}</style>
    </>
  );
};

export default MapSection;
