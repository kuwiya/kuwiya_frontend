import React from "react";

const Restaurants = ({ restaurant }) => {
  return (
    <div className="border-[1px] border-[#000000] bg-[#D9D9D9] font-work-sans rounded-[20px] flex items-center gap-1 lg:gap-3 p-[0.4rem] lg:p-[.7rem]">
      <img src={restaurant.logo} alt="drizzy_logo" />
      <div className="space-y-[2px] text-[#000000]">
        <p className="flex justify-between items-baseline">
          <span className="lg:text-base md:text-xs text-xs font-medium">
            {restaurant.label}
          </span>
          <span className="lg:text-sm text-xs font-normal">
            &lt;{restaurant.distance}
          </span>
        </p>
        <p className="xl:text-base md:text-xs text-xs font-[300] text-[#000000]">
          {restaurant.text}
        </p>
      </div>
    </div>
  );
};

export default Restaurants;
