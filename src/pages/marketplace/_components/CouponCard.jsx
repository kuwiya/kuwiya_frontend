import React, { useEffect, useState } from "react";
import { Star, Clock, Pagination, CouponCardDetail } from "./index";
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
    return (
      <div className="text-base md:text-xl lg:text-2xl text-center font-semibold">
        Loading...
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-base md:text-xl lg:text-2xl text-center font-semibold">
        Error: {error.message}
      </div>
    );
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

  const couponsPerPage =
    finalFilteredCoupons.length && screen.width > 768 ? 4 : 2; // number of coupons per page

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
      <h1 className="lg:text-xl md:text-base text-[11px] font-semibold text-[#000000]">
        Coupon
      </h1>
      <div className="grid md:grid-cols-2 gap-6">
        {currentCoupons.map((detail) => (
          <CouponCardDetail key={detail.id} detail={detail} />
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
