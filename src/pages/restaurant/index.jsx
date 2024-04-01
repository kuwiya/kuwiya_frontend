import React from "react";
import { Button, Navbar } from "../../components/ui";
import { ArrowLeft } from "../marketplace/_components";
import { Link } from "react-router-dom";

import {
  RestaurantDiscounts,
  RestaurantHero,
  RestaurantInfo,
  RestaurantReviews,
} from "./_components";

const RestaurantPage = () => {
  return (
    <>
      <Navbar scrolling bgBlack />
      <main className="mt-32">
        <section className="px-10 py-10">
          <div className="flex gap-3 items-center">
            <Link to="/restaurants">
              <ArrowLeft />
            </Link>
            <h1 className="text-[23px] font-medium text-[#000000] uppercase">
              restaurants
            </h1>
          </div>
        </section>

        <RestaurantHero />

        <RestaurantInfo />

        <RestaurantDiscounts />

        <RestaurantReviews />
      </main>
    </>
  );
};

export default RestaurantPage;
