import React from "react";
import { dropdown } from "../../../../constants/images";

const FAQS = () => {
  return (
    <div className="py-2 text-center flex flex-col lg:mt-28">
      <div className="flex flex-col  md:pb-4 md:space-y-2">
        <span className="uppercase font-bold text-[26px] md:text-[28px]">
          FAQS
        </span>
        <span className="text-sm py-4 md:text-base font-normal font-work-sans">
          Lorem ipsum dolor sit amet consectetur. Cras quisque ultrices arcu
          blandit tempor facilisi tellus.
        </span>
      </div>

      <div className="m-2 space-y-2">
        <details class="group">
          <summary class="flex cursor-pointer list-none items-center md:p-8 p-4 justify-between font-medium bg-[#F8A434]">
            <span className="text-primary md:text-[18px] font-medium text-left w-full">
              Lorem ipsum dolor sit amet consectetur. Cras quisque ultrices arcu
              blandit tempor facilisi tellus.
            </span>

            <img
              src={dropdown}
              className="h-2 w-3 transition-all ease-out duration-500 group-open:-rotate-180"
            />
          </summary>
          <p class="group-open:animate-fade_in bg-[#af7222] md:text-base text-sm  md:px-8 px-4 p-3 text-start text-primary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </details>
        <details class="group">
          <summary class="flex cursor-pointer list-none items-center md:p-8 p-4 justify-between font-medium bg-[#F8A434]">
            <span className="text-primary md:text-[18px] font-medium text-left w-full">
              Lorem ipsum dolor sit amet consectetur. Cras quisque ultrices arcu
              blandit tempor facilisi tellus.
            </span>

            <img
              src={dropdown}
              className="h-2 w-3 transition-all duration-500 group-open:-rotate-180"
            />
          </summary>
          <p class="group-open:animate-fade_in bg-[#af7222] md:text-base text-sm  md:px-8 px-4 p-3 text-start text-primary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </details>
        <details class="group">
          <summary class="flex cursor-pointer list-none items-center md:p-8 p-4 justify-between font-medium bg-[#F8A434]">
            <span className="text-primary md:text-[18px] font-medium text-left w-full">
              Lorem ipsum dolor sit amet consectetur. Cras quisque ultrices arcu
              blandit tempor facilisi tellus.
            </span>

            <img
              src={dropdown}
              className="h-2 w-3 transition-all duration-500 group-open:-rotate-180"
            />
          </summary>
          <p class="group-open:animate-fade_in bg-[#af7222] md:text-base text-sm  md:px-8 px-4 p-3 text-start text-primary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </details>
      </div>
    </div>
  );
};

export default FAQS;
