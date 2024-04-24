import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Navbar } from "../../components/ui";
import { ArrowLeft, Clock, Star } from "../marketplace/_components";
import { useDiscountLike, useDiscountedDealData } from "../../hooks";
import { GpsIcon, LikeIcon } from "../../assets/icons";
import SimilarDiscountCard from "./components/SimilarDiscounts";
import { AverageStarsRating } from "../../components";

const DiscountDetailsPage = () => {
  const [rating, setRating] = useState(null); // rating
  const [ratings, setRatings] = useState([]);
  const handleRatingChange = (value) => {
    setRating(value);
    setRatings([...ratings, value]);
  };
  const [fillColor, setFillColor] = useState("#292D32");

  const { id } = useParams();

  const { isLoading, data, isError, error } = useDiscountedDealData(id);

  if (isLoading) {
    return (
      <div className="text-center font-semibold text-xl md:text-2xl">
        Loading...
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-center font-semibold text-xl md:text-2xl">
        Error: {error.message}
      </div>
    );
  }

  const deal = data?.data;

  const user = "Israel";

  // console.log(deal);

  const handleLike = (user, discount_likes) => {
    useDiscountLike({ user, discount_likes });
    setFillColor("#DE1F05");
  };

  return (
    <>
      <Navbar scrolling />
      <main className="mt-24 font-work-sans text-[#000000] px-6 md:px-16 lg:px-[136px]">
        <section className="">
          <div className="flex gap-2 items-center font-medium lg:text-[23px] md:text-xl text-[13px]">
            <Link to="/marketplace">
              <ArrowLeft
                fillColor={"#000000"}
                width={screen.width < 768 ? 16 : ""}
                height={screen.width < 768 ? 15 : ""}
              />
            </Link>
            <p>Discount Item Details</p>
          </div>
        </section>

        <section className="py-7 space-y-5">
          <div className="relative">
            <img
              src={deal?.item?.images[0]?.image}
              alt=""
              className="w-full h-[160px] md:h-[332px] lg:h-[523px] object-cover rounded-[10px]"
            />
            <div className="absolute top-5 right-5 z-10 p-[5px] bg-white rounded-full w-10 h-10 flex items-center justify-center">
              <img src={deal?.restaurant?.logo} alt="" />
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex gap-3 justify-between items-center text-[23px] font-medium lg:pr-8 md:pr-4">
              <div className="flex gap-3 items-center md:text-xl text-base">
                <p>{deal?.item?.item}</p>
                <span className="h-5 w-0.5 bg-black"></span>
                <p>{deal?.restaurant?.name}</p>
              </div>
              <div>
                <LikeIcon
                  width={screen.width < 768 ? 20 : ""}
                  height={screen.width < 768 ? 18 : ""}
                  fillColor={fillColor}
                  setFillColor={setFillColor}
                  className="cursor-pointer"
                  onClick={() => handleLike(user, id)}
                />
              </div>
            </div>
            <div className="flex items-center gap-6 text-sm md:text-base ">
              <div className="relative">
                <span className="font-medium opacity-45">
                  ₦ {deal?.item?.price}
                </span>{" "}
                <div className="absolute top-3 left-0">
                  <p className="-rotate-[165.11deg] border-t-[1px] border-[#DE1F05] border-solid w-[70.23px]"></p>{" "}
                  <p className="-rotate-[19.98deg] border-b-[1px] border-[#DE1F05] border-solid w-[70.23px]"></p>
                </div>
              </div>
              <span className="font-medium">₦ {deal?.discounted_price}</span>
            </div>
            <p className="md:text-base text-sm font-normal lg:pr-24 text-justify">
              {deal?.discount_detail}
            </p>
            <div className="space-y-2 md:text-[13px] text-xs font-normal">
              <p className="flex items-center gap-2">
                <Clock
                  width={screen.width < 768 ? 12 : ""}
                  height={screen.width < 768 ? 12 : ""}
                />
                <span>
                  {deal?.start_date} - {deal?.end_date}
                </span>
              </p>
              <p className="flex items-center gap-2">
                <Clock
                  width={screen.width < 768 ? 12 : ""}
                  height={screen.width < 768 ? 12 : ""}
                />
                <span>
                  {deal?.start_time} - {deal?.end_time}
                </span>
              </p>
            </div>
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
              <span>({deal?.number_of_ratings})</span>
            </div>
            <div className="flex items-center gap-3 md:text-[13px] text-xs font-normal">
              <p>{deal?.number_of_likes} Likes</p>
              <p className="flex items-center gap-1">
                <span>
                  <GpsIcon />
                </span>
                {deal?.restaurant?.location}
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-3 mt-7 mb-24">
          <p className="lg:text-xl md:text-base text-[11px] font-medium">
            Similar Discount
          </p>
          <SimilarDiscountCard restaurantName={deal?.restaurant?.name} />
        </section>
      </main>
    </>
  );
};

export default DiscountDetailsPage;
