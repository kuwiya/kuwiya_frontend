import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const fetchCouponData = (coupon_id) => {
  return axios.get(`https://elite-orange-cross.glitch.me/claimcoupon/${coupon_id}`);
};

export const useClaimCoupon = (coupon_id) => {
  return useQuery({
    queryKey: ["coupon-claim", coupon_id],
    queryFn: () => fetchCouponData(coupon_id),
  });
};

const fetchCouponDataAll = () => {
  return axios.get(`https://elite-orange-cross.glitch.me/claimcoupon/`);
};

export const useClaimCouponAll = () => {
  return useQuery({
    queryKey: ["coupon-claim"],
    queryFn: () => fetchCouponDataAll(),
  });
};
