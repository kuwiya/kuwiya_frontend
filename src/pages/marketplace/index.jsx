import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
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
import { CitiesAndCountries } from "../homepage/_components";
import { useDispatch, useSelector } from "react-redux";
import { selectLocation, setLocation } from "../../redux/slice/locationSlice";
import { selectSearch, setSearch } from "../../redux/slice/searchSlice";

const MarketPlace = () => {
  const [searchQueryValue, setSearchQueryValue] = useState("");
  const [locationQueryValue, setLocationQueryValue] = useState("");

  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const searchQuery = searchParams.get("query");
    setSearchQueryValue(searchQuery);
    dispatch(setSearch(searchQuery));
    const locationQuery = searchParams.get("loc");
    setLocationQueryValue(locationQuery);
    dispatch(setLocation(locationQuery));
  }, [location.search]);

  const loc = useSelector(selectLocation);
  const search = useSelector(selectSearch);

  const urlQueries = `/marketplace?${loc ? `loc=${loc}` : ""}${
    search ? `&query=${search}` : ""
  }`;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (loc === "Location" || ("" && search === "")) {
      window.location.href = "/marketplace";
    }
    window.location.href = urlQueries;
  };

  return (
    <>
      <Navbar scrolling shadow={screen.width < 768 ? true : false} />
      <main className="font-work-sans mt-16 md:mt-24 lg:mt-32 overflow-hidden">
        <section className="flex justify-between px-6 md:px-16 lg:px-[136px] py-6">
          <div className="flex gap-3 items-center">
            <Link to="/">
              <ArrowLeft />
            </Link>
            <h1 className="lg:text-[23px] text-sm font-semibold text-[#000000]">
              Market Place
            </h1>
          </div>
          <form
            // onSubmit={(e) => {
            //   e.preventDefault();
            //   window.location.href = `/marketplace?${
            //     searchQueryValue ? `q=${searchQueryValue}&` : ""
            //   }${locationQueryValue ? `l=${locationQueryValue}` : ""}`;
            // }}
            onSubmit={handleSubmit}
            action="/marketplace"
            method="get"
            className="border-[1px] border-[#33333380] rounded-xl px-2 py-[2px] md:px-3 md:py-1 flex gap-1 items-center"
          >
            <LocationIcon />
            <input
              // value={locationQueryValue || ""}
              // onChange={(e) => setLocationQueryValue(e.target.value)}
              value={loc || ""}
              onChange={(e) => dispatch(setLocation(e.target.value))}
              type="text"
              placeholder="location"
              className="outline-none w-[75px] md:w-auto"
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

        <CitiesAndCountries />
      </main>
    </>
  );
};

export default MarketPlace;
