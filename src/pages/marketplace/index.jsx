import React, { useEffect, useState } from "react";
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
import { useLocation } from "react-router-dom";

const MarketPlace = () => {
  const [searchQueryValue, setSearchQueryValue] = useState("");
  const [locationQueryValue, setLocationQueryValue] = useState("");

  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const searchQuery = searchParams.get("q");
    setSearchQueryValue(searchQuery);
    const locationQuery = searchParams.get("l");
    setLocationQueryValue(locationQuery);
  }, [location.search]);

  return (
    <>
      <Navbar scrolling shadow />
      <main className="font-work-sans py-[9rem] overflow-hidden">
        <section className="flex justify-between px-6 md:px-10 py-6">
          <div className="flex gap-3 items-center">
            <Link to="/">
              <ArrowLeft />
            </Link>
            <h1 className="lg:text-xl md:text-lg font-semibold text-[#000000] uppercase">
              Market Place
            </h1>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href = `/marketplace?${
                searchQueryValue ? `q=${searchQueryValue}&` : ""
              }l=${locationQueryValue}`;
            }}
            action="/marketplace"
            method="get"
            className="border-[1px] border-[#292D32] rounded-xl px-3 py-1 hidden md:flex gap-1 items-center"
          >
            <LocationIcon />
            <input
              value={locationQueryValue || ""}
              onChange={(e) => setLocationQueryValue(e.target.value)}
              type="text"
              placeholder="location"
              className="outline-none"
            />
            {/* <ArrowDown /> */}
          </form>
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
