import React from "react";
import CustomersReviews from "./CustomersReviews";

const RestaurantReviews = () => {
  return (
    <section className="px-10 py-20 space-y-10">
      <h1 className="text-[23px] text-center font-semibold text-[#000000] uppercase ">
        reviews
      </h1>
      <CustomersReviews />
    </section>
  );
};

export default RestaurantReviews;
