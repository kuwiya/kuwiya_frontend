import React from 'react';
import images from '../../constants/images';
import Button from '../button';

const BannerSection = () => {
  return (
    <div
      className="md:mx-40 mx-10 my-10 flex items-center justify-center h-[400px] md:h-[500px] rounded-[20px] bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: "url('/banner_bg.png')" }}
    >
      <div className="flex md:flex-row flex-col items-center justify-center md:px-20 px-10 my-0 w-full gap-4 md:gap-0">
       
        <div className="w-full md:w-[50%] flex flex-col justify-center items-center gap-2 md:gap-4">
          <span className="uppercase text-center text-primary font-semibold md:text-xl xl:text-[40px] xl:leading-[3rem] xl:pb-10 ">
          SUBSCRIBE & GET EXCLUSIVE DISCOUNTS
          </span>
          <input
            type="text"
            placeholder="enter your mail"
            name="email"
            className="md:text-sm xl:text-base text-xs font-work-sans font-medium outline-none bg-primary rounded-[20px] px-4 md:px-12 py-2 xl:py-6 w-[70%] xl:w-[80%] md:w-auto uppercase placeholder-slate-700"
          />
          <div className="md:my-2">
            <Button
              children="subscribe"
              border={'none'}
              className={
                'uppercase font-work-sans text-sm md:text-base rounded-[10px] w-auto md:w-fit text-center hover:scale-105 transition-all font-medium'
              }
              padding={'10px 35px'}
              textColor={'#ffffff'}
              backgroundColor={'#000000'}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
