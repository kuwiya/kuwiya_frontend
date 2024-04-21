import React from "react";
import FeaturedCard from "./_components/featured_card";
import { Button } from "../../../../components/ui";
import { Link } from "react-router-dom";

const FeaturedSection = () => {
  return (
    <div className="lg:py-24 py-4 pt-8 text-center flex flex-col">
      <div className="flex flex-col lg:pb-20 px-6 md:px-8 md:space-y-2 space-y-1">
        <span className="uppercase font-bold text-[26px] md:text-[28px] lg:text-[32px]">
          featured deals
        </span>
        <span className="text-sm md:text-base lg:text-lg font-normal font-work-sans">
          Discover some of our top picks for great dining deals in your area!
        </span>
      </div>
      <FeaturedCard />
      <div className="my-10">
        <Link to="/marketplace">
          <Button
            children="view all"
            className={"uppercase text-center hover:scale-105 transition-all "}
            // padding={"10px 30px"}
          />
        </Link>
      </div>
    </div>
  );
};

export default FeaturedSection;
