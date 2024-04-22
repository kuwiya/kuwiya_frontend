import React from "react";
import { Link } from "react-router-dom";
import { gps, heart, star } from "../../../../constants/images";
import { GpsIcon, LikeIcon } from "../../../../assets/icons";
import { Star } from "../../../marketplace/_components";

const Card = ({ restaurant, id }) => {
  return (
    <div className="h-[178px] md:h-[198px] lg:h-[237px] rounded-[10px]">
      <Link
        to={`/restaurants/${restaurant?.id}`}
        className="flex flex-col bg-primary rounded-b-[10px] cursor-pointer hover:scale-105 transition-all ease-in shadow-xl "
        key={restaurant?.id}
      >
        <img
          src={restaurant?.image}
          alt="restaurant logo"
          className="h-[90px] md:h-[161px] w-full object-cover rounded-t-[10px]"
        />
        <div className="flex flex-col gap-2 md:gap-4 p-2 w-full">
          <div className="flex md:items-center gap-4 justify-between font-work-sans">
            <span className="font-lato md:text-sm xl:text-base text-xs font-medium line-clamp-1">
              {restaurant?.title}
            </span>
            <LikeIcon
              width={screen.width < 768 ? 13.33 : ""}
              height={screen.width < 768 ? 12.84 : ""}
            />
          </div>
          <div className="flex flex-col md:flex-row md:items-center justify-between font-work-sans">
            <div className="flex items-center xl:space-x-2 space-x-1">
              <GpsIcon
                width={screen.width < 768 ? 11 : ""}
                height={screen.width < 768 ? 11 : ""}
              />
              <div className="xl:text-base text-[12px] text-[#000000BA] flex items-center gap-1 md:gap-2">
                {restaurant?.distance}
                <div className="bg-[#000000BA] w-[1px] h-3 md:h4" />
                {restaurant?.status}
              </div>
            </div>
            <div className="lg:text-base text-[12px] text-[#000000BA] flex items-center gap-1 md:gap-2">
              <Star
                width={screen.width < 768 ? 11 : ""}
                height={screen.width < 768 ? 11 : ""}
              />
              {restaurant?.ratings}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
