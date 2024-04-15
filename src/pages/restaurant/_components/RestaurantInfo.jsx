import React from "react";
import map from "../../../assets/images/map.svg";
import LocationIcon from "../../../components/ui/navbar/_components/LocationIcon";
import StarIcon from "../../homepage/_components/featured_section/_components/featured_card/start_icon";
import { Button } from "../../../components/ui";

const RestaurantInfo = ({ restaurant }) => {
  return (
    <section className="text-[#000000] font-normal flex flex-col lg:flex-row justify-between py-10 lg:py-16 gap-8 lg:gap-5">
      <div className="flex-[57.72%] space-y-4 lg:pr-10">
        <div className="flex gap-2 justify-between items-start">
          <div className="space-y-4">
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-semibold uppercase">
              {restaurant.brand}
            </h1>
            <div className="flex gap-2 items-baseline">
              <p className="flex">
                <StarIcon fillColor="black" />
                <StarIcon fillColor="black" />
                <StarIcon fillColor="black" />
                <StarIcon fillColor="black" />
                <StarIcon fillColor="black" />
              </p>
              <span className="text-[6px] text-base">
                {restaurant.ratings.substring(0, 3)}/5.0
              </span>
            </div>
          </div>
          <Button
            children="SUBSCRIBE"
            padding="10px 30px"
            backgroundColor="#F8A434"
            borderRadius="12px"
            className="font-medium"
          />
        </div>
        <p className="text-xs md:text-base lg:text-xl text-justify">
          {restaurant.about}
        </p>
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
            <span>{restaurant.location}</span>
          </p>
          <p className="flex items-center gap-2">
            <span>
              <LocationIcon />
            </span>
            <span>{restaurant.location}</span>
          </p>
        </div>
      </div>
    </section>
  );
};
export default RestaurantInfo;
