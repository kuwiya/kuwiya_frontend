import React, { useState } from "react";
import { Button } from "../ui";
import { CloseIcon } from "../../assets/icons";

const UserSubscriptionPopUp = ({ setIsOpen }) => {
  return (
    <main className="bg-transparent md:px-10 py-24">
      <section className="flex flex-col gap-10 items-center bg-[#f5f5f5] z-[999] text-center shadow-md relative rounded-[20px] text-[#000000] font-work-sans animate-slide_up delay-200 duration-1000 ease-in-out">
        <div className="mt-10">
          <h1 className="text-[40px] md:text-[30px] text-xl font-semibold uppercase md:mb-3">
            subscribe
          </h1>
          <p className="lg:text-2xl md:text-xl font-normal lg:px-36 md:px-16 px-3">
            Subscribe to get access to top discounts & coupons delivered to your
            inbox
          </p>
        </div>
        <form className="space-y-8 mb-16 md:mb-28 w-[90%] md:w-[60%]">
          <div className="px-6 py-3 border-[1px] border-[#10101099] rounded-[5px] placeholder:text-lg placeholder:text-[#00000066] font-medium">
            <input
              type="email"
              className="outline-none bg-transparent w-full"
              placeholder="ENTER YOUR MAIL"
            />
          </div>
          <Button
            type="submit"
            children="subscribe"
            borderRadius={"5px"}
            // padding={"7px 35px"}
            className={
              "lg:text-base md:text-sm uppercase font-work-sans font-medium hover:scale-90 transition-all delay-200 ease-linear"
            }
          />
        </form>
        <div
          className={`absolute top-6 right-6 md:right-14 cursor-pointer hover:scale-110 transition-all delay-200 ease-linear`}
          onClick={() => setIsOpen(false)}
        >
          <CloseIcon />
        </div>
      </section>
    </main>
  );
};

export default UserSubscriptionPopUp;
