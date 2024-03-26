import React from "react";
import FeaturedCard from "./_components/featured_card";
import { Button } from "../../../../components/ui";

const FeaturedSection = () => {
  return (
    <div className="py-24 text-center flex flex-col">
      <div className="flex flex-col pb-10 md:pb-20 px-8 md:space-y-2 space-y-1">
        <span className="uppercase font-bold text-base md:text-[28px]">
          featured deals
        </span>
        <span className="text-sm md:text-base font-normal font-work-sans">
          Discover some of our top picks for great dining deals in your area!
        </span>
      </div>
      <FeaturedCard />
      <div className="my-10">
        <Button
          children="view all"
          className={"uppercase text-center hover:scale-105 transition-all "}
          padding={"10px 30px"}
        />
      </div>
    </div>
  );
};

export default FeaturedSection;