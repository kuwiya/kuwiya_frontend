import React, { useState } from "react";
import { useCouponsMarketplaceData } from "../../hooks";
import CouponCard from "../ui/coupon-card";
import { Pagination } from "../../pages/marketplace/_components";

const CouponsFiltering = ({ restName }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const couponsPerPage = screen.width < 768 ? 2 : 4;

  const { isLoading, data, isError, error } = useCouponsMarketplaceData();

  if (isLoading) {
    return <div className="text-center uppercase">Loading...</div>;
  }

  if (isError) {
    return <div className="text-center uppercase">Error: {error.message}</div>;
  }

  const coupons = data?.data.filter((detail) => detail.restName === restName);
  // console.log(data.data)
  if (coupons.length === 0) {
    return (
      <div className="text-center uppercase">
        No similar coupons available at this moment
      </div>
    );
  }

  const nPages = Math.ceil(coupons.length / couponsPerPage);

  // pagination
  const lastCouponIndex = currentPage * couponsPerPage;
  const firstCouponIndex = lastCouponIndex - couponsPerPage;
  const currentCoupons = coupons.slice(firstCouponIndex, lastCouponIndex);

  return (
    <section className="my-16 mb-20 space-y-5">
      <div className="grid md:grid-cols-2 gap-6">
        {currentCoupons.map((detail) => (
          <CouponCard key={detail.id} detail={detail} />
        ))}
      </div>
      <div>
        <Pagination
          nPages={nPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </section>
  );
};

export default CouponsFiltering;
