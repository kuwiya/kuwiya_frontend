import React from "react";
import CouponCard from "./_components/coupon_card";
import { Button } from "../../../../components/ui";
import { Link } from "react-router-dom";

const CouponSection = () => {
  return (
    <div className="py-8 text-center flex flex-col lg:px-[136px] md:px-16 px-6">
      <div className="flex flex-col pb-10 md:pb-20 md:space-y-2 space-y-1">
        <span className="uppercase font-bold text-base md:text-[28px] lg:text-[32px]">
          coupon hot deals
        </span>
        <span className="text-sm md:text-base lg:text-lg font-normal font-work-sans">
          Claim free coupons and save on your next meal.
        </span>
        <CouponCard />
      </div>
      <Link to="/marketplace" className="-mt-10 md:my-2">
        <Button
          children="view all"
          className={
            "uppercase w-auto md:w-fit text-center hover:scale-105 transition-all font-medium"
          }
          padding={"10px 30px"}
        />
      </Link>
    </div>
  );
};

export default CouponSection;
