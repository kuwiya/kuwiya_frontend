import React from "react";
import { leftwhite } from "../../../../constants/images";
import {Link} from 'react-router-dom'
import Select from '../select'

const HeroSection = () => {
  return (
    <div>
      <div
        style={{ background: 'linear-gradient(rgba(248, 164,52, 0.9), rgba(248, 163, 52,0.9)), url("/kuwiya_bg.png")' }}
        className="relative w-full lg:h-[32rem] md:h-[25rem] h-[18rem] bg-center bg-cover bg-no-repeat"
      >
        <div className="flex justify-center flex-col lg:h-[120%] md:h-[111%] h-[113%]">
          <Link to='/' className="hidden md:flex lg:pl-24 lg:pb-10 md:pb-6 pl-10 gap-2 items-center">
            <img src={leftwhite} alt="arrow" />
            <span className="text-[#FDFCFB] text-[20px] font-medium lg:uppercase">
              Help Center
            </span>
          </Link>

          <div className="text-[#FDFCFB] flex">
            <div className="flex items-center justify-center w-full gap-4 md:gap-6 flex-col px-6">
              <span className="font-semibold text-2xl  md:text-3xl lg:text-[48px] md:text-[38px]">
                How can we help you?
              </span>
              <span className="md:text-[20px] text-sm font-medium">Send us a message</span>
            <Select />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
