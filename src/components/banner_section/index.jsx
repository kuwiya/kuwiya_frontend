import React from "react";
import images from "../../constants/images";
import Button from "../button";

const BannerSection = () => {
  return (
    <div
      className="xl:h-[400px] md:h-[300px] xl:mx-40 mx-10 mb-10 mt-32 lg:mx-20 flex items-center justify-center rounded-[20px] bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: "url('/banner_bg.png')" }}
    >
      <div className="flex justify-center py-8 md:px-16 lg:px-32">
        <div className="flex flex-col justify-center items-center gap-2 md:gap-4">
          <span className="uppercase text-center text-primary font-semibold md:text-3xl xl:text-[40px] xl:leading-[3rem] xl:pb-10 ">
            SUBSCRIBE & GET EXCLUSIVE DISCOUNTS
          </span>
          <input
            type="text"
            placeholder="enter your mail"
            name="email"
            className="md:text-sm xl:text-base text-xs font-work-sans font-medium outline-none bg-primary rounded-[20px] px-4 md:px-8 py-2 md:py-4 w-[70%] xl:w-[80%] md:w-[60%] uppercase placeholder-slate-700"
          />
          <div className="md:my-2">
            <Button
              children="subscribe"
              border={"none"}
              className={
                "uppercase font-work-sans text-sm md:text-base rounded-[10px] w-auto md:w-fit text-center hover:scale-105 transition-all font-medium"
              }
              padding={"10px 35px"}
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
