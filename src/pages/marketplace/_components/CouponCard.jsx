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

  const couponsPerPage = finalFilteredCoupons.length > 4 ? 4 : 2; // number of coupons per page
  // pagination
  const lastCouponIndex = currentPage * couponsPerPage;
  const firstCouponIndex = lastCouponIndex - couponsPerPage;
  const currentCoupons = finalFilteredCoupons.slice(
    firstCouponIndex,
    lastCouponIndex
  );

  const nPages = Math.ceil(finalFilteredCoupons.length / couponsPerPage);

  return (
    <section className="px-6 md:px-10 my-16 mb-20 space-y-5 font-work-sans">
      <h1 className="lg:text-2xl md:text-xl text-base font-semibold text-[#000000] uppercase">
        Coupon
      </h1>
      <div className="grid lg:grid-cols-2 gap-6">
        {currentCoupons.map((detail) => (
          <Link
            to={`/coupon/${detail.id}`}
            key={detail.id}
            className="flex relative"
          >
            <div className="w-10 h-10 rounded-full bg-white absolute top-[50%] -left-5 -translate-y-[50%]"></div>
            <div className="flex">
              <div className="flex-[70%] flex gap-4 items-center rounded-xl md:rounded-r-none text-[#000000] bg-gradient-to-r from-[#FBD199] from-[0%] to-[#E18000] to-[100%]">
                <div className="ml-10 md:text-xl lg:text-2xl font-semibold text-[#000000] flex flex-col gap-2 justify-between items-center border-[1.5px] border-dashed border-[#000000] rounded-xl py-4">
                  <h1 className="-rotate-90">{detail.couponNum}</h1>
                  <span className="bg-[#000000] h-2 w-0.5"></span>
                  <h1 className="-rotate-90">{detail.couponCode}</h1>
                </div>
                <span className="h-full border-[1px] border-white border-dashed"></span>
                <div className="p-5 space-y-2">
                  <p className="flex gap-2 items-center">
                    <img src={detail.restLogo} alt="" />{" "}
                    <span>{detail.restName}</span>
                  </p>
                  <h2 className="text-lg md:text-xl font-medium">
                    {detail.mealName}
                  </h2>
                  <div className="space-y-1 text-sm md:text-base">
                    <div className="flex gap-3 items-center">
                      <p className="">₦{detail.originalPrice}</p>
                      <p className="bg-[#000000] h-5 w-0.5"></p>
                      <p className="">
                        {detail.priceOff}{" "}
                        <sup className="text-[9px] font-medium text-white uppercase">
                          off
                        </sup>
                      </p>
                    </div>
                    <p className="text-[#00000038] font-medium">
                      {detail.mealInfo}
                    </p>
                    <div className="flex flex-col md:flex-row gap-3 md:items-center">
                      <p className="flex gap-1 items-center md:justify-between">
                        <span>
                          <Clock />
                        </span>
                        <span>{detail.duration}</span>
                      </p>
                      <p className="flex gap-1 items-center">
                        <span>
                          <Star />
                        </span>
                        <span>{detail.rating}</span>
                        <span>({detail.rating_count})</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-[30%] relative hidden md:block">
                <img
                  src={detail.mealImage}
                  className="rounded-r-xl h-full object-cover"
                  alt=""
                />
                <span className="absolute top-0 left-0 bg-[#3187FA] text-white w-fit p-3 pr-8 rounded-r-2xl mt-2 uppercase">
                  #{detail.priceOff} off
                </span>
              </div>
            </div>
            <div className="w-10 h-10 rounded-full bg-white absolute top-[50%] -right-5 -translate-y-[50%]"></div>
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
