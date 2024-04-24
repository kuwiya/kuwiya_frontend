import React from "react";
import { helplocation, mail, phone } from "../../../../constants/images";

const Contact = () => {
  return (
    <>
    <div className="lg:px-24 px-6  flex flex-col items-center justify-center py-10 pb-20">
      <span className="font-semibold text-2xl py-10 text-center">
        Talk to our team, we are here to help{" "}
      </span>
      <div className="flex md:flex-row flex-col justify-between gap-8 items-center">
        <div className="flex flex-row md:flex-col md:h-[472px] h-[100px]  shadow-xl hover:scale-105 transition-all ease-in">
          <div className="bg-[#F0F0F0] w-full md:h-[198px] h-[100px] flex justify-center items-center">
            <img src={helplocation} alt="" className="w-[20%] md:w-[10%]" />
          </div>

          <div className="flex flex-col md:px-8 px-3 md:gap-4 md:pt-4 pt-2">
            <span className="uppercase font-semibold text-xs md:text-[20px]">address</span>
            <span className="md:text-sm text-xs lg:text-base">office address</span>
            <span className="md:text-sm text-xs lg:text-base">
              lorem Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Culpa quaerat
            </span>
          </div>
        </div>
        <div className="flex flex-row md:flex-col md:h-[472px] h-[100px]  shadow-xl hover:scale-105 transition-all ease-in">
          <div className="bg-[#F0F0F0] w-full md:h-[198px] h-[100px] flex justify-center items-center">
            <img src={phone} alt="" className="w-[20%] md:w-[10%]" />
          </div>

          <div className="flex flex-col md:px-8 px-3 md:gap-4 md:pt-4 pt-2">
            <span className="uppercase font-semibold text-xs md:text-[20px]">call us</span>
            <span className="md:text-sm text-xs lg:text-base">+234156677715</span>
            <span className="md:text-sm text-xs lg:text-base">
              lorem Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Culpa quaerat
            </span>
          </div>
        </div>
        <div className="flex flex-row md:flex-col md:h-[472px] h-[100px]  shadow-xl hover:scale-105 transition-all ease-in">
          <div className="bg-[#F0F0F0] w-full md:h-[198px] h-[100px] flex justify-center items-center">
            <img src={mail} alt="" className="w-[20%] md:w-[10%]" />
          </div>

          <div className="flex flex-col md:px-8 px-3 md:gap-4 md:pt-4 pt-2">
            <span className="uppercase font-semibold text-xs md:text-[20px]">mail</span>
            <span className="md:text-sm text-xs lg:text-base">lorem@gmail.com</span>
            <span className="md:text-sm text-xs lg:text-base">
              lorem Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Culpa quaerat
            </span>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Contact;
