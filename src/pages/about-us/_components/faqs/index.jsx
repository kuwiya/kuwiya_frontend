import React from "react";
import { dropdown } from "../../../../constants/images";

const FAQS = () => {
  return (
    <div className="py-2 text-center flex flex-col mt-28">
      <div className="flex flex-col pb-10 md:pb-4 px-8 md:space-y-2 space-y-1">
        <span className="uppercase font-bold text-base md:text-[28px]">
          FAQS
        </span>
        <span className="text-sm md:text-base font-normal font-work-sans">
          Lorem ipsum dolor sit amet consectetur. Cras quisque ultrices arcu
          blandit tempor facilisi tellus.
        </span>
      </div>

      <div className="m-2 space-y-2">
        <div className="group flex flex-col rounded-lg text-white" tabindex="1">
          <div className="flex cursor-pointer items-center p-8 justify-between bg-[#F8A434]">
            <span className="text-primary text-[18px] font-medium text-left w-full">
              Lorem ipsum dolor sit amet consectetur. Cras quisque ultrices arcu
              blandit tempor facilisi tellus.
            </span>
            <img
              src={dropdown}
              className="h-2 w-3 transition-all duration-500 group-focus:-rotate-180"
            />
          </div>
          <div className="bg-[#af7222] px-8 p-3 invisible h-auto max-h-0 text-start opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </div>
        </div>

        <div className="group flex flex-col rounded-lg text-white" tabindex="2">
          <div className="flex cursor-pointer items-center p-8 justify-between bg-[#F8A434]">
            <span className="text-primary text-[18px] font-medium text-left w-full">
              Lorem ipsum dolor sit amet consectetur. Cras quisque ultrices arcu
              blandit tempor facilisi tellus.
            </span>
            <img
              src={dropdown}
              className="h-2 w-3 transition-all duration-500 group-focus:-rotate-180"
            />
          </div>
          <div className="bg-[#af7222] px-8 p-3 invisible h-auto max-h-0 text-start opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </div>
        </div>

        <div className="group flex flex-col rounded-lg text-white" tabindex="3">
          <div className="flex cursor-pointer items-center p-8 justify-between bg-[#F8A434]">
            <span className="text-primary text-[18px] font-medium text-left w-full">
              Lorem ipsum dolor sit amet consectetur. Cras quisque ultrices arcu
              blandit tempor facilisi tellus.
            </span>
            <img
              src={dropdown}
              class="h-2 w-3 transition-all duration-500 group-focus:-rotate-180"
            />
          </div>
          <div className="bg-[#af7222] px-8 p-3 invisible h-auto max-h-0 text-start opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQS;
