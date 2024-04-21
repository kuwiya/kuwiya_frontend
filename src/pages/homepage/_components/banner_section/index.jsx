import React from "react";
import { Button } from "../../../../components/ui";

const BannerSection = () => {
  return (
    <div
      className="xl:h-[400px] md:h-[300px] mx-6 md:mx-16 lg:mx-[136px] mb-10 md:mt-32 flex items-center justify-center rounded-[20px] bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: "url('/banner_bg.png')" }}
    >
      <div className="flex justify-center py-8">
        <div className="flex flex-col justify-center items-center gap-6 md:gap-4">
          <span className="uppercase text-center text-primary font-semibold md:text-3xl xl:text-[40px] xl:leading-[3rem] xl:pb-10 ">
            SUBSCRIBE & GET EXCLUSIVE DISCOUNTS
          </span>
          <input
            type="text"
            placeholder="enter your mail"
            name="email"
            className="md:text-sm xl:text-base text-xs font-work-sans font-medium outline-none bg-primary rounded-[20px] px-6 md:px-8 py-2 md:py-4 w-[70%] xl:w-[80%] md:w-[60%] placeholder:uppercase placeholder-slate-700"
          />
          <div className="md:my-2">
            <Button
              children="subscribe"
              border={"none"}
              className={
                "uppercase font-work-sans text-sm md:text-base rounded-[10px] text-center hover:scale-105 transition-all font-medium"
              }
              // padding={"10px 35px"}
              textColor={"#ffffff"}
              backgroundColor={"#000000"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
