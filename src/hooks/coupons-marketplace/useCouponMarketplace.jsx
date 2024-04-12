import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const fetchCouponData = () => {
  return axios.get("https://elite-orange-cross.glitch.me/couponMarketplace");
};

export const useCouponsMarketplaceData = () => {
  return useQuery({
    queryKey: ["coupon-marketplace-deals"],
    queryFn: fetchCouponData,
  });
};
