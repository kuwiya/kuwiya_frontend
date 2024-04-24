import React from "react";
import { RestaurantCouponCard, RestaurantFeaturedCard } from ".";
import { Button } from "../../../components/ui";
import SimilarDiscountCard from "../../details-discounts-page/components/SimilarDiscounts";
import { CouponsFiltering } from "../../../components";
import { Link } from "react-router-dom";

const RestaurantDiscounts = ({ restaurant }) => {
  return (
    <section className="py-4">
      <div className="space-y-12 md:space-y-20">
        <div className="flex-[65%]">
          <SimilarDiscountCard restaurantName={restaurant?.name} />
        </div>
        <div className="flex-[35%]">
          <CouponsFiltering restName={restaurant?.name} />
        </div>
      </div>
      <Link to="/marketplace" className="flex justify-center ">
        <Button
          children="VIEW ALL"
          padding="10px 30px"
          backgroundColor="#F8A434"
          borderRadius="12px"
          className="font-medium"
        />
      </Link>
    </section>
  );
};
export default RestaurantDiscounts;
