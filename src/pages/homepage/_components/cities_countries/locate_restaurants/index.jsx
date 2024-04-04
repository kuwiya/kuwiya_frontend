import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Restaurants } from "../../../../../constants";
import { Button, Navbar } from "../../../../../components/ui";
import ArrowLeft from "../../../../all_restaurants/_components/arrow";
import { sort } from "../../../../../constants/images";
import Pagination from "../../../../all_restaurants/_components/pagination";
import Card from "../../../../all_restaurants/_components/card";

const LocateRestaurants = () => {
  const { location } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [restaurantPerPage] = useState(9);
  const [filterValue, setFilterValue] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [sortItems, setSortItems] = useState(false);

  const filteredItems = () => {
    const items = filteredRestaurants
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
  useEffect(() => {
    setFilteredRestaurants(currentRestaurant);
  }, []);
  const item = currentRestaurant?.filter(
    (restaurant) => restaurant.location === location
  );

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
    setFilteredRestaurants(currentRestaurant);
  };
  const handleFilter = (e) => {
    const items = item.filter((res) => e === res.type);
    setFilteredRestaurants(items);
    console.log(items)
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
          <div className="flex items-center space-x-3 relative">
            {sortItems && (
              <div className="bg-primary space-y-4 border px-6 py-4 absolute top-[4rem] right-[-12px] animate-slide_up z-50">
                <div className="flex justify-between items-center">
                  <span>Sort</span>
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
                  <label htmlFor="italian" className="text-[18px] font-normal">
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
                  <label htmlFor="" className="text-[18px] font-normal">
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
                  <label htmlFor="" className="text-[18px] font-normal">
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
                  <label htmlFor="" className="text-[18px] font-normal">
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
            <span className="capitalize font-medium text-xl">sort</span>
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
