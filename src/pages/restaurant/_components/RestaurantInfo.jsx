import React from "react";
import map from "../../../assets/images/map.svg";
import LocationIcon from "../../../components/ui/navbar/_components/LocationIcon";
import StarIcon from "../../homepage/_components/featured_section/_components/featured_card/start_icon";
import { Button } from "../../../components/ui";

const RestaurantInfo = () => {
  return (
    <section className="text-[#000000] font-normal flex justify-between px-10 py-20 gap-5">
      <div className="flex-[57.72%] space-y-4 lg:pr-20">
        <div className="flex gap-2 justify-between items-start">
          <div className="space-y-4">
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-semibold uppercase">
              The Place
            </h1>
            <div className="flex gap-2 items-baseline">
              <p className="flex">
                <StarIcon fillColor="black" />
                <StarIcon fillColor="black" />
                <StarIcon fillColor="black" />
                <StarIcon fillColor="black" />
                <StarIcon fillColor="black" />
              </p>
              <span>5.0/5.0</span>
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
        <p className="text-xl ">
          The Place is a trademark of Smackers Limited, a company set up in 2003
          to explore opportunities in the Food sector in Nigeria. Over time, the
          company has expanded it operations to include Nightclubbing,
          Hospitality, Farming and currently operates out of Six locations:
          Isaac John GRA, Adeola Odeku Victoria Island, Admiralty Way, Lekki
          Phase one, Alausa Ikeja, Maryland Mall and Circle Mall in Lekki. The
          company&apos;s plan is to aggressively grow organically by
          establishing other outlets firstly focused on Lagos State
          (particularly the Island section of Lagos State) and other favourable
          locations such as Abuja.
        </p>
      </div>
      <div className="flex-[32.29%] space-y-4 text-base">
        <img src={map} alt="" />
        <div>
          <p className="flex items-center gap-2 ">
            <span>
              <LocationIcon />
            </span>
            <span>Lagos, 45 Isaac John St, GRA 101233, Ikeja, Nigeria</span>
          </p>
          <p className="flex items-center gap-2">
            <span>
              <LocationIcon />
            </span>
            <span>112b Ogudu Rd, Kosofe 105102, Lagos, Nigeria</span>
          </p>
        </div>
      </div>
    </section>
  );
};
export default RestaurantInfo;
