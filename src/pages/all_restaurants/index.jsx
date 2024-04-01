import React, { useState } from "react";
import { Restaurants } from "../../constants";
import { Navbar } from "../../components/ui";
import { heart, star, gps, sort } from "../../constants/images";
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
        <span className="font-work-sans font-medium text-xl lg:px-[88px]">
          All Restaurants on Kuwiya
        </span>
        <div className="grid md:grid-cols-3 grid-cols-2 w-full py-6 gap-10 lg:px-[88px]">
          {currentRestaurant.map((restaurant) => (
            <Link
              to={`/restaurants/${restaurant.id}`}
              className="flex flex-col bg-primary w-auto hover:cursor-pointer hover:scale-105 transition-all ease-in"
              key={restaurant.id}
            >
              <img src={restaurant.image} alt="restaurant logo" />
              <div className="flex flex-col p-2 w-full">
                <div className="flex items-center justify-between font-work-sans">
                  <span className="font-lato md:text-sm xl:text-base font-medium">
                    {restaurant.title}
                  </span>
                  <img src={heart} alt="like" />
                </div>
                <div className="flex items-start flex-col md:flex-row md:items-center justify-between pt-4 font-work-sans">
                  <div className="flex items-center xl:space-x-2 md:space-x-1">
                    <img src={gps} alt="distance" />
                    <div className="xl:text-base md:text-sm text-black opacity-80 flex items-center">
                      {restaurant.distance}
                      <div className="bg-black opacity-50 w-[0.1rem] h-6 mx-2 xl:mx-4" />
                      {restaurant.status}
                    </div>
                  </div>
                  <div className="text-base text-black opacity-80 flex items-center gap-2">
                    <img src={star} alt="ratings" />
                    {restaurant.ratings}
                  </div>
                </div>
              </div>
            </Link>
          ))}
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
