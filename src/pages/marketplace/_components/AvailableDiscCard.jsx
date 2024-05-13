import React, { useEffect, useRef, useState } from "react";
import { Clock, Star } from "./index";
import ArrowIcon from "../../homepage/_components/featured_section/_components/featured_card/arrow_icon";
import { useDiscountedDealsData } from "../../../hooks";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectLocation } from "../../../redux/slice/locationSlice";
import { selectSearch } from "../../../redux/slice/searchSlice";

const AvailableDiscCard = () => {
  const [isLeftArrowVisible, setIsLeftArrowVisible] = useState(false);
  // const [query, setQuery] = useState("");
  // const [locationQuery, setLocationQuery] = useState("");

  const scrollRef = useRef(null);
  // const location = useLocation();

  // useEffect(() => {
  //   const searchParams = new URLSearchParams(location.search);
  //   const queryValue = searchParams.get("q");
  //   const locationQueryValue = searchParams.get("l");
  //   if (queryValue) {
  //     setQuery(queryValue);
  //   }
  //   if (locationQueryValue) {
  //     setLocationQuery(locationQueryValue);
  //   }
  // }, [location.search]);
  const location = useSelector(selectLocation);
  const search = useSelector(selectSearch);

  const { isLoading, data, isError, error } = useDiscountedDealsData();

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

  const availableDiscounts = data?.data;
  // console.log(availableDiscounts);

  // const filteredDiscounts = query
  //   ? availableDiscounts.filter((availableCoupon) =>
  //       availableCoupon?.item?.item?.toLowerCase().includes(query.toLowerCase())
  //     )
  //   : availableDiscounts;

  // const finalFilteredDiscounts = filteredDiscounts?.filter(
  //   (availableCoupon) => {
  //     if (locationQuery && locationQuery !== "Location") {
  //       return availableCoupon?.restaurant?.address
  //         ?.toLowerCase()
  //         .includes(locationQuery.toLowerCase());
  //     } else {
  //       return availableCoupon;
  //     }
  //   }
  // );

  const filteredDiscounts =
    location === "Location"
      ? availableDiscounts
      : availableDiscounts.filter((availableDiscount) => {
          return availableDiscount?.restaurant?.address
            ?.toLowerCase()
            .includes(location.toLowerCase());
        });

  const finalFilteredDiscounts =
    search === ""
      ? filteredDiscounts
      : filteredDiscounts.filter((discount) => {
          return (
            discount?.item?.item
              ?.toLowerCase()
              .includes(search.toLowerCase()) ||
            discount?.item?.restaurant?.name
              ?.toLowerCase()
              .includes(search.toLowerCase())
          );
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

  if (finalFilteredDiscounts?.length === 0) {
    return (
      <div className="text-center text-sm md:text-base lg:text-xl px-6 md:px-16 lg:px-[136px] font-work-sans text-[#000000] font-normal uppercase">
        No discounts available for this restaurant/meal at the moment, please
        check out other restaurants!
      </div>
    );
  }
  // console.log(scrollCont.scrollWidth);

  return (
    <section className={`px-6 md:px-16 lg:px-[136px] space-y-4`}>
      <h1 className="lg:text-xl md:text-base text-[11px] font-medium text-[#000000] pt-3">
        Available Discount
      </h1>
      <div className={`relative `}>
        <div
          ref={scrollRef}
          onWheel={handleWheel}
          className={`bg-[#EFEFEF] flex gap-[5px] md:gap-5 lg:gap-8 overflow-x-scroll no-scrollbar p-[5px] md:p-4 lg:p-6`}
          id="scroll"
        >
          {finalFilteredDiscounts?.map((availableDisc, index) => (
            <Link
              to={`/marketplace/${availableDisc?.id}`}
              key={availableDisc?.id}
              className="bg-white rounded-[10px] h-fit"
            >
              <div className="w-[148px] md:w-[190px] lg:w-[310px]">
                <div
                  style={{
                    backgroundImage: `url(${availableDisc?.item?.images[0]?.image})`,
                  }}
                  className="relative bg-no-repeat bg-cover h-[82px] md:h-[151px] lg:h-[256px] rounded-t-xl"
                >
                  <p className="flex flex-col gap-1 justify-between text-white text-[8px] md:text-[11px] lg:text-[13px]">
                    <span className="bg-[#3187FA] w-fit p-1 md:p-2 lg:p-3 lg:pr-10 md:pr-7 pr-3 rounded-r-2xl mt-4 md:mt-8">
                      #{index + 1} most liked
                    </span>
                    <span className="bg-[#13B959] w-fit p-1 md:p-2 lg:p-3 rounded-r-2xl">
                      {parseInt(availableDisc?.percentage_off)}% Discount
                    </span>
                  </p>
                  <div className="absolute bottom-2 right-2 z-10 p-[5px] bg-white rounded-full w-10 h-10 hidden lg:flex items-center justify-center">
                    <img src={availableDisc?.restaurant?.logo} alt="" />
                  </div>
                </div>
                <div className="relative text-[#00000073] space-y-[2px] lg:space-y-3 pl-2 pr-1 pt-[2px] pb-2 md:px-3 md:py-2">
                  <h1 className="text-[11px] md:text-base font-semibold text-black line-clamp-1">
                    {availableDisc?.item?.item}
                  </h1>
                  <p className="text-[#E18000] text-[10px] line-clamp-1">
                    {availableDisc?.restaurant?.name} - Restaurant
                  </p>
                  <div className="absolute top-16 right-2 z-10 bg-white rounded-full w-[23px] h-[23px] hidden md:flex lg:hidden items-center justify-center">
                    <img src={availableDisc?.restaurant?.logo} alt="" />
                  </div>
                  <div className="flex gap-x-1 gap-y-[2px] md:gap-2 flex-wrap lg:flex-nowrap lg:justify-between items-center text-[10px] md:text-[11px] lg:text-[13px] font-medium">
                    <p className="">₦{availableDisc?.discounted_price}</p>
                    <p className="bg-[#00000073] h-3 md:h-5 w-[1px]"></p>
                    <p className="flex lg:hidden gap-[2px] items-center">
                      <span>{availableDisc?.number_of_likes} likes</span>
                      <span className="hidden md:block">
                        <Star width={11} height={11} />
                      </span>
                      <span className="md:hidden">
                        <Star width={8} height={8} />
                      </span>
                      <span>({availableDisc?.number_of_ratings})</span>
                    </p>
                    <p className="flex gap-[2px] items-center justify-between">
                      <span className="hidden lg:block">
                        <Clock />
                      </span>
                      <span className="hidden md:block lg:hidden">
                        <Clock width={11} height={11} />
                      </span>
                      <span className="md:hidden">
                        <Clock width={8} height={8} />
                      </span>
                      <span>
                        {availableDisc?.start_date}-{availableDisc?.end_date}
                      </span>
                    </p>
                    <p className="hidden bg-[#00000073] h-3 md:h-5 w-[1px]"></p>
                    <p className="hidden lg:flex gap-[2px] items-center">
                      <span>{availableDisc?.number_of_likes} likes</span>
                      <span className="hidden lg:block">
                        <Star />
                      </span>
                      <span className="hidden md:block lg:hidden">
                        <Star width={11} height={11} />
                      </span>
                      <span className="md:hidden">
                        <Star width={8} height={8} />
                      </span>
                      <span>({availableDisc?.number_of_ratings})</span>
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="absolute top-[35%] left-0 right-0 translate-y-[-50%] z-10 flex justify-between">
          <div
            onClick={handleLeftArrow}
            className={`${
              isLeftArrowVisible ? "bg-[#101010]" : "bg-transparent"
            } cursor-pointer rotate-180 w-fit p-2 md:px-5 md:py-4 rounded-[100%]`}
          >
            {isLeftArrowVisible && (
              <ArrowIcon
                width={screen.width < 768 && 12}
                height={screen.width < 768 && 12}
              />
            )}
          </div>
          <div
            onClick={handleRightArrow}
            className={`bg-[#101010] cursor-pointer w-fit p-2 md:px-5 md:py-4 rounded-[100%]`}
          >
            <ArrowIcon
              width={screen.width < 768 && 12}
              height={screen.width < 768 && 12}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AvailableDiscCard;
