import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Navbar } from "../../components/ui";
import { ArrowLeft, Clock, Star } from "../marketplace/_components";
import { useCouponMarketplaceData } from "../../hooks";
import { CouponText, GpsIcon, LikeIcon } from "../../assets/icons";
import { CouponsFiltering } from "../../components";

const CouponDetailsPage = () => {
  const [isCopied, setIsCopied] = useState(false);

  const [fillColor, setFillColor] = useState("#292D32");

  const { id } = useParams();

  const { isLoading, data, isError, error } = useCouponMarketplaceData(id);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  const coupon = data?.data;

  // console.log(coupon.restName);

  return (
    <>
      <Navbar scrolling />
      <main className="mt-32 font-work-sans text-[#000000] lg:px-32">
        <section className="px-8">
          <div className="flex gap-2 items-center font-medium lg:text-[23px]">
            <Link to="/marketplace">
              <ArrowLeft fillColor={"#000000"} />
            </Link>
            <p>Coupon Item Details</p>
          </div>
        </section>

        <section className="py-7 space-y-5 px-9">
          <div className="flex relative">
            <div className="w-12 h-12 rounded-full bg-white absolute top-[50%] -left-5 -translate-y-[50%]"></div>
            <div className="flex bg-gradient-to-r from-[#000000] from-[0%] to-[#666666] to-[100%] rounded-lg p-2">
              <div className="flex-[55%] lg:pt-12 lg:pb-6 lg:pl-16 text-[#000000]">
                <h1 className="lg:text-5xl font-bold text-white">
                  {coupon.mealName}
                </h1>
                <h1 className="lg:text-8xl font-bold text-darkyellow mt-3">
                  {coupon.priceOff} OFF
                </h1>
                <p className="lg:text-[28px] font-normal text-[#FFFFFFDE]">
                  Copy Code Below to claim Coupons
                </p>
                {isCopied && (
                  <p className="text-green-600 font-medium text-xl">
                    Coupon Code Copied!
                  </p>
                )}
                <div
                  onClick={() => {
                    navigator.clipboard.writeText(
                      `${coupon.couponNum}-${coupon.couponCode}`
                    );
                    setIsCopied(true);
                    setTimeout(() => {
                      setIsCopied(false);
                    }, 4000);
                  }}
                  className="w-fit border-[1px] group flex items-center cursor-pointer hover:text-darkyellow hover:border-darkyellow border-white mt-4 rounded-[10px] px-16 py-2 border-dashed text-white font-semibold text-[40px]"
                >
                  <h1 className="">{coupon.couponNum}</h1>
                  <span className="bg-[#FFFFFF] h-0.5 w-2 group-hover:bg-darkyellow"></span>
                  <h1 className="">{coupon.couponCode}</h1>
                </div>
                <div className="flex gap-3 items-center mt-5 lg:text-base font-normal text-[#FFFFFFBF]">
                  <p>{coupon.restName}</p>
                  <span className="h-4 w-0.5 bg-[#FFFFFFBF]"></span>
                  <p className="flex gap-1 items-center justify-between">
                    <span>
                      <Clock fillColor={"#FFFFFFBF"} />
                    </span>
                    <span>{coupon.duration}</span>
                  </p>
                  <span className="h-4 w-0.5 bg-[#FFFFFFBF]"></span>
                  <p className="flex gap-1 items-center">
                    <span>
                      <Star fillColor={"#FFFFFFBF"} />
                    </span>
                    <span>{coupon.rating}</span>
                    <span>({coupon.rating_count})</span>
                  </p>
                </div>
              </div>
              <div className="flex-[45%] flex gap-1 items-center">
                <div>
                  <CouponText />
                </div>
                <div className="relative h-full flex-[70%]">
                  <img
                    src={coupon.mealImage}
                    className="rounded-lg h-full object-cover"
                    alt=""
                  />
                  <span className="absolute top-5 right-5 z-10 p-[5px] bg-white rounded-full w-10 h-10 flex items-center justify-center">
                    <img src={coupon.restLogo} alt="" />
                  </span>
                </div>
              </div>
            </div>
            <div className="w-12 h-12 rounded-full bg-white absolute top-[50%] -right-5 -translate-y-[50%]"></div>
          </div>
          <div className="space-y-4">
            <div className="flex gap-3 justify-between items-center text-[23px] font-medium pr-8">
              <div className="flex gap-3 items-center">
                <p>{coupon.mealName}</p>
                <span className="h-5 w-0.5 bg-black"></span>
                <p>{coupon.restName}</p>
              </div>
              <div>
                <LikeIcon
                  fillColor={fillColor}
                  setFillColor={setFillColor}
                  className="cursor-pointer"
                  onClick={() => {
                    if (fillColor === "#292D32") {
                      setFillColor("#DE1F05");
                    } else {
                      setFillColor("#292D32");
                    }
                  }}
                />
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="relative">
                <span className="text-sm md:text-base font-medium opacity-45">
                  ₦ {coupon.originalPrice + coupon.priceOff}
                </span>{" "}
                <div className="absolute top-3 left-0">
                  <p className="-rotate-[165.11deg] border-t-[1px] border-[#DE1F05] border-solid w-[70.23px]"></p>{" "}
                  <p className="-rotate-[19.98deg] border-b-[1px] border-[#DE1F05] border-solid w-[70.23px]"></p>
                </div>
              </div>
              <span className="text-sm md:text-base font-medium">
                ₦ {coupon.originalPrice}
              </span>
            </div>
            <p className="lg:text-base font-normal lg:pr-24">
              {coupon.mealInfo}
            </p>
            <p className="flex gap-1 items-center text-[13px] font-normal">
              <span>
                <Star />
              </span>
              <span>{coupon.rating}</span>
              <span>({coupon.rating_count})</span>
              <span> . {coupon.distance} Km</span>
              <span>
                <GpsIcon />
              </span>
            </p>
          </div>
        </section>

        <section className="space-y-3 mt-7 mb-24">
          <p className="font-normal lg:text-[19px] pl-9">Similar Coupon</p>
          <CouponsFiltering restName={coupon.restName} />
        </section>
      </main>
    </>
  );
};

export default CouponDetailsPage;
