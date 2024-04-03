import React, { useState } from "react";
import { Restaurants } from "../../constants";
import Card from './_components/card'
import { Navbar } from "../../components/ui";
import { sort } from "../../constants/images";
import Pagination from "./_components/pagination";
import ArrowLeft from "./_components/arrow";
import { Link } from "react-router-dom";

const RestaurantsListing = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [restaurantPerPage] = useState(9);

  // pagination
  const indexOfLastRestaurant = currentPage * restaurantPerPage;
  const indexOfFirstRestaurant = indexOfLastRestaurant - restaurantPerPage;
  const currentRestaurant = Restaurants.slice(
    indexOfFirstRestaurant,
    indexOfLastRestaurant
  );
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
          <span className="font-work-sans font-medium text-xl lg:px-[88px]">
            All Restaurants on Kuwiya
          </span>
          <div className="grid md:grid-cols-3 grid-cols-2 w-full py-6 gap-10 lg:px-[88px]">
            {currentRestaurant.map((restaurant) => (
              <Card restaurant={restaurant} />
            ))}
          </div>
        </div>
        <Pagination
          nPages={nPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </>
  );
};

export default RestaurantsListing;
