import React from "react";
import { RestaurantCouponCard, RestaurantFeaturedCard } from ".";
import { Button } from "../../../components/ui";

const RestaurantDiscounts = ({ restaurant }) => {
  return (
    <section className="px-10 py-4">
      <div className="flex flex-col lg:flex-row gap-3">
        <div className="flex-[65%]">
          <RestaurantFeaturedCard restaurant={restaurant} />
        </div>
        <div className="flex-[35%]">
          <RestaurantCouponCard restaurant={restaurant} />
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <Button
          children="VIEW ALL"
          padding="10px 30px"
          backgroundColor="#F8A434"
          borderRadius="12px"
          className="font-medium"
        />
      </div>
    </section>
  );
};
export default RestaurantDiscounts;
