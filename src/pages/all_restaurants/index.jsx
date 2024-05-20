import React, { useEffect, useState } from "react";
import { Restaurants } from "../../constants";
import Card from "./_components/card";
import { Button, Navbar } from "../../components/ui";
import { sort } from "../../constants/images";
// import Pagination from "./_components/pagination";
import ArrowLeft from "./_components/arrow";
import { Link, useLocation } from "react-router-dom";
import { Pagination } from "../marketplace/_components";
import { useAllRestaurantsData } from "../../hooks";
import { useDispatch, useSelector } from "react-redux";
import { selectLocation, setLocation } from "../../redux/slice/locationSlice";
import { selectSearch, setSearch } from "../../redux/slice/searchSlice";

const RestaurantsListing = () => {
  const [filterValue, setFilterValue] = useState("");
  const [sortItems, setSortItems] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [restaurantPerPage] = useState(9);
  const [query, setQuery] = useState("");
  const [locationQuery, setLocationQuery] = useState("");

  // const loct = useLocation();
  // const dispatch = useDispatch();
  const locationValue = useSelector(selectLocation);
  const searchValue = useSelector(selectSearch);
  // console.log(locationValue, searchValue);

  // useEffect(() => {
  //   const searchParams = new URLSearchParams(loct.search);
  //   const queryValue = searchParams.get("query");
  //   const locationQueryValue = searchParams.get("loc");
  //   if (queryValue) {
  //     setQuery(queryValue);
  //     dispatch(setSearch(queryValue));
  //   }
  //   if (locationQueryValue) {
  //     setLocationQuery(locationQueryValue);
  //     dispatch(setLocation(locationQueryValue));
  //   }
  // }, [loct.search]);

  useEffect(() => {
    if (locationValue) {
      setLocationQuery(locationValue);
    }
    if (searchValue) {
      setQuery(searchValue);
    }
  }, [locationValue, searchValue]);

  const location = locationQuery;
  const search = query;

  const { isLoading, data, isError, error } = useAllRestaurantsData();

  const AllRestaurants = data?.data;
  // console.log(AllRestaurants);

  const filteredRestaurants =
    locationQuery === "Location" || ""
      ? AllRestaurants
      : AllRestaurants?.filter((restaurant) => {
          return restaurant?.address
            ?.toLowerCase()
            .includes(location.toLowerCase());
        });

  const finalFilteredRestaurants =
    query === ""
      ? filteredRestaurants
      : filteredRestaurants?.filter((restaurant) => {
          return restaurant?.name?.toLowerCase().includes(search.toLowerCase());
        });

  // pagination
  const indexOfLastRestaurant = currentPage * restaurantPerPage;
  const indexOfFirstRestaurant = indexOfLastRestaurant - restaurantPerPage;
  const currentRestaurant = finalFilteredRestaurants?.slice(
    indexOfFirstRestaurant,
    indexOfLastRestaurant
  );

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

  const nPages = Math.ceil(currentRestaurant?.length / restaurantPerPage);

  const handleSort = () => {
    setSortItems(!sortItems);
  };

  const sortedRestaurants =
    filterValue && filterValue !== "All"
      ? currentRestaurant?.filter((rest) => {
          return rest?.category
            ?.toLowerCase()
            .includes(filterValue.toLowerCase());
        })
      : currentRestaurant;

  return (
    <>
      <Navbar scrolling bgBlack />

      {/* swagger endpoint */}
      <div className="md:px-16 lg:px-[136px] px-6 bg-primary py-24 md:py-32 space-y-5">
        <div className="flex justify-between w-full font-work-sans">
          <div className="flex items-center space-x-3">
            <Link to={"/"} className="hover:cursor-pointer">
              <ArrowLeft />
            </Link>
            <span className="uppercase font-semibold text-base lg:text-xl">
              restaurants
            </span>
          </div>
          <div className="flex items-center space-x-3 relative">
            {sortItems && (
              <div className="bg-primary space-y-4 border px-6 py-4 absolute top-[4rem] right-[-12px] animate-slide_up z-50 w-[200px]">
                <div className="flex justify-between items-center font-semibold">
                  <span className="">Sort</span>
                  <span
                    onClick={handleSort}
                    className="hover:cursor-pointer text-xl"
                  >
                    x
                  </span>
                </div>
                <div className="flex gap-4 items-center">
                  <input
                    type="radio"
                    name="sort"
                    id="all"
                    value="All"
                    onChange={(e) => setFilterValue(e.target.value)}
                  />
                  <label
                    htmlFor="all"
                    className="md:text-[18px] text-sm font-normal"
                  >
                    All
                  </label>
                </div>
                <div className="flex gap-4 items-center">
                  <input
                    type="radio"
                    name="sort"
                    id="fastfood"
                    value="Fast food"
                    onChange={(e) => setFilterValue(e.target.value)}
                  />
                  <label
                    htmlFor="fastfood"
                    className="md:text-[18px] text-sm font-normal"
                  >
                    Fast Food
                  </label>
                </div>
                <div className="flex gap-4 items-center">
                  <input
                    type="radio"
                    name="sort"
                    id="local"
                    value="Local"
                    onChange={(e) => setFilterValue(e.target.value)}
                  />
                  <label
                    htmlFor="local"
                    className="md:text-[18px] text-sm font-normal"
                  >
                    Local
                  </label>
                </div>
                <div className="flex gap-4 items-center">
                  <input
                    type="radio"
                    name="sort"
                    id="african"
                    value="African"
                    onChange={(e) => setFilterValue(e.target.value)}
                  />
                  <label
                    htmlFor="local"
                    className="md:text-[18px] text-sm font-normal"
                  >
                    African
                  </label>
                </div>
                <div className="flex gap-4 items-center">
                  <input
                    type="radio"
                    name="sort"
                    id="casual"
                    value="Casual Dining"
                    onChange={(e) => setFilterValue(e.target.value)}
                  />
                  <label
                    htmlFor="casual"
                    className="md:text-[18px] text-sm font-normal"
                  >
                    Casual
                  </label>
                </div>
                <div className="flex gap-4 items-center">
                  <input
                    type="radio"
                    name="sort"
                    id="mexican"
                    value="Mexican"
                    onChange={(e) => setFilterValue(e.target.value)}
                  />
                  <label
                    htmlFor="mexican"
                    className="md:text-[18px] text-sm font-normal"
                  >
                    Mexican
                  </label>
                </div>
                <div className="flex gap-4 items-center">
                  <input
                    type="radio"
                    name="sort"
                    id="american"
                    value="American"
                    onChange={(e) => setFilterValue(e.target.value)}
                  />
                  <label
                    htmlFor="american"
                    className="md:text-[18px] text-sm font-normal"
                  >
                    American
                  </label>
                </div>
                {/* <div className="flex justify-center items-center gap-4">
                  <Button
                    children="Reset"
                    padding="5px 15px"
                    backgroundColor="#000"
                    className="uppercase"
                    onClick={handleReset}
                  />
                  <Button
                    children="Apply"
                    padding="5px 15px"
                    className="uppercase"
                    onClick={handleApply}
                  />
                </div> */}
              </div>
            )}
            <img
              src={sort}
              alt="sort"
              className="hover:cursor-pointer"
              onClick={handleSort}
            />
            <span className="capitalize font-medium md:text-base text-sm lg:text-xl">
              sort
            </span>
          </div>
        </div>
        <div className="">
          <span className="font-work-sans font-medium text-base lg:text-xl">
            All Restaurants on Kuwiya
          </span>
          <div className="grid md:grid-cols-3 grid-cols-2 py-6 gap-x-4 md:gap-x-8 gap-y-1.5 md:gap-y-14 lg:gap-8">
            {sortedRestaurants?.map((restaurant) => (
              <Card restaurant={restaurant} key={restaurant?.id} />
            ))}
          </div>
        </div>
        <div className="">
          <Pagination
            nPages={nPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </>
  );
};

export default RestaurantsListing;
