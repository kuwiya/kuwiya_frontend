import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Navbar } from "../../components/ui";
import { ArrowLeft, AvailableDiscCard, Star } from "../marketplace/_components";
import {
  useFeaturedDealData,
  useFeaturedLike,
  useFeaturedRating,
} from "../../hooks";
import { GpsIcon, LikeIcon } from "../../assets/icons";
import SimilarDiscountCard from "../details-discounts-page/components/SimilarDiscounts";
import { AverageStarsRating } from "../../components";

const DetailPage = () => {
  const [rating, setRating] = useState(null); // rating
  const [ratings, setRatings] = useState([]);
  const [like, setLike] = useState(false);
  const [fillColor] = like ? "#DE1F05" : "#292D32";

  const { id } = useParams();

  const { isLoading, data, isError, error } = useFeaturedDealData(id);

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

  const deal = data?.data;

  const user = "2";
  const handleLike = (user, user_likes) => {
    useFeaturedLike({ user, user_likes })
      .then((response) => {
        if (response.status === 201) {
          setLike((prev) => !prev); // toggle like state
          console.log("Like featured successful:", response.data);
        }
      })
      .catch((error) => {
        console.error(
          "Error liking featured product:",
          error.response ? error.response.data : error.message
        );
      });
  };
  const handleRatingChange = (value) => {
    setRating(value);
    setRatings([...ratings, value]);
  };

  const handleRating = (rating, user, user_ratings) => {
    useFeaturedRating({ rating, user, user_ratings })
      .then((response) => {
        if (response.status === 201) {
          handleRatingChange(rating);
          console.log("Rating action successful:", response.data);
        }
      })
      .catch((error) => {
        console.error(
          "Error rating product:",
          error.response ? error.response.data : error.message
        );
      });
  };

  return (
    <>
      <Navbar scrolling />
      <main className="mt-24 font-work-sans text-[#000000] px-6 md:px-16 lg:px-[136px]">
        <section className="">
          <div className="flex gap-2 items-center font-medium lg:text-[23px] md:text-xl text-[13px]">
            <Link to="/">
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
          <div>
            <img
              src={deal?.item?.images[0].image}
              alt=""
              className="w-full h-[160px] md:h-[332px] lg:h-[523px] object-cover rounded-[10px]"
            />
          </div>
          <div className="space-y-4">
            <div className="flex gap-3 justify-between items-center text-[23px] font-medium pr-8">
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
                  className="cursor-pointer"
                  onClick={() => handleLike(user, deal?.id)}
                />
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm md:text-base ">
              <div className="relative">
                <span className="-medium opacity-45">
                  ₦ {deal?.item?.price}
                </span>{" "}
                <div className="absolute top-3 left-0">
                  <p className="-rotate-[165.11deg] border-t-[1px] border-[#DE1F05] border-solid w-[70.23px]"></p>{" "}
                  <p className="-rotate-[19.98deg] border-b-[1px] border-[#DE1F05] border-solid w-[70.23px]"></p>
                </div>
              </div>
              <span className="font-medium">
                ₦ {deal?.discounted_price_of_featured_deal}
              </span>
            </div>
            <p className="md:text-base text-sm font-normal lg:pr-24 text-justify">
              {deal?.description_of_featured_deal}
            </p>
            <div className="flex gap-1 items-center md:text-[13px] text-xs font-normal">
              <div className="mr-3">
                {[1, 2, 3, 4, 5].map((value) => (
                  <span
                    key={value}
                    className={`cursor-pointer text-base ${
                      value <= rating ? "text-darkyellow" : "text-[#E0E0E0]"
                    }`}
                    onClick={() => handleRating(value, user, deal?.id)}
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
            {/* <p className="flex gap-1 items-center md:text-[13px] text-xs font-normal">
              <span>{deal?.number_of_likes} likes</span>
              <span>
                <Star />
              </span>
              <span>({deal?.number_of_ratings})</span>
              <span> . {deal?.restaurant?.location} Km</span>
              <span>
                <GpsIcon />
              </span>
            </p> */}
          </div>
        </section>

        <section className="space-y-3 mt-7 mb-24">
          <p className="font-medium lg:text-xl md:text-base text-[11px]">
            Similar Discounts
          </p>
          <SimilarDiscountCard restaurantName={deal?.restaurant?.name} />
        </section>
      </main>
    </>
  );
};

export default DetailPage;
