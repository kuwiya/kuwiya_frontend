import React from "react";
import { Link } from "react-router-dom";
import { Clock, Star } from "../../../pages/marketplace/_components";

const CouponCard = ({ detail, claim }) => {
  return (
    <Link to={`/coupon/${detail.id}`} className="flex relative">
    <div className="w-8 h-7 md:w-10 md:h-10 rounded-full bg-white absolute top-[50%] -left-5 -translate-y-[50%]"></div>
    <div className="flex w-auto">
      <div
      style={{ background: claim && "#000" }}
       className={` flex ${
        detail && "lg:flex-[70%] gap-2 lg:gap-4"
      } items-center rounded-l-xl ${
        !claim
          ? "bg-gradient-to-r from-[#FBD199] from-[0%] to-[#E18000] to-[100%] text-black"
          : "text-primary gap-4"
      } `}
      >
       <div
            className={`lg:ml-8 ml-6 text-2xl ${
              detail && "lg:text-xl text-[11px]"
            } font-semibold text-[#ffffff] flex flex-col gap-0 lg:gap-2 justify-between items-center border-[1.5px] border-dashed border-[#000000] lg:rounded-xl ${
              detail && "rounded-2xl p-1 lg:py-5"
            } py-2`}
          >
          <h1 className="-rotate-90">{detail.couponNum}</h1>
          <span
            className={`${claim ? "bg-primary" : "bg-[#000000]"} h-2 w-0.5`}
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
               className={`${
                    claim ? "bg-primary h-5 w-[0.1rem]" : "bg-[#000000]"
                  } ${detail && "h-3 w-[0.1rem]"}`}
              ></p>
              <p className="">
                ₦{detail.priceOff}{" "}
                <sup className="text-[7px] lg:text-[8px] font-medium text-white uppercase">
                  off
                </sup>
              </p>
            </div>
            <p
              className={`${
                claim ? "text-primary" : "text-[#00000038]"
              } font-medium ${detail && "lg:text-[13px] text-[7px]"}`}
            >
              {detail.mealInfo}
            </p>
            <div className="flex gap-3 md:items-center text-[11px] lg:text-sm">
              <p className="flex gap-1 items-center md:justify-between">
                <span className="hidden lg:block">
                <Clock fillColor={`${claim ? "#ffffff" : "#292D32"}`} />
                </span>
                <span className="lg:hidden">
                <Clock
                      fillColor={`${claim ? "#ffffff" : "#292D32"}`}
                      width={6}
                      height={6}
                    />
                </span>
                <span className="whitespace-nowrap">{detail.duration}</span>
              </p>
              <p className="flex gap-1 items-center">
                <span className="hidden lg:block">
                <Star fillColor={`${claim ? "#ffffff" : "#292D32"}`} />
                </span>
                <span className="lg:hidden">
                  {" "}
                  <Star
                      fillColor={`${claim ? "#ffffff" : "#292D32"}`}
                      width={6}
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
      <div className=" relative">
        <img
          src={detail.mealImage}
          className="rounded-r-xl h-full object-cover"
          alt=""
        />
       <span
            className={`absolute top-[10px] left-0 ${
              detail && "lg:text-[13px] text-[5px]"
            } ${
              claim ? "bg-[#000000]" : "bg-[#3187FA]"
            } text-white w-fit lg:p-3 p-2 lg:pr-8 pr-5 rounded-r-2xl mt-2 uppercase`}
          >
            {!claim && "₦"} {detail.priceOff}
            {claim && "%"} off
          </span>
      </div>
    </div>
    <div className="w-8 h-7 md:w-10 md:h-10 rounded-full bg-white absolute top-[50%] -right-5 -translate-y-[50%]"></div>
  </Link>
  );
};

export default CouponCard;
