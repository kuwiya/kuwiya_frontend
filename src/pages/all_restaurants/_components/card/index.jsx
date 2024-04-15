import React from "react";
import { Link } from "react-router-dom";
import { gps, heart, star } from "../../../../constants/images";

const Card = ({ restaurant, id }) => {
  return (
    <Link
      to={`/restaurants/${restaurant?.id}`}
      className="flex flex-col bg-primary lg:w-auto hover:cursor-pointer hover:scale-105 transition-all ease-in shadow-xl justify-evenly w-full md:w-[120%] "
      key={restaurant?.id}
    >
      <img src={restaurant?.image} alt="restaurant logo" />
      <div className="flex flex-col p-2 w-full">
        <div className="flex items-center justify-between font-work-sans">
          <span className="font-lato md:text-sm xl:text-base text-[12px] font-medium">
            {restaurant?.title}
          </span>
          <img src={heart} alt="like" />
        </div>
        <div className="flex items-start flex-col md:flex-row md:items-center justify-between pt-4 font-work-sans">
          <div className="flex items-center xl:space-x-2 md:space-x-1">
            <img src={gps} alt="distance" />
            <div className="xl:text-base text-[12px] text-black opacity-80 flex items-center">
              {restaurant?.distance}
              <div className="bg-black  opacity-50 w-[0.1rem] h-6 mx-2 xl:mx-4" />
              {restaurant?.status}
            </div>
          </div>
          <div className="lg:text-base text-[12px] text-black opacity-80 flex items-center gap-2">
            <img src={star} alt="ratings" />
            {restaurant?.ratings}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
