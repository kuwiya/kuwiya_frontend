import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AffordableYummy,
  AllRestaurants,
  ArrowDown,
  ArrowLeft,
  AvailableDiscCard,
  CouponCard,
  LogoBanner,
} from "./_components";
import { AllYummy, AllYummy2 } from "../../constants/images";
import LocationIcon from "../../components/ui/navbar/_components/LocationIcon";
import { Navbar } from "../../components/ui";

const MarketPlace = () => {
  return (
    <>
      <Navbar scrolling shadow />
      <main className="font-lato py-[9rem] overflow-hidden">
        <section className="flex justify-between px-10 py-6">
          <div className="flex gap-3 items-center">
            <Link to="/">
              <ArrowLeft />
            </Link>
            <h1 className="text-[23px] font-medium text-[#000000]">
              Market Place
            </h1>
          </div>
          <div className="border-[1px] border-[#292D32] rounded-xl px-3 py-1 flex gap-1 items-center">
            <LocationIcon />
            <input
              type="text"
              placeholder="location"
              className="outline-none"
            />
            <ArrowDown />
          </div>
        </section>

        <AvailableDiscCard />

        <AffordableYummy image={AllYummy} />

        <CouponCard />

        <AffordableYummy image={AllYummy2} />

        <LogoBanner />
        <AllRestaurants />
      </main>
    </>
  );
};

export default MarketPlace;
