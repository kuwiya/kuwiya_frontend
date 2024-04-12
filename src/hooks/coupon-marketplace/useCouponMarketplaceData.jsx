import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const fetchCouponData = (coupon_id) => {
  return axios.get(`https://elite-orange-cross.glitch.me/couponMarketplace/${coupon_id}`);
};

export const useCouponMarketplaceData = (coupon_id) => {
  return useQuery({
    queryKey: ["coupon-marketplace-deals", coupon_id],
    queryFn: () => fetchCouponData(coupon_id),
  });
};
