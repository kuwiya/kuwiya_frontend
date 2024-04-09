import React, { useEffect, useRef, useState } from "react";
import { Clock, Star } from "./index";
import ArrowIcon from "../../homepage/_components/featured_section/_components/featured_card/arrow_icon";
import { useDiscountedDealsData } from "../../../hooks";
import { Link, useHref, useLocation } from "react-router-dom";

const AvailableDiscCard = () => {
  const [isLeftArrowVisible, setIsLeftArrowVisible] = useState(false);
  const [query, setQuery] = useState("");
  const [locationQuery, setLocationQuery] = useState("");

  const scrollRef = useRef(null);
  const location = useLocation();
  const pathname = useHref();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const queryValue = searchParams.get("q");
    const locationQueryValue = searchParams.get("l");
    if (queryValue) {
      setQuery(queryValue);
    }
    if (locationQueryValue) {
      setLocationQuery(locationQueryValue);
    }
  }, [location.search]);

  const { isLoading, data, isError, error } = useDiscountedDealsData();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error}</div>;
  }

  const availableDiscounts = data?.data;

  const filteredDiscounts = () => {
    if (query) {
      return availableDiscounts.filter((availableDisc) => {
        return availableDisc.mealName
          .toLowerCase()
          .includes(query.toLowerCase());
      });
    } else {
      return availableDiscounts;
    }
  };

  const finalFilteredDiscounts = filteredDiscounts().filter((availableDisc) => {
    if (locationQuery && locationQuery !== "Location") {
      return availableDisc.location
        .toLowerCase()
        .includes(locationQuery.toLowerCase());
    } else {
      return availableDisc;
    }
  });

  //To check for left scroll and to handle the arrow visibility change
  const handleWheel = (e) => {
    if (!scrollRef.current) return;

    const scrollContainer = scrollRef.current;
    if (scrollContainer.scrollLeft < 1) {
      setIsLeftArrowVisible(false);
    } else {
      setIsLeftArrowVisible(true);
    }
  };

  //Handles arrow movement
  const handleLeftArrow = () => {
    if (!scrollRef.current) return;
    const scrollContainer = scrollRef.current;
    scrollContainer.scrollLeft -= 80;
    if (scrollContainer.scrollLeft > 1) {
      setIsLeftArrowVisible(true);
    } else {
      setIsLeftArrowVisible(false);
    }
  };

  const handleRightArrow = () => {
    if (!scrollRef.current) return;
    const scrollContainer = scrollRef.current;
    scrollContainer.scrollLeft += 80;
    if (scrollContainer.scrollLeft > 1) {
      setIsLeftArrowVisible(true);
    } else {
      setIsLeftArrowVisible(false);
    }
  };

  // console.log(scrollCont.scrollWidth);

  return (
    <section
      className={`pl-6 md:pl-10 ${
        pathname !== "/marketplace" ? "px-0" : ""
      } space-y-4`}
    >
      {pathname === "/marketplace" && (
        <h1 className="lg:text-2xl md:text-xl text-base font-semibold text-[#000000] py-3 uppercase">
          Available Discount
        </h1>
      )}
      <div className={`relative `}>
        <div
          ref={scrollRef}
          onWheel={handleWheel}
          className={`bg-[#EFEFEF] flex gap-4 md:gap-8 overflow-x-scroll no-scrollbar p-4 md:p-6`}
          id="scroll"
        >
          {finalFilteredDiscounts.map((availableDisc) => (
            <Link
              to={`/marketplace/${availableDisc.id}`}
              key={availableDisc.id}
              className="bg-white rounded-t-xl"
            >
              <div
                style={{
                  backgroundImage: `url(${availableDisc.mealImageUrl})`,
                }}
                className="relative bg-no-repeat bg-cover h-[256px] w-[300px] lg:w-[350px] rounded-t-xl"
              >
                <p className="flex flex-col gap-1 justify-between text-white text-sm md:text-base">
                  <span className="bg-[#3187FA] w-fit p-3 pr-10 rounded-r-2xl mt-8">
                    #{availableDisc.id} most liked
                  </span>
                  <span className="bg-[#13B959] w-fit p-3 rounded-r-2xl">
                    {availableDisc.discPercentage}% Discount
                  </span>
                </p>
                <div className="absolute bottom-2 right-2 z-10 p-[5px] bg-white rounded-full w-10 h-10 flex items-center justify-center">
                  <img src={availableDisc.restaurantLogoUrl} alt="" />
                </div>
              </div>
              <div className="text-[#00000073] text-[13px] lg:text-base space-y-3 px-3 py-2">
                <h1 className="text-lg md:text-xl lg:text-2xl font-semibold text-black">
                  {availableDisc.mealName}
                </h1>
                <p className="text-[#E18000]">
                  {availableDisc.restaurantName} - Restaurant
                </p>
                <div className="flex gap-2 justify-between items-center">
                  <p className="">₦{availableDisc.price}</p>
                  <p className="bg-[#00000073] h-5 w-0.5"></p>
                  <p className="flex gap-1 items-center justify-between">
                    <span>
                      <Clock />
                    </span>
                    <span>{availableDisc.duration}</span>
                  </p>
                  <p className="flex gap-1 items-center">
                    <span>
                      <Star />
                    </span>
                    <span>{availableDisc.rating}</span>
                    <span>({availableDisc.reviewCount})</span>
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        {pathname === "/marketplace" && (
          <div className="absolute top-[50%] left-0 right-0 translate-y-[-50%] z-[999] hidden md:flex justify-between">
            <div
              onClick={handleLeftArrow}
              className={`${
                isLeftArrowVisible ? "bg-[#101010]" : "bg-transparent"
              } cursor-pointer rotate-180 w-fit px-5 py-4 rounded-[100%]`}
            >
              {isLeftArrowVisible && <ArrowIcon />}
            </div>
            <div
              onClick={handleRightArrow}
              className={`bg-[#101010] cursor-pointer w-fit px-5 py-4 rounded-[100%]`}
            >
              <ArrowIcon />
            </div>
          </div>
        )}
        {pathname === "/marketplace" && (
          <div className="absolute top-[50%] left-0 right-0 translate-y-[-50%] z-[999] flex md:hidden justify-between">
            <div
              onClick={handleLeftArrow}
              className={`${
                isLeftArrowVisible ? "bg-[#101010]" : "bg-transparent"
              } cursor-pointer rotate-180 w-fit px-2 py-2 rounded-[100%]`}
            >
              {isLeftArrowVisible && <ArrowIcon width={14} height={14} />}
            </div>
            <div
              onClick={handleRightArrow}
              className={`bg-[#101010] cursor-pointer w-fit px-2 py-2 rounded-[100%]`}
            >
              <ArrowIcon width={14} height={14} />
            </div>
          </div>
        )}
        {pathname !== "/marketplace" && (
          <div className="absolute top-[50%] left-0 right-0 translate-y-[-50%] z-[999] flex justify-between">
            <div
              onClick={handleLeftArrow}
              className={`${
                isLeftArrowVisible ? "bg-[#101010]" : "bg-transparent"
              } cursor-pointer rotate-180 w-fit px-4 py-3 rounded-[100%]`}
            >
              {isLeftArrowVisible && <ArrowIcon />}
            </div>
            <div
              onClick={handleRightArrow}
              className="bg-[#101010] cursor-pointer w-fit px-4 py-3 rounded-[100%]"
            >
              <ArrowIcon />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AvailableDiscCard;
