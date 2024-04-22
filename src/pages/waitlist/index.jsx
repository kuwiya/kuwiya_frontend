import React from "react";
import { Button, Navbar } from "../../components/ui";
import waitlist from "../../assets/images/Shopping Fun.png";

const Waitlist = () => {
  return (
    <>
      <Navbar scrolling />
      <main className="flex flex-col md:flex-row items-center font-work-sans text-[#000000] pt-20 pb-14 md:pt-28 md:pb-20 px-6 md:pl-16 md:pr-7 lg:pl-[136px] lg:pr-[90px] space-y-7">
        <section className="md:hidden flex-[45%]">
          <img
            src={waitlist}
            alt=""
            // className="md:w-[439px] md:h-[412px] lg:w-[539.1px] lg:h-[512px]"
          />
        </section>

        <section className="flex-[55%] text-center md:text-justify flex flex-col gap-8">
          <h1 className="text-2xl md:text-[30px] lg:text-[40px] font-semibold">
            Join The Waitlist
          </h1>
          <p className="text-base md:text-xl lg:text-2xl lg:pr-16 lg:mt-2 font-normal text-[#00000099]">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim"
          </p>
          <p className="text-sm md:text-base lg:text-[19px] lg:whitespace-nowrap font-normal text-darkyellow">
            Join the waitlist and be the first to know when we get to your
            location.
          </p>
          <form className="bg-[#FBD199] flex items-center gap-4 px-4 h-[54px] md:h-[65px] justify-between border border-[#FFFFFF] rounded-[10px] lg:mr-16 lg:mt-2">
            <input
              type="email"
              placeholder="Enter Email Address"
              className="outline-none bg-transparent w-[70%] md:w-[60%] lg:w-[70%]"
            />
            <Button
              children="Join Now"
              padding={"0px 0px"}
              className="h-[29px] w-[81px] md:w-[95px] md:h-[36px] text-[13px] md:text-base font-normal"
            />
          </form>
        </section>

        <section className="hidden md:block flex-[45%]">
          <img
            src={waitlist}
            alt=""
            // className="md:w-[439px] md:h-[412px] lg:w-[539.1px] lg:h-[512px]"
          />
        </section>
      </main>
    </>
  );
};

export default Waitlist;
