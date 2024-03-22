import React from 'react';

const Restaurants = ({ restaurant }) => {
  return (
    <div className="border-[1px] border-[#000000] bg-[#D9D9D9] font-work-sans rounded-[20px] flex items-center gap-3 p-4 w-fit px-14 md:py-2 xl:py-6">
      <img src={restaurant.logo} alt="drizzy_logo" />
      <div className="space-y-[2px] text-[#000000]">
        <p className="flex justify-between items-baseline">
          <span className="xl:text-base md:text-sm text-xs font-medium">{restaurant.label}</span>
          <span className="md:text-sm text-xs font-normal">
            &lt;{restaurant.distance}
          </span>
        </p>
        <p className="xl:text-base md:text-sm text-xs font-[300] text-[#000000]">{restaurant.text}</p>
      </div>
    </div>
  );
};

export default Restaurants;
