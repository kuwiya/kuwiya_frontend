import React, { useEffect, useState } from "react";
import { Restaurants } from "../../constants";
import Card from "./_components/card";
import { Button, Navbar } from "../../components/ui";
import { sort } from "../../constants/images";
import Pagination from "./_components/pagination";
import ArrowLeft from "./_components/arrow";
import { Link } from "react-router-dom";

const RestaurantsListing = () => {
  const [filterValue, setFilterValue] = useState("");
  const [sortItems, setSortItems] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredItems, setFilteredItems] = useState([]);
  const [restaurantPerPage] = useState(9);

  // pagination
  const indexOfLastRestaurant = currentPage * restaurantPerPage;
  const indexOfFirstRestaurant = indexOfLastRestaurant - restaurantPerPage;
  const currentRestaurant = Restaurants.slice(
    indexOfFirstRestaurant,
    indexOfLastRestaurant
  );

  useEffect(() => {
    setFilteredItems(currentRestaurant);
  }, []);

  const nPages = Math.ceil(Restaurants.length / restaurantPerPage);

  const handleSort = () => {
    setSortItems(!sortItems);
  };
  const handleApply = () => {
    setSortItems(false);
    handleFilter(filterValue);
  };
  const handleReset = () => {
    setSortItems(false);
    setFilteredItems(currentRestaurant);
  };

  const handleFilter = (e) => {
    const items = currentRestaurant.filter((res) => e === res.type);
    setFilteredItems(items);
  };

  return (
    <>
      <Navbar scrolling bgBlack />

      <div className="md:px-10 px-10 bg-primary py-28">
        <div className="flex justify-between w-full font-work-sans py-10">
          <div className="flex items-center space-x-3">
            <Link to={"/"} className="hover:cursor-pointer">
              <ArrowLeft />
            </Link>
            <span className="uppercase font-semibold text-base lg:text-xl">restaurant</span>
          </div>
          <div className="flex items-center space-x-3 relative">
            {sortItems && (
              <div className="bg-primary space-y-4 border px-6 py-4 absolute top-[4rem] right-[-12px] animate-slide_up z-50">
                <div className="flex justify-between items-center">
                  <span class>Sort</span>
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
                    id="fastfood"
                    value="fastfood"
                    onChange={(e) => setFilterValue(e.target.value)}
                  />
                  <label htmlFor="italian" className="md:text-[18px] text-sm font-normal">
                    Fast Food
                  </label>
                </div>
                <div className="flex gap-4 items-center">
                  <input
                    type="radio"
                    name="sort"
                    id="local"
                    value="local"
                    onChange={(e) => setFilterValue(e.target.value)}
                  />
                  <label htmlFor="" className="md:text-[18px] text-sm font-normal">
                    Local Restaurants
                  </label>
                </div>
                <div className="flex gap-4 items-center">
                  <input
                    type="radio"
                    name="sort"
                    id="chinese"
                    value="chinese"
                    onChange={(e) => setFilterValue(e.target.value)}
                  />
                  <label htmlFor="" className="md:text-[18px] text-sm font-normal">
                    Chinese Restaurants
                  </label>
                </div>
                <div className="flex gap-4 items-center">
                  <input
                    type="radio"
                    name="sort"
                    id="italian"
                    value="italian"
                    onChange={(e) => setFilterValue(e.target.value)}
                  />
                  <label htmlFor="" className="md:text-[18px] text-sm font-normal">
                    Italian Restaurants
                  </label>
                </div>
                <div className="flex justify-center items-center gap-4">
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
                </div>
              </div>
            )}
            <img
              src={sort}
              alt="sort"
              className="hover:cursor-pointer"
              onClick={handleSort}
            />
            <span className="capitalize font-medium md:text-base text-sm lg:text-xl">sort</span>
          </div>
        </div>
        <div className="xl:px-40 md:px-10 px-0">
          <span className="font-work-sans font-medium text-base lg:text-xl lg:px-[88px]">
            All Restaurants on Kuwiya
          </span>
          <div className="grid md:grid-cols-3 grid-cols-2 w-full py-6 gap-8 md:gap-12 lg:px-[88px]">
            {filteredItems?.map((restaurant) => (
              <Card restaurant={restaurant} key={restaurant.id} />
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
