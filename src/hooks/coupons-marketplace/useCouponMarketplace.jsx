import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const fetchCouponData = () => {
  return axios.get("http://localhost:4000/couponMarketplace");
};

export const useCouponsMarketplaceData = () => {
  return useQuery({
    queryKey: ["coupon-marketplace-deals"],
    queryFn: fetchCouponData,
  });
};
