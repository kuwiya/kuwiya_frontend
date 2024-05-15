import React, { useState } from "react";
import map from "../../../assets/images/map.svg";
import LocationIcon from "../../../components/ui/navbar/_components/LocationIcon";
import StarIcon from "../../homepage/_components/featured_section/_components/featured_card/start_icon";
import { Button } from "../../../components/ui";
import { AverageStarsRating } from "../../../components";
import { useRestaurantRating } from "../../../hooks";

const RestaurantInfo = ({ restaurant }) => {
  const [rating, setRating] = useState(null); // rating
  const [ratings, setRatings] = useState([]);

  const user = "2";

  const handleRatingChange = (value) => {
    setRating(value);
    setRatings([...ratings, value]);
  };

  const handleRating = (rating, user, ratings) => {
    useRestaurantRating({ rating, user, ratings })
      .then((response) => {
        if (response.status === 201) {
          handleRatingChange(rating); // Update the rating state
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
    // swagger endpoint
    <section className="text-[#000000] font-normal flex flex-col lg:flex-row justify-between py-10 lg:py-16 gap-8 lg:gap-5">
      <div className="flex-[57.72%] space-y-4 lg:pr-10">
        <div className="flex gap-2 justify-between items-start">
          <div className="space-y-4">
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-semibold uppercase">
              {restaurant?.name}
            </h1>
            <div className="flex gap-2 items-baseline">
              <span className="text-[6px] text-base">
                {restaurant?.number_of_likes} likes
              </span>
              <span className="bg-[#000000BA] w-[1px] h-3 md:h-4" />
              <div className="flex gap-1 items-center md:text-[13px] text-xs font-normal">
                <div className="mr-3">
                  {[1, 2, 3, 4, 5].map((value) => (
                    <span
                      key={value}
                      className={`cursor-pointer text-base ${
                        value <= rating ? "text-darkyellow" : "text-[#E0E0E0]"
                      }`}
                      onClick={() => handleRating(value, user, restaurant?.id)}
                    >
                      &#9733;
                    </span>
                  ))}
                </div>
                <AverageStarsRating ratings={ratings} />
                <span>({restaurant?.number_of_ratings})</span>
              </div>
            </div>
          </div>
          <Button
            children="SUBSCRIBE"
            // padding="10px 30px"
            backgroundColor="#F8A434"
            borderRadius="12px"
            className="font-medium"
          />
        </div>
        <div className="text-xs md:text-base lg:text-xl text-justify flex flex-col gap-2">
          <p>{restaurant?.description}</p>
          <p>{restaurant?.more_info}</p>
          <p>
            <span className="font-semibold">Opening days: </span>
            {restaurant?.days_open}
          </p>
          <p>
            <span className="font-semibold">Opening hours: </span>
            {restaurant?.opening_hours}
          </p>
          <p>
            <span className="font-semibold">Website: </span>
            {restaurant?.website}
          </p>
          <p>
            <span className="font-semibold">Tel: </span>
            {restaurant?.contact}
          </p>
        </div>
      </div>
      <div className="flex-[32.29%] flex flex-col md:flex-row lg:flex-col gap-4 text-xs md:text-sm lg:text-base">
        <div className="flex-[55%]">
          <img src={map} alt="" />
        </div>
        <div className="flex-[45%]">
          <p className="flex items-center gap-2 ">
            <span>
              <LocationIcon />
            </span>
            <span>{restaurant?.location}</span>
          </p>
          <p className="flex items-center gap-2">
            <span>
              <LocationIcon />
            </span>
            <span>{restaurant?.address}</span>
          </p>
        </div>
      </div>
    </section>
  );
};
export default RestaurantInfo;
