import React from "react";
import InfoSectionCard from "./_components/info_section_card";

const InfoSection = () => {
  return (
    <div className="py-2 text-center flex flex-col mt-8 md:mt-20">
      <div className="flex flex-col w-full mx-auto md:w-full md:pb-10 md:pb-4 px-3 md:px-8 md:space-y-2 space-y-1">
        <span className="uppercase font-bold text-[26px] md:text-[28px] lg:text-[32px]">
          how does it work?
        </span>
        <span className="text-sm md:text-base lg:text-lg font-normal font-work-sans">
          Lorem ipsum dolor sit amet consectetur. Cras quisque ultrices arcu
          blandit tempor facilisi tellus.
        </span>
      </div>
      <InfoSectionCard />
    </div>
  );
};

export default InfoSection;
