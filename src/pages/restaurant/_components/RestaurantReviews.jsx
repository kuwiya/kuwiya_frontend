import React from "react";
import CustomersReviews from "./CustomersReviews";

const RestaurantReviews = () => {
  return (
    <section className="py-20 space-y-6">
      <h1 className="lg:text-2xl md:text-xl text-lg text-center font-semibold text-[#000000] uppercase ">
        reviews
      </h1>
      <CustomersReviews />
    </section>
  );
};

export default RestaurantReviews;
