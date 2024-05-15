import React, { useEffect, useState } from "react";
import { Star, Clock, Pagination, CouponCardDetail } from "./index";
import { Link, useLocation } from "react-router-dom";
import { useCouponsMarketplaceData } from "../../../hooks";
import { useDispatch, useSelector } from "react-redux";
import {
  selectLocation,
  setLocation,
} from "../../../redux/slice/locationSlice";
import { selectSearch, setSearch } from "../../../redux/slice/searchSlice";

const CouponCard = () => {
  const [currentPage, setCurrentPage] = useState(1);
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

  const filteredCoupons =
    location === "Location" || ""
      ? coupons
      : coupons?.filter((availableCoupon) => {
          return availableCoupon?.restaurant?.address
            ?.toLowerCase()
            .includes(location.toLowerCase());
        });

  const finalFilteredCoupons =
    search === ""
      ? filteredCoupons
      : filteredCoupons?.filter((availableCoupon) => {
          return (
            availableCoupon?.item?.item
              ?.toLowerCase()
              .includes(search.toLowerCase()) ||
            availableCoupon?.item?.restaurant?.name
              ?.toLowerCase()
              .includes(search.toLowerCase())
          );
        });

  const couponsPerPage = finalFilteredCoupons && screen.width > 768 ? 4 : 2; // number of coupons per page

  // const couponsPerPage = coupons?.length && screen.width > 768 ? 4 : 2; // number of coupons per page

  // pagination
  const lastCouponIndex = currentPage * couponsPerPage;
  const firstCouponIndex = lastCouponIndex - couponsPerPage;
  const currentCoupons = finalFilteredCoupons?.slice(
    firstCouponIndex,
    lastCouponIndex
  );

  const nPages = Math.ceil(finalFilteredCoupons?.length / couponsPerPage);

  if (currentCoupons?.length === 0) {
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
        {currentCoupons?.map((detail) => (
          <CouponCardDetail key={detail?.id} detail={detail} />
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
