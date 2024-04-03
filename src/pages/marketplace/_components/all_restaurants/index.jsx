import React, { useState } from "react";
import { RestaurantItems } from "../../../../constants";
import { heart, star, gps } from "../../../../constants/images";
import Pagination from "./_components/pagination";
import { Link } from "react-router-dom";

const AllRestaurants = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [restaurantPerPage] = useState(9);

  // pagination
  const indexOfLastRestaurant = currentPage * restaurantPerPage;
  const indexOfFirstRestaurant = indexOfLastRestaurant - restaurantPerPage;
  const currentRestaurant = RestaurantItems.slice(
    indexOfFirstRestaurant,
    indexOfLastRestaurant
  );
  const nPages = Math.ceil(RestaurantItems.length / restaurantPerPage);

  return (
    <div className="px-20 xl:px-48 lg:px-32 py-20 bg-lightGray">
      <span className="font-work-sans font-medium text-xl">
        All Items on Kuwiya
      </span>
      <div className="grid md:grid-cols-3 grid-cols-2 w-full py-6 gap-10">
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
                  <div className="xl:text-base md:text-sm text-black opacity-80">
                    {restaurant.status}
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
  );
};

export default AllRestaurants;
