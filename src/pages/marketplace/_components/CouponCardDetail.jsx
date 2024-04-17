import React from "react";
import { Link } from "react-router-dom";
import Clock from "./Clock";
import Star from "./Star";
import { useHref } from "react-router-dom";

const CouponCardDetail = ({ detail }) => {
  const pathName = useHref();

  return (
    <Link to={`/coupon/${detail.id}`} className="flex relative">
      <div className="w-8 h-7 md:w-10 md:h-10 rounded-full bg-white absolute top-[50%] -left-5 -translate-y-[50%]"></div>
      <div className="flex w-auto">
        <div
          className={`flex-[70%] flex gap-2 lg:gap-4 items-center rounded-l-xl text-[#000000] bg-gradient-to-r from-[#FBD199] from-[0%] to-[#E18000] to-[100%] ${
            pathName.includes("/restaurants") &&
            "bg-gradient-to-r from-[#101010] from-[0%] to-[#101010] to-[100%] text-white"
          }`}
        >
          <div
            className={`ml-7 lg:ml-8 lg:text-xl font-semibold text-[#000000] flex flex-col gap-1 lg:gap-2 justify-between items-center border-[1.5px] border-dashed border-[#000000] rounded-xl py-4 px-1 lg:px-0 ${
              pathName.includes("/restaurants") && "border-[#FFFFFF] text-white"
            }`}
          >
            <h1 className="-rotate-90">{detail.couponNum}</h1>
            <span
              className={`bg-[#000000] h-2 w-0.5 ${
                pathName.includes("/restaurants") && "bg-[#FFFFFF]"
              }`}
            ></span>
            <h1 className="-rotate-90">{detail.couponCode}</h1>
          </div>
          <span className="h-full border-[1px] border-white border-dashed"></span>
          <div className="py-3 space-y-0">
            <p className="flex gap-2 items-center text-[11px] lg:text-sm">
              <img
                src={detail.restLogo}
                alt=""
                className="w-4 md:w-[18px] lg:w-[30px]"
              />{" "}
              <span>{detail.restName}</span>
            </p>
            <h2 className="text-[13px] lg:text-base font-medium">
              {detail.mealName}
            </h2>
            <div className="space-y-1 text-[11px] lg:text-sm">
              <div className="flex gap-3 items-center">
                <p className="">₦{detail.originalPrice}</p>
                <p
                  className={`bg-[#000000] h-3 lg:h-5 w-[1px] ${
                    pathName.includes("/restaurants") && "bg-[#FFFFFF]"
                  }`}
                ></p>
                <p className="">
                  ₦{detail.priceOff}{" "}
                  <sup className="text-[7px] lg:text-[8px] font-medium text-white uppercase">
                    off
                  </sup>
                </p>
              </div>
              <p
                className={`text-[#00000038] text-[10px] lg:text-sm font-medium ${
                  pathName.includes("/restaurants") && "text-white"
                }`}
              >
                {detail.mealInfo}
              </p>
              <div className="flex gap-3 md:items-center text-[11px] lg:text-sm">
                <p className="flex gap-1 items-center md:justify-between">
                  <span className="hidden lg:block">
                    <Clock
                      fillColor={pathName.includes("/restaurants") && "#FFFFFF"}
                    />
                  </span>
                  <span className="lg:hidden">
                    <Clock
                      fillColor={pathName.includes("/restaurants") && "#FFFFFF"}
                      width={6}
                      height={6}
                    />
                  </span>
                  <span className="whitespace-nowrap">{detail.duration}</span>
                </p>
                <p className="flex gap-1 items-center">
                  <span className="hidden lg:block">
                    <Star
                      fillColor={pathName.includes("/restaurants") && "#FFFFFF"}
                    />
                  </span>
                  <span className="lg:hidden">
                    {" "}
                    <Star
                      fillColor={pathName.includes("/restaurants") && "#FFFFFF"}
                      width={10}
                      height={6}
                    />
                  </span>
                  <span>{detail.rating}</span>
                  <span>({detail.rating_count})</span>
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
          <span
            className={`absolute top-0 left-0 bg-[#3187FA] text-white text-[10px] lg:text-[13px] w-fit p-1 md:p-2 lg:p-3 pr-3 md:pr-5 lg:pr-8 rounded-r-2xl mt-2 uppercase ${
              pathName.includes("/restaurants") && "bg-black"
            }`}
          >
            #{detail.priceOff} off
          </span>
        </div>
      </div>
      <div className="w-8 h-7 md:w-10 md:h-10 rounded-full bg-white absolute top-[50%] -right-5 -translate-y-[50%]"></div>
    </Link>
  );
};

export default CouponCardDetail;