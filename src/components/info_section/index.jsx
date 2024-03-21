import React from 'react';
import InfoSectionCard from './_components/info_section_card';

const InfoSection = () => {
  return (
    <div className="py-2 text-center flex flex-col">
      <div className="flex flex-col pb-10 md:pb-4 px-8 md:space-y-2 space-y-1">
        <span className="uppercase font-bold text-base md:text-[28px]">
          how does it work?
        </span>
        <span className="text-sm md:text-base font-normal font-work-sans">
          Lorem ipsum dolor sit amet consectetur. Cras quisque ultrices arcu
          blandit tempor facilisi tellus.
        </span>
      </div>
      <InfoSectionCard />
    </div>
  );
};

export default InfoSection;
