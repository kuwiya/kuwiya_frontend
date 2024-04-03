import React, { useEffect, useState } from "react";
import { Restaurants } from "../../constants";
import Card from "./_components/card";
import { Navbar } from "../../components/ui";
import { sort } from "../../constants/images";
import Pagination from "./_components/pagination";
import ArrowLeft from "./_components/arrow";
import { Link } from "react-router-dom";

const RestaurantsListing = () => {
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

  const handleFilter = (e) => {
    const items = currentRestaurant.filter((res) => e.target.value === res.type);
    setFilteredItems(items);
  };
  // console.log(filteredItems);
  const selectArrow = `
  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    background: transparent;
    background-image: url("data:image/svg+xml;utf8,<svg fill='black' height='40' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
    background-repeat: no-repeat;
    background-position-x: 100%;
    background-position-y: 5px;
    border: 1px solid #dfdfdf;
    border-radius: 2px;
    margin-right: 3rem;
    padding: 1rem;
    padding-right: 2rem;
  }`;
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
              <select
                className="pl-4 pr-10 outline-none py-3 mr-8 rounded-[12px] absolute left-[-10rem]"
                onChange={handleFilter}
              >
                <option value="italian">Italian</option>
                <option value="mexican">Mexican</option>
                <option value="french">French</option>
                <option value="chinese">Chinese</option>
                <option value="fastfood">Fast Food</option>
                <option value="local">Local</option>
                <option value="null" selected disabled>
                  By category
                </option>
              </select>
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
          <span className="font-work-sans font-medium text-xl lg:px-[88px]">
            All Restaurants on Kuwiya
          </span>
          <div className="grid md:grid-cols-3 grid-cols-2 w-full py-6 gap-10 lg:px-[88px]">
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
      <style>{selectArrow}</style>
    </>
  );
};

export default RestaurantsListing;
