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
import { useRestaurantsData } from "../../hooks";

const RestaurantPage = () => {
  const { id } = useParams();

  const { isLoading, data, isError, error } = useRestaurantsData(id);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error}</div>;
  }

  const restaurant = data?.data;

  // console.log(restaurant);

  return (
    <>
      <Navbar scrolling bgBlack />
      <main className="mt-32 font-work-sans">
        <section className="pl-[9.5rem] py-10">
          <div className="flex gap-3 items-center">
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

        <RestaurantReviews />
      </main>
    </>
  );
};

export default RestaurantPage;
