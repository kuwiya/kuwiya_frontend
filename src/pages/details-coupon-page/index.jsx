import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Navbar } from "../../components/ui";
import { ArrowLeft, Clock, Star } from "../marketplace/_components";
import { useCouponLike, useCouponMarketplaceData } from "../../hooks";
import { CouponText, GpsIcon, LikeIcon } from "../../assets/icons";
import { AverageStarsRating, CouponsFiltering } from "../../components";

const CouponDetailsPage = () => {
  const [rating, setRating] = useState(null); // rating
  const [ratings, setRatings] = useState([]);
  const [isCopied, setIsCopied] = useState(false);
  const [fillColor, setFillColor] = useState("#292D32");

  const handleRatingChange = (value) => {
    setRating(value);
    setRatings([...ratings, value]);
  };

  const { id } = useParams();

  const { isLoading, data, isError, error } = useCouponMarketplaceData(id);

  if (isLoading) {
    return (
      <div className="text-base md:text-xl lg:text-2xl text-center font-semibold">
        Loading...
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-base md:text-xl lg:text-2xl text-center font-semibold">
        Error: {error}
      </div>
    );
  }

  const coupon = data?.data;

  const user = "Israel";
  const handleLike = (user, coupon_likes) => {
    useCouponLike({ user, coupon_likes });
    setFillColor("#DE1F05");
  };

  return (
    <>
      <Navbar scrolling />
      <main className="mt-20 md:mt-28 font-work-sans text-[#000000] lg:px-[136px] md:px-16 px-6">
        <section className="">
          <div className="flex gap-2 items-center font-medium lg:text-[23px]">
            <Link to="/marketplace">
              <ArrowLeft fillColor={"#000000"} />
            </Link>
            <p>Coupon Item Details</p>
          </div>
        </section>

        <section className="py-7 space-y-5">
          <div className="flex relative h-[169px] md:h-[372px] lg:h-auto">
            <div className="w-7 h-7 md:w-12 md:h-12 rounded-full bg-white absolute top-[50%] -left-4 md:-left-5 -translate-y-[50%]"></div>
            <div className="flex bg-gradient-to-r from-[#000000] from-[0%] to-[#666666] to-[100%] rounded-lg p-1 md:p-2">
              <div className="flex-1 md:flex-[55%] h-[169px] md:h-auto lg:pt-12 md:pt-8 pt-2 md:pb-6 lg:pl-16 md:pl-10 pl-7 text-[#000000]">
                <h1 className="lg:text-5xl md:text-[40px] font-bold text-white -mb-4 md:mb-0 line-clamp-1">
                  {coupon?.item?.item}
                </h1>
                <h1 className="lg:text-8xl md:text-[64px] text-2xl font-bold text-darkyellow mt-3">
                  {parseInt(coupon?.percentage_off)}% OFF
                </h1>
                <p className="lg:text-[28px] md:text-[19px] text-[11px] font-normal text-[#FFFFFFDE] md:mt-4 lg:mt-0">
                  Copy Code Below to claim Coupons
                </p>
                {isCopied && (
                  <p className="text-green-600 font-medium md:text-xl text-[11px]">
                    Coupon Code Copied!
                  </p>
                )}
                <div
                  onClick={() => {
                    navigator.clipboard.writeText(`${coupon?.coupon}`);
                    setIsCopied(true);
                    setTimeout(() => {
                      setIsCopied(false);
                    }, 4000);
                  }}
                  className="w-fit border-[1px] group flex items-center cursor-pointer hover:text-darkyellow hover:border-darkyellow border-white mt-1 md:mt-4 rounded-[10px] lg:px-16 md:px-8 px-2.5 py-[2px] md:py-2 border-dashed text-white md:font-semibold font-medium lg:text-[40px] md:text-[30px] text-lg"
                >
                  <h1 className="">{coupon?.coupon}</h1>
                </div>
                <div className="flex gap-3 md:gap-3 items-center mt-1 md:mt-5 lg:text-base md:text-sm text-[8px] font-normal text-[#FFFFFFBF]">
                  <p>{coupon?.restaurant?.name}</p>
                  <span className="h-4 w-[1px] bg-[#FFFFFFBF]"></span>
                  <p className="flex gap-[3px] items-center justify-between">
                    <span className="hidden md:block">
                      <Clock fillColor={"#FFFFFFBF"} />
                    </span>
                    <span className="md:hidden">
                      <Clock fillColor={"#FFFFFFBF"} width={10} height={10} />
                    </span>
                    <span>
                      {coupon?.start_time} - {coupon?.end_time}
                    </span>
                  </p>
                  <span className="hidden md:block h-4 w-[1px] bg-[#FFFFFFBF]"></span>
                  <p className="hidden md:flex gap-[3px] items-center">
                    <span>{coupon?.number_of_likes} Likes</span>
                    <span className="hidden md:block">
                      <Star fillColor={"#FFFFFFBF"} />
                    </span>
                    <span className="md:hidden">
                      <Star fillColor={"#FFFFFFBF"} width={10} height={10} />
                    </span>
                    <span>({coupon?.number_of_ratings})</span>
                  </p>
                </div>
              </div>
              <div className="flex-1 md:flex-[45%] flex md:gap-1 items-center">
                <div className="hidden lg:block">
                  <CouponText />
                </div>
                <div className="hidden md:block lg:hidden">
                  <CouponText width={75} height={240} />
                </div>
                <div className="md:hidden">
                  <CouponText width={38.1} height={120} />
                </div>
                <div className="relative h-[161px] md:h-[356px] lg:h-full flex-[70%]">
                  <img
                    src={coupon?.item?.images[0]?.image}
                    className="rounded-lg h-full object-cover"
                    alt=""
                  />
                  <span className="absolute top-2 right-2 md:top-5 md:right-5 z-10 p-[3px] md:p-[5px] bg-white rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">
                    <img src={coupon?.restaurant?.logo} alt="" />
                  </span>
                </div>
              </div>
            </div>
            <div className="w-7 h-7 md:w-12 md:h-12 rounded-full bg-white absolute top-[50%] -right-4 md:-right-5 -translate-y-[50%]"></div>
          </div>
          <div className="space-y-4">
            <div className="flex gap-3 justify-between items-center text-[19px] md:text-[23px] font-medium pr-8">
              <div className="flex gap-3 items-center">
                <p>{coupon?.item?.item}</p>
                <span className="h-5 w-0.5 bg-black"></span>
                <p>{coupon?.restaurant?.name}</p>
              </div>
              <div>
                <LikeIcon
                  fillColor={fillColor}
                  setFillColor={setFillColor}
                  className="cursor-pointer"
                  onClick={() => handleLike(user, id)}
                />
              </div>
            </div>
            <div className="flex items-center gap-6 text-sm md:text-base font-medium">
              <div className="relative">
                <span className="opacity-45">₦ {coupon?.item?.price}</span>{" "}
                <div className="absolute top-3 left-0">
                  <p className="-rotate-[165.11deg] border-t-[1px] border-[#DE1F05] border-solid w-[70.23px]"></p>{" "}
                  <p className="-rotate-[19.98deg] border-b-[1px] border-[#DE1F05] border-solid w-[70.23px]"></p>
                </div>
              </div>
              <span className="">₦ {coupon?.coupon_price}</span>
            </div>
            <p className="text-base font-normal lg:pr-24">
              {coupon?.item?.item_description}
            </p>
            <div className="flex gap-1 items-center md:text-[13px] text-xs font-normal">
              <div className="mr-3">
                {[1, 2, 3, 4, 5].map((value) => (
                  <span
                    key={value}
                    className={`cursor-pointer text-base ${
                      value <= rating ? "text-darkyellow" : "text-[#E0E0E0]"
                    }`}
                    onClick={() => handleRatingChange(value)}
                  >
                    &#9733;
                  </span>
                ))}
              </div>
              <AverageStarsRating ratings={ratings} />
              <span>({coupon?.number_of_ratings})</span>
            </div>
            <div className="flex items-center gap-3 md:text-[13px] text-xs font-normal">
              <p>{coupon?.number_of_likes} Likes</p>
              <p className="flex items-center gap-1">
                <span>
                  <GpsIcon />
                </span>
                {coupon?.restaurant?.location}
              </p>
            </div>
            {/* <p className="flex gap-1 items-center text-[13px] font-normal">
              <span>{coupon?.number_of_likes} Likes</span>
              <span>
                <Star />
              </span>
              <span>({coupon?.number_of_ratings})</span>
              <span> . {coupon?.restaurant?.location} </span>
              <span>
                <GpsIcon />
              </span>
            </p> */}
          </div>
        </section>

        <section className="space-y-3 mt-7 mb-10">
          <p className="font-medium lg:text-[19px] text-[11px]">
            Similar Coupon
          </p>
          <CouponsFiltering restName={coupon?.restaurant?.name} />
        </section>
      </main>
    </>
  );
};

export default CouponDetailsPage;
