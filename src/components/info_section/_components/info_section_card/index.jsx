import React from 'react';
import { InfoDetails } from '../../../../constants';

const InfoSectionCard = () => {
  return (
    <div className="flex md:flex-row flex-col justify-around items-center md:px-10 gap-6 md:py-6">
      {InfoDetails.map((info) => (
        <div className="flex items-center flex-col p-10 shadow-lg hover:scale-105 hover:cursor-pointer transition-all ease-in-out w-[380px] h-[450px] rounded-[20px] gap-10" key={info.id}>
          <img src={info.image} alt={info.title} />
          <div className="flex flex-col gap-2 items-center">
            <span className="uppercase font-semibold font-work-sans text-xl md:text-2xl">
              {info.title}
            </span>
            <span className="font-normal text-sm md:text-base">{info.content}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InfoSectionCard;
