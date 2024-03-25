import React from "react";
import { couponMarketplace } from "../../../constants";
import { Star, Clock } from "./index";
import { Link } from "react-router-dom";
import { Button } from "../../../components/ui";

const CouponCard = () => {
  return (
    <section className="px-10 my-16 mb-20 space-y-5">
      <h1 className="text-2xl font-semibold text-[#000000]">Coupon</h1>
      <div className="grid lg:grid-cols-2 gap-6">
        {couponMarketplace.map((detail) => (
          <div key={detail.id} className="flex relative">
            <div className="w-10 h-10 rounded-full bg-white absolute top-[50%] -left-5 -translate-y-[50%]"></div>
            <div className="flex">
              <div className="flex-[70%] flex gap-4 items-center rounded-l-xl text-[#000000] bg-gradient-to-r from-[#FBD199] from-[0%] to-[#E18000] to-[100%]">
                <div className="ml-10 text-2xl font-semibold text-[#000000] flex flex-col gap-2 justify-between items-center border-[1.5px] border-dashed border-[#000000] rounded-xl py-4">
                  <h1 className="-rotate-90">{detail.couponNum}</h1>
                  <span className="bg-[#000000] h-2 w-0.5"></span>
                  <h1 className="-rotate-90">{detail.couponCode}</h1>
                </div>
                <span className="h-full border-[1px] border-white border-dashed"></span>
                <div className="p-5 space-y-2">
                  <p className=" flex gap-2 items-center">
                    <img src={detail.restLogo} alt="" />{" "}
                    <span>{detail.restName}</span>
                  </p>
                  <h2 className="text-xl font-medium">{detail.mealName}</h2>
                  <div className="space-y-1">
                    <div className="flex gap-3 items-center">
                      <p className="">₦{detail.originalPrice}</p>
                      <p className="bg-[#000000] h-5 w-0.5"></p>
                      <p className="">
                        {detail.priceOff}{" "}
                        <sup className="text-[9px] font-medium text-white uppercase">
                          off
                        </sup>
                      </p>
                    </div>
                    <p className="text-[#00000038] font-medium">
                      {detail.mealInfo}
                    </p>
                    <div className="flex gap-3 tems-center">
                      <p className="flex gap-1 items-center justify-between">
                        <span>
                          <Clock />
                        </span>
                        <span>{detail.duration}</span>
                      </p>
                      <p className="flex gap-1 items-center">
                        <span>
                          <Star />
                        </span>
                        <span>{detail.rating}</span>
                        <span>({detail.reviewCount})</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-[30%] relative">
                <img
                  src={detail.mealImage}
                  className="rounded-r-xl h-full object-cover"
                  alt=""
                />
                <span className="absolute top-0 left-0 bg-[#3187FA] text-white w-fit p-3 pr-8 rounded-r-2xl mt-2 uppercase">
                  #{detail.priceOff} off
                </span>
              </div>
            </div>
            <div className="w-10 h-10 rounded-full bg-white absolute top-[50%] -right-5 -translate-y-[50%]"></div>
          </div>
        ))}
      </div>
      <Link to="/see-more" className="flex justify-center">
        <Button
          children="See More"
          backgroundColor="#F8A434"
          textColor="#000000"
          padding="8px 15px"
          className="font-medium mt-3"
          borderRadius="10px"
        />
      </Link>
    </section>
  );
};

export default CouponCard;
