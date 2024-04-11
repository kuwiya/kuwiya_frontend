import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Navbar } from "../../components/ui";
import { ArrowLeft, Star } from "../marketplace/_components";
import { useDiscountedDealData } from "../../hooks";
import { GpsIcon, LikeIcon } from "../../assets/icons";
import SimilarDiscountCard from "./components/SimilarDiscounts";

const DiscountDetailsPage = () => {
  const [fillColor, setFillColor] = useState("#292D32");

  const { id } = useParams();

  const { isLoading, data, isError, error } = useDiscountedDealData(id);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  const deal = data?.data;

  // console.log(deal);

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
              src={deal.mealImageUrl}
              alt=""
              className="w-full h-[160px] md:h-[332px] lg:h-[523px] object-cover rounded-[10px]"
            />
            <div className="absolute top-5 right-5 z-10 p-[5px] bg-white rounded-full w-10 h-10 flex items-center justify-center">
              <img src={deal.restaurantLogoUrl} alt="" />
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex gap-3 justify-between items-center text-[23px] font-medium lg:pr-8 md:pr-4">
              <div className="flex gap-3 items-center md:text-xl text-base">
                <p>{deal.mealName}</p>
                <span className="h-5 w-0.5 bg-black"></span>
                <p>{deal.restaurantName}</p>
              </div>
              <div>
                <LikeIcon
                  width={screen.width < 768 ? 20 : ""}
                  height={screen.width < 768 ? 18 : ""}
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
            <div className="flex items-center gap-6 text-sm md:text-base ">
              <div className="relative">
                <span className="font-medium opacity-45">
                  ₦ {deal.price + deal.price * 3}
                </span>{" "}
                <div className="absolute top-3 left-0">
                  <p className="-rotate-[165.11deg] border-t-[1px] border-[#DE1F05] border-solid w-[70.23px]"></p>{" "}
                  <p className="-rotate-[19.98deg] border-b-[1px] border-[#DE1F05] border-solid w-[70.23px]"></p>
                </div>
              </div>
              <span className="font-medium">₦ {deal.price}</span>
            </div>
            <p className="md:text-base text-sm font-normal lg:pr-24 text-justify">
              {deal.description}
            </p>
            <p className="flex gap-1 items-center md:text-[13px] text-xs font-normal">
              <span>
                <Star />
              </span>
              <span>{deal.rating}</span>
              <span>({deal.reviewCount})</span>
              <span> . {deal.distance} Km</span>
              <span>
                <GpsIcon />
              </span>
            </p>
          </div>
        </section>

        <section className="space-y-3 mt-7 mb-24">
          <p className="lg:text-xl md:text-base text-[11px] font-medium">
            Similar Discount
          </p>
          <SimilarDiscountCard restaurantName={deal.restaurantName} />
        </section>
      </main>
    </>
  );
};

export default DiscountDetailsPage;
