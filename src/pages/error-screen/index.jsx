import React from "react";
import { Button, Navbar } from "../../components/ui";
import errorImg from "../../assets/images/Sad heart.png";

const Error = () => {
  return (
    <>
      <Navbar scrolling />
      <main className="flex flex-col md:flex-row items-center md:items-start font-work-sans text-[#000000] pt-20 pb-14 md:pt-28 md:pb-20 px-6 md:pl-16 md:pr-7 lg:pl-[136px] lg:pr-[90px] space-y-7">
        <section className="md:hidden flex-[45%]">
          <img src={errorImg} alt="" />
        </section>

        <section className="flex-[55%] text-center md:text-justify flex flex-col gap-8">
          <h1 className="text-2xl md:text-[30px] lg:text-[40px] font-semibold">
            We're sorry.
          </h1>
          <p className="text-base md:text-xl lg:text-[28px] lg:mt-2 font-normal font-lato text-[#00000099]">
            Kuwiya is not available in your location, but we are working to
            ensure we get to you asap.
          </p>
          <p className="text-sm md:text-base lg:text-[19px] lg:whitespace-nowrap font-normal font-lato text-darkyellow">
            Join the waitlist and be the first to know when we get to your
            location.
          </p>
          <div className="lg:mt-10">
            <Button children="Join The Waitlist" className="w-fit" />
          </div>
        </section>

        <section className="hidden md:block flex-[45%]">
          <img src={errorImg} alt="" />
        </section>
      </main>
    </>
  );
};

export default Error;
