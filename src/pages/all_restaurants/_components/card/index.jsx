import React, { useState } from "react";
import { Link } from "react-router-dom";
import { gps, heart, star } from "../../../../constants/images";
import { GpsIcon, LikeIcon } from "../../../../assets/icons";
import { Star } from "../../../marketplace/_components";
import { useRestaurantLike } from "../../../../hooks/likes-post-request/useRestaurantLike";

const Card = ({ restaurant }) => {
  const [fillColor, setFillColor] = useState("#292D32");

  const user = "Israel";
  const handleLike = (user, likes) => {
    useRestaurantLike({ user, likes });
    setFillColor("#DE1F05");
  };
  return (
    // swagger endpoint data
    <div className="h-[178px] md:h-[198px] lg:h-[237px] rounded-[10px] flex flex-col bg-primary rounded-b-[10px] cursor-pointer hover:scale-105 transition-all ease-in shadow-xl">
      <Link
        to={`/restaurants/${restaurant?.id}`}
        className=""
        key={restaurant?.id}
      >
        <img
          src={restaurant?.logo}
          alt="restaurant logo"
          className="h-[90px] md:h-[161px] w-full object-cover rounded-t-[10px]"
        />
      </Link>
      <div className="flex flex-col gap-2 md:gap-4 p-2 w-full">
        <div className="flex md:items-center gap-4 justify-between font-work-sans">
          <span className="font-lato md:text-sm xl:text-base text-xs font-medium line-clamp-1">
            {restaurant?.name}
          </span>
          <LikeIcon
            width={screen.width < 768 ? 13.33 : ""}
            height={screen.width < 768 ? 12.84 : ""}
            fillColor={fillColor}
            onClick={() => handleLike(user, restaurant?.id)}
          />
        </div>
        <div className="flex flex-col md:flex-row md:items-center justify-between md:gap-2 font-work-sans">
          <div className="flex items-center xl:space-x-2 space-x-1">
            <GpsIcon
              width={screen.width < 768 ? 11 : ""}
              height={screen.width < 768 ? 11 : ""}
            />
            <div className="xl:text-base text-[12px] text-[#000000BA] flex items-center gap-1 md:gap-2">
              {restaurant?.status}
              {/* {restaurant?.distance} */}
              <span className="line-clamp-1">{restaurant?.address}</span>
              <div className="bg-[#000000BA] w-[1px] h-3 md:h4" />
            </div>
          </div>
          <div className="lg:text-base text-[12px] text-[#000000BA] flex items-center gap-1 md:gap-2">
            <span className="lg:whitespace-nowrap">
              {restaurant?.number_of_likes} likes
            </span>
            <div className="bg-[#000000BA] w-[1px] h-3 md:h4" />
            <Star
              width={screen.width < 768 ? 11 : ""}
              height={screen.width < 768 ? 11 : ""}
            />
            ({restaurant?.number_of_ratings})
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
