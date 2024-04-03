import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Restaurants } from "../../../../../constants";
import { Navbar } from "../../../../../components/ui";
import ArrowLeft from "../../../../all_restaurants/_components/arrow";
import { sort } from "../../../../../constants/images";
import Pagination from "../../../../all_restaurants/_components/pagination";
import Card from "../../../../all_restaurants/_components/card";

const LocateRestaurants = () => {
  const { location } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [restaurantPerPage] = useState(9);

  const filteredItems = () => {
    const items = currentRestaurant
      ?.filter((restaurant) => restaurant.location === location)
      .map((restaurant) => (
        <Card restaurant={restaurant} key={restaurant.id} />
      ));
    return items;
  };
  // pagination
  const indexOfLastRestaurant = currentPage * restaurantPerPage;
  const indexOfFirstRestaurant = indexOfLastRestaurant - restaurantPerPage;
  const currentRestaurant = Restaurants.slice(
    indexOfFirstRestaurant,
    indexOfLastRestaurant
  );
  const item = currentRestaurant
  ?.filter((restaurant) => restaurant.location === location)

  const nPages = Math.ceil(Restaurants.length / restaurantPerPage);

  const handleSort = () => {
    console.log("sort clicked");
  };
  return (
    <>
      <Navbar scrolling bgBlack />

      <div className="px-10 bg-primary py-28">
        <div className="flex justify-between w-full font-work-sans py-10">
          <div className="flex items-center space-x-3">
            <Link to={"/"} className="hover:cursor-pointer">
              <ArrowLeft />
            </Link>
            <span className="uppercase font-semibold text-xl">restaurant</span>
          </div>
          <div className="flex items-center space-x-3">
            <span className="capitalize font-medium text-xl">sort</span>
            <img
              src={sort}
              alt="sort"
              className="hover:cursor-pointer"
              onClick={handleSort}
            />
          </div>
        </div>
        <div className="xl:px-40 md:px-20">
          <span className="font-work-sans font-medium text-xl lg:px-[88px] capitalize">
            All Restaurants in {location}
          </span>
          <div className="grid md:grid-cols-3 grid-cols-2 w-full py-6 gap-10 lg:px-[88px]">
            {location !== "" && filteredItems()}
          </div>
        </div>
        {item.length === 0 && (
          <span className="flex justify-center py-10 uppercase text-xl">
            not available, check back later
          </span>
        )}
        <Pagination
          nPages={nPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </>
  );
};

export default LocateRestaurants;
