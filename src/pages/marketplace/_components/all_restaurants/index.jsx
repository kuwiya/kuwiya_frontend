import React, { useEffect, useState } from "react";
import { RestaurantItems } from "../../../../constants";
import { heart, star, gps } from "../../../../constants/images";
import Pagination from "./_components/pagination";
import { Link, useLocation } from "react-router-dom";
import { LikeIcon } from "../../../../assets/icons";
import { Star } from "../index";
import { useAllItemsData } from "../../../../hooks";
import {
  selectLocation,
  setLocation,
} from "../../../../redux/slice/locationSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectSearch, setSearch } from "../../../../redux/slice/searchSlice";

const AllRestaurants = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [AllItemsPerPage] = useState(screen.width < 768 ? 4 : 9);
  const [query, setQuery] = useState("");
  const [locationQuery, setLocationQuery] = useState("");

  const loct = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    const searchParams = new URLSearchParams(loct.search);
    const queryValue = searchParams.get("query");
    const locationQueryValue = searchParams.get("loc");
    if (queryValue) {
      setQuery(queryValue);
      dispatch(setSearch(queryValue));
    }
    if (locationQueryValue) {
      setLocationQuery(locationQueryValue);
      dispatch(setLocation(locationQueryValue));
    }
  }, [loct.search]);

  const location = locationQuery;
  const search = query;

  const { isLoading, data, isError, error } = useAllItemsData();

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
        Error: {error}
      </div>
    );
  }

  const AllItems = data?.data;

  const filteredItems =
    location === "Location" || ""
      ? AllItems
      : AllItems?.filter((item) => {
          return item?.restaurant?.address
            ?.toLowerCase()
            .includes(location.toLowerCase());
        });

  const finalFilteredItems =
    search === ""
      ? filteredItems
      : filteredItems?.filter((item) => {
          return (
            item?.item?.toLowerCase().includes(search.toLowerCase()) ||
            item?.restaurant?.name?.toLowerCase().includes(search.toLowerCase())
          );
        });

  // console.log(finalFilteredItems);

  // pagination
  // const indexOfLastItem = currentPage * AllItemsPerPage;
  // const indexOfFirstItem = indexOfLastItem - AllItemsPerPage;
  // const currentItems = AllItems?.slice(indexOfFirstItem, indexOfLastItem);
  // const nPages = Math.ceil(AllItems?.length / AllItemsPerPage);

  const indexOfLastItem = currentPage * AllItemsPerPage;
  const indexOfFirstItem = indexOfLastItem - AllItemsPerPage;
  const currentItems = finalFilteredItems?.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const nPages = Math.ceil(finalFilteredItems?.length / AllItemsPerPage);

  return (
    <div className="px-6 md:px-16 lg:px-[136px] pt-4 md:pt-8 py-6 bg-lightGray">
      <span className="font-work-sans font-semibold text-[11px] md:text-xl lg:text-2xl">
        All Items on Kuwiya
      </span>
      {currentItems?.length > 0 ? (
        <div className="grid md:grid-cols-3 grid-cols-2 pt-4 pb-6 md:py-6 gap-3 md:gap-5">
          {currentItems?.map((item) => (
            <div
              className="bg-primary rounded-[10px] h-fit flex flex-col cursor-pointer hover:scale-105 transition-all ease-in pb-2"
              key={item?.id}
            >
              <div className="h-[98px] md:h-[121px]">
                {/* <Link to={`/restaurants/${restaurant.id}`}> */}
                <img
                  src={item?.images[0].image}
                  alt="restaurant logo"
                  className="w-full h-full object-cover rounded-t-[10px]"
                />
                {/* </Link> */}
              </div>
              <div className=" flex flex-col gap-2 px-2 md:px-3 lg:px-4 pt-2">
                <div className="flex gap-x-2 justify-between font-work-sans">
                  <span className="font-lato text-xs md:text-sm lg:text-base font-medium line-clamp-1">
                    {item?.item}
                  </span>
                  {/* <div className="hidden lg:block text-black opacity-80">
                  <span className="hidden lg:block">
                    <LikeIcon />
                  </span>
                </div> */}
                </div>
                <span className="font-lato text-xs md:text-sm lg:text-base font-medium line-clamp-1">
                  {item?.restaurant?.name} - {item?.restaurant?.location}
                </span>
                <div className="text-[11px] md:text-sm flex items-center lg:justify-between gap-3 pt-1 md:pt-4 font-work-sans">
                  <div className="text-black">
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
                  <p
                    className={`lg:hidden h-[10px] border-[1px] border-[#00000080]`}
                  ></p>
                  <div className=" text-[#000000BA] flex items-center gap-[2px] lg:gap-1">
                    <span className="hidden lg:block">
                      <Star />
                    </span>
                    <span className="hidden md:block lg:hidden">
                      <Star width={13} height={13} />
                    </span>
                    <span className="md:hidden">
                      <Star width={11} height={11} />
                    </span>
                    {item?.ratings}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-xl font-semibold">No Items Found</div>
      )}
      {currentItems?.length > 0 && (
        <Pagination
          nPages={nPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}
    </div>
  );
};

export default AllRestaurants;
