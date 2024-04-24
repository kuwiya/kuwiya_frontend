import React from "react";
import { Link } from "react-router-dom";
import { Clock, Star } from "../../../pages/marketplace/_components";

const CouponCard = ({ detail }) => {
  return (
    <>
      <div className="hidden lg:block h-[162px]">
        <Link to={`/coupon/${detail?.id}`} className="flex relative">
          <div className="w-8 h-7 md:w-10 md:h-10 rounded-full bg-white absolute top-[50%] -left-5 -translate-y-[50%]"></div>
          <div className="flex w-full h-[162px]">
            <div
              className={`flex-[70%] flex gap-2 lg:gap-4 items-center rounded-l-xl  ${"bg-gradient-to-r from-[#101010] from-[0%] to-[#101010] to-[100%] text-white"}`}
            >
              <div
                className={`ml-7 lg:ml-8 lg:text-xl font-semibold flex flex-col gap-1 lg:gap-2 justify-between items-center border-[1.5px] border-dashed border-[#FFFFFF] text-white rounded-xl py-4 px-1 lg:px-0`}
              >
                <h1 className="-rotate-90">{detail?.coupon}</h1>
              </div>
              <span className="h-full border-[1px] border-white border-dashed"></span>
              <div className="py-3 space-y-0">
                <p className="flex gap-2 items-center text-[11px] lg:text-sm">
                  <img
                    src={detail?.restaurant?.logo}
                    alt=""
                    className="w-4 md:w-[18px] lg:w-[30px]"
                  />{" "}
                  <span className="line-clamp-1">
                    {detail?.restaurant?.name}
                  </span>
                </p>
                <h2 className="text-[13px] lg:text-base font-medium line-clamp-1">
                  {detail?.item?.item}
                </h2>
                <div className="space-y-1 text-[11px] lg:text-sm">
                  <div className="flex gap-3 items-center">
                    <p className="">₦{detail?.coupon_price}</p>
                    <p className={`bg-[#FFFFFF] h-3 lg:h-5 w-[1px]`}></p>
                    <p className="">
                      {parseInt(detail?.percentage_off)}%{" "}
                      <sup className="text-[7px] lg:text-[8px] font-medium text-white uppercase">
                        off
                      </sup>
                    </p>
                  </div>
                  <p
                    className={`text-[#FFFFFF] text-[10px] lg:text-sm font-medium line-clamp-1`}
                  >
                    {detail?.item?.item_description}
                  </p>
                  <div className="space-y-1 text-[11px] lg:text-sm">
                    <p className="flex gap-1 items-center">
                      <span className="hidden lg:block">
                        <Clock fillColor={"#FFFFFF"} />
                      </span>
                      <span className="lg:hidden">
                        <Clock fillColor={"#FFFFFF"} width={6} height={6} />
                      </span>
                      <span className="whitespace-nowrap">
                        {detail?.start_date} - {detail?.end_date}
                      </span>
                    </p>
                    <p className="flex gap-3 items-center">
                      <span>{detail?.number_of_likes} likes</span>
                      <span className="border border-white h-5"></span>
                      <span className="flex items-center gap-1">
                        <span className="hidden lg:block">
                          <Star fillColor={"#FFFFFF"} />
                        </span>{" "}
                        {detail?.number_of_ratings}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-[30%] relative">
              <img
                src={detail?.item?.images[0]?.image}
                className="rounded-r-xl h-[162px] object-cover"
                alt=""
              />
              <span
                className={`absolute top-0 left-0 bg-[#000000] text-white text-[10px] lg:text-[13px] w-fit p-1 md:p-2 lg:p-3 pr-3 md:pr-5 lg:pr-8 rounded-r-2xl mt-2 uppercase`}
              >
                {parseInt(detail?.percentage_off)}% off
              </span>
            </div>
          </div>
          <div className="w-8 h-7 md:w-10 md:h-10 rounded-full bg-white absolute top-[50%] -right-5 -translate-y-[50%]"></div>
        </Link>
      </div>
      <div className="lg:hidden h-[124px]">
        <Link to={`/coupon/${detail?.id}`} className="flex relative">
          <div className="w-8 h-7 md:w-10 md:h-10 rounded-full bg-white absolute top-[50%] -left-5 -translate-y-[50%]"></div>
          <div className="flex w-full h-[124px]">
            <div
              className={`flex-[70%] flex gap-3 lg:gap-4 items-center rounded-l-xl bg-gradient-to-r from-[#101010] from-[0%] to-[#101010] to-[100%] text-white`}
            >
              <div
                className={`ml-5 lg:ml-8 lg:text-xl font-semibold flex flex-col gap-1 lg:gap-2 justify-between items-center border-[1.5px] border-dashed border-[#FFFFFF] text-white rounded-xl py-4 `}
              >
                <h1 className="-rotate-90">{detail?.coupon}</h1>
              </div>
              <span className="h-full border-[1px] border-white border-dashed"></span>
              <div className="py-3 pl-0.4 pr-3 space-y-0.5">
                <p className="flex gap-2 items-center text-[11px] lg:text-sm">
                  <img
                    src={detail?.restaurant?.logo}
                    alt=""
                    className="w-4 md:w-[18px] lg:w-[30px]"
                  />{" "}
                  <span className="line-clamp-1">
                    {detail?.restaurant?.name}
                  </span>
                </p>
                <h2 className="text-[13px] lg:text-base font-medium line-clamp-1">
                  {detail?.item?.item}
                </h2>
                <div className="space-y-1 text-[11px] lg:text-sm">
                  <div className="flex gap-3 items-center">
                    <p className="">₦{detail?.coupon_price}</p>
                    <p className={`bg-[#FFFFFF] h-3 lg:h-5 w-[1px]`}></p>
                    <p className="">
                      {parseInt(detail?.percentage_off)}%{" "}
                      <sup className="text-[7px] lg:text-[8px] font-medium text-white uppercase">
                        off
                      </sup>
                    </p>
                  </div>
                  <p
                    className={`text-[#FFFFFF] text-[10px] lg:text-sm font-medium line-clamp-1`}
                  >
                    {detail?.item?.item_description}
                  </p>
                  <div className="space-y-1 text-[11px]">
                    <p className="flex gap-1 items-center">
                      <span className="hidden lg:block">
                        <Clock fillColor={"#FFFFFF"} />
                      </span>
                      <span className="lg:hidden">
                        <Clock fillColor={"#FFFFFF"} width={9} height={9} />
                      </span>
                      <span className="whitespace-nowrap">
                        {detail?.start_date} - {detail?.end_date}
                      </span>
                    </p>
                    <p className="flex gap-3 items-center">
                      <span>{detail?.number_of_likes} likes</span>
                      <span className="border border-white h-2"></span>
                      <span className="flex items-center gap-1">
                        <span className="">
                          <Star width={11} height={11} fillColor={"#FFFFFF"} />
                        </span>{" "}
                        {detail?.number_of_ratings}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-[30%] relative">
              <img
                src={detail?.item?.images[0]?.image}
                className="rounded-r-xl h-[124px] object-cover"
                alt=""
              />
              <span
                className={`absolute top-0 left-0 bg-[#000000] text-white text-[10px] lg:text-[13px] w-fit p-1 md:p-2 lg:p-3 pr-3 md:pr-5 lg:pr-8 rounded-r-2xl mt-2 uppercase`}
              >
                {parseInt(detail?.percentage_off)}% off
              </span>
            </div>
          </div>
          <div className="w-8 h-7 md:w-10 md:h-10 rounded-full bg-white absolute top-[50%] -right-5 -translate-y-[50%]"></div>
        </Link>
      </div>
    </>
  );
};

export default CouponCard;
