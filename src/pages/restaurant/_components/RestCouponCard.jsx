import React from "react";
import { restaurantCoupon } from "../../../constants";
import { Clock } from "../../marketplace/_components";

const RestCouponCard = () => {
  return (
    <div className="flex flex-col gap-6">
      {restaurantCoupon.map((detail) => (
        <div key={detail.id} className="flex relative">
          <div className="w-10 h-10 rounded-full bg-white absolute top-[50%] -left-5 -translate-y-[50%]"></div>
          <div className="flex gap-1 items-center rounded-xl text-[#FFFFFF] bg-black">
            <div className="ml-6">
              <img src={detail.restLogo} width={100} height={100} alt="" />
            </div>
            <span className="h-full border-[1px] border-white border-dashed"></span>
            <div className="p-5 space-y-2">
              <h2 className="text-xl font-medium">
                {detail.discPercentage}% OFF
              </h2>
              <div className="flex gap-1 items-center">
                <p className="font-medium">{detail.restName}</p>
                <p className="bg-[#FFFFFF] h-0.5 w-2"></p>
                <p className="">{detail.restAddress}</p>
              </div>
              <p className="flex gap-1 items-center">
                <span>
                  <Clock fillColor={"#FFFFFF"} />
                </span>
                <span>{detail.duration}</span>
              </p>
            </div>
          </div>
          <div className="w-10 h-10 rounded-full bg-white absolute top-[50%] -right-5 -translate-y-[50%]"></div>
        </div>
      ))}
    </div>
  );
};

export default RestCouponCard;
