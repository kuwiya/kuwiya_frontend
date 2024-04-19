import React, { useState } from "react";
import { RestaurantItems } from "../../../../constants";
import { heart, star, gps } from "../../../../constants/images";
import Pagination from "./_components/pagination";
import { Link } from "react-router-dom";
import { LikeIcon } from "../../../../assets/icons";
import { Star } from "../index";

const AllRestaurants = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [restaurantPerPage] = useState(screen.width < 768 ? 4 : 9);

  // pagination
  const indexOfLastRestaurant = currentPage * restaurantPerPage;
  const indexOfFirstRestaurant = indexOfLastRestaurant - restaurantPerPage;
  const currentRestaurant = RestaurantItems.slice(
    indexOfFirstRestaurant,
    indexOfLastRestaurant
  );
  const nPages = Math.ceil(RestaurantItems.length / restaurantPerPage);

  return (
    <div className="px-6 md:px-16 lg:px-[136px] pt-4 md:pt-8 py-6 bg-lightGray">
      <span className="font-work-sans font-semibold text-[11px] md:text-xl lg:text-2xl">
        All Items on Kuwiya
      </span>
      <div className="grid md:grid-cols-3 grid-cols-2 pt-4 pb-6 md:py-6 gap-3 md:gap-5">
        {currentRestaurant.map((restaurant) => (
          <div
            // to={`/restaurants/${restaurant.id}`}
            className="bg-primary rounded-t-lg flex flex-col hover:cursor-pointer hover:scale-105 transition-all ease-in"
            key={restaurant.id}
          >
            <Link to={`/restaurants/${restaurant.id}`}>
              <img
                src={restaurant.image}
                alt="restaurant logo"
                className="w-full"
              />
            </Link>
            <div className=" flex flex-col gap-2 justify-between p-2 md:p-3 h-fit">
              <div className="flex gap-x-2 justify-between font-work-sans">
                <span className="font-lato text-xs md:text-sm lg:text-base font-medium">
                  {restaurant.title}
                </span>
              </div>
              <div className="text-[11px] md:text-sm flex items-center justify-between pt-1 md:pt-4 font-work-sans">
                <div className=" text-black opacity-80 flex items-center gap-2">
                  <span className="hidden lg:block">
                    <Star />
                  </span>
                  <span className="hidden md:block lg:hidden">
                    <Star width={13} height={13} />
                  </span>
                  <span className="md:hidden">
                    <Star width={10} height={10} />
                  </span>
                  {restaurant.ratings}
                </div>
                <div className=" text-black opacity-80">
                  <span className="hidden lg:block">
                    <LikeIcon />
                  </span>
                  <span className="hidden md:block lg:hidden">
                    <LikeIcon width={13} height={13} />
                  </span>
                  <span className="md:hidden">
                    <LikeIcon width={10} height={10} />
                  </span>
                </div>
              </div>
            </div>
          </div>
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
