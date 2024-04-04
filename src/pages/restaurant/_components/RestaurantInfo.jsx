import React from "react";
import map from "../../../assets/images/map.svg";
import LocationIcon from "../../../components/ui/navbar/_components/LocationIcon";
import StarIcon from "../../homepage/_components/featured_section/_components/featured_card/start_icon";
import { Button } from "../../../components/ui";

const RestaurantInfo = ({ restaurant }) => {
  return (
    <section className="text-[#000000] font-normal flex justify-between px-10 py-20 lg:px-36 gap-5">
      <div className="flex-[57.72%] space-y-4 lg:pr-20">
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
              <span>{restaurant.ratings.substring(0, 3)}/5.0</span>
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
        <p className="text-xl ">{restaurant.about}</p>
      </div>
      <div className="flex-[32.29%] space-y-4 text-base">
        <img src={map} alt="" />
        <div>
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
