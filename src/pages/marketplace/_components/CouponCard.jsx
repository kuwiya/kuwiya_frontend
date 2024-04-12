import React, { useEffect, useState } from "react";
import { Star, Clock, Pagination } from "./index";
import { Link, useLocation } from "react-router-dom";
import { useCouponsMarketplaceData } from "../../../hooks";

const CouponCard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [query, setQuery] = useState("");
  const [locationQuery, setLocationQuery] = useState("");

  const location = useLocation();

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

  const { isLoading, data, isError, error } = useCouponsMarketplaceData();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  const coupons = data?.data;

  const filteredCoupons = query
    ? coupons.filter((availableCoupon) =>
        availableCoupon.mealName.toLowerCase().includes(query.toLowerCase())
      )
    : coupons;

  const finalFilteredCoupons = filteredCoupons.filter((availableCoupon) => {
    if (locationQuery && locationQuery !== "Location") {
      return availableCoupon.location
        .toLowerCase()
        .includes(locationQuery.toLowerCase());
    } else {
      return availableCoupon;
    }
  });

  const couponsPerPage = finalFilteredCoupons.length >= 4 ? 4 : 2; // number of coupons per page

  // const couponsPerPage = finalFilteredCoupons.length > 4 ? 4 : 2; // number of coupons per page

  // pagination
  const lastCouponIndex = currentPage * couponsPerPage;
  const firstCouponIndex = lastCouponIndex - couponsPerPage;
  const currentCoupons = finalFilteredCoupons.slice(
    firstCouponIndex,
    lastCouponIndex
  );

  const nPages = Math.ceil(finalFilteredCoupons.length / couponsPerPage);

  if (currentCoupons.length === 0) {
    return (
      <div className="text-center text-sm md:text-base lg:text-xl font-work-sans text-[#000000] font-normal uppercase px-6 md:px-16 lg:px-[136px]">
        No coupons available for this restaurant/meal at the moment, please
        check out other restaurants!
      </div>
    );
  }

  return (
    <section className="px-6 md:px-16 lg:px-[136px] my-16 mb-20 space-y-5 font-work-sans">
      <h1 className="lg:text-xl md:text-base text-[13px] font-semibold text-[#000000]">
        Coupon
      </h1>
      <div className="grid grid-cols-2 gap-2 md:gap-6">
        {currentCoupons.map((detail) => (
          <Link
            to={`/coupon/${detail.id}`}
            key={detail.id}
            className="flex relative"
          >
            <div className="w-8 h-7 md:w-10 md:h-10 rounded-full bg-white absolute top-[50%] -left-5 -translate-y-[50%]"></div>
            <div className="flex w-auto">
              <div className="flex-[70%] flex gap-1 md:gap-2 lg:gap-4 items-center rounded-l-xl text-[#000000] bg-gradient-to-r from-[#FBD199] from-[0%] to-[#E18000] to-[100%]">
                <div className="ml-4 md:ml-7 lg:ml-8 text-[7px] md:text-[10px] lg:text-xl font-semibold text-[#000000] flex flex-col gap-1 lg:gap-2 justify-between items-center border-[1.5px] border-dashed border-[#000000] rounded-xl py-4 md:px-1 lg:px-0">
                  <h1 className="-rotate-90">{detail.couponNum}</h1>
                  <span className="bg-[#000000] h-2 w-0.5"></span>
                  <h1 className="-rotate-90">{detail.couponCode}</h1>
                </div>
                <span className="h-full border-[1px] border-white border-dashed"></span>
                <div className="py-3 space-y-0">
                  <p className="flex gap-2 items-center text-[6px] md:text-[10px] lg:text-sm">
                    <img
                      src={detail.restLogo}
                      alt=""
                      className="w-4 md:w-[18px] lg:w-[30px]"
                    />{" "}
                    <span>{detail.restName}</span>
                  </p>
                  <h2 className="text-[7px] md:text-[11px] lg:text-base font-medium">
                    {detail.mealName}
                  </h2>
                  <div className="space-y-1 text-[5px] md:text-[7px] lg:text-sm">
                    <div className="flex gap-3 items-center">
                      <p className="">₦{detail.originalPrice}</p>
                      <p className="bg-[#000000] h-3 lg:h-5 w-[1px]"></p>
                      <p className="">
                        ₦{detail.priceOff}{" "}
                        <sup className="text-[5px] md:text-[7px] lg:text-[8px] font-medium text-white uppercase">
                          off
                        </sup>
                      </p>
                    </div>
                    <p className="text-[#00000038] text-[5px] lg:text-sm font-medium">
                      {detail.mealInfo}
                    </p>
                    <div className="flex gap-3 md:items-center text-[5px] md:text-[7px] lg:text-sm">
                      <p className="flex gap-1 items-center md:justify-between">
                        <span className="hidden lg:block">
                          <Clock />
                        </span>
                        <span className="lg:hidden">
                          <Clock width={6} height={6} />
                        </span>
                        <span className="whitespace-nowrap">
                          {detail.duration}
                        </span>
                      </p>
                      <p className="flex gap-1 items-center">
                        <span className="hidden lg:block">
                          <Star />
                        </span>
                        <span className="lg:hidden">
                          {" "}
                          <Star width={10} height={6} />
                        </span>
                        <span>{detail.rating}</span>
                        <span>({detail.rating_count})</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-[30%] relative">
                <img
                  src={detail.mealImage}
                  className="rounded-r-xl h-full object-cover"
                  alt=""
                />
                <span className="absolute top-0 left-0 bg-[#3187FA] text-white text-[7px] lg:text-[13px] w-fit p-1 md:p-2 lg:p-3 pr-3 md:pr-5 lg:pr-8 rounded-r-2xl mt-2 uppercase">
                  #{detail.priceOff} off
                </span>
              </div>
            </div>
            <div className="w-8 h-7 md:w-10 md:h-10 rounded-full bg-white absolute top-[50%] -right-5 -translate-y-[50%]"></div>
          </Link>
        ))}
      </div>
      <div className="overflow-x-scroll no-scrollbar">
        <Pagination
          nPages={nPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </section>
  );
};

export default CouponCard;
