import React from "react";
import { Button, Navbar } from "../../components/ui";
import { ArrowLeft } from "../marketplace/_components";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import {
  RestaurantDiscounts,
  RestaurantHero,
  RestaurantInfo,
  RestaurantReviews,
} from "./_components";
import { useRestaurantData, useRestaurantsData } from "../../hooks";

const RestaurantPage = () => {
  const { id } = useParams();

  // const { isLoading, data, isError, error } = useRestaurantsData(id);
  const { isLoading, data, isError, error } = useRestaurantData(id);

  if (isLoading) {
    return (
      <div className="text-base md:text-xl lg:text-2xl text-center font-semibold">
        Loading...
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-base md:text-xl lg:text-2xl text-center font-semibold">
        Error: {error.message}
      </div>
    );
  }

  const restaurant = data?.data;

  // console.log(restaurant);

  return (
    <>
      <Navbar scrolling bgBlack />
      <main className="mt-14 md:mt-24 font-work-sans px-6 md:px-16 lg:px-[136px]">
        <section className="pt-10 pb-5 md:py-10">
          <div className="flex gap-3">
            <Link to="/restaurants">
              <ArrowLeft />
            </Link>
            <h1 className="lg:text-xl font-semibold text-[#000000] uppercase">
              restaurants
            </h1>
          </div>
        </section>

        <RestaurantHero restaurant={restaurant} />

        <RestaurantInfo restaurant={restaurant} />

        <RestaurantDiscounts restaurant={restaurant} />

        <RestaurantReviews restaurant={restaurant} />
      </main>
    </>
  );
};

export default RestaurantPage;
