import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const fetchCouponData = (coupon_id) => {
  return axios.get(`http://localhost:4000/claimcoupon/${coupon_id}`);
};

export const useClaimCoupon = (coupon_id) => {
  return useQuery({
    queryKey: ["coupon-claim", coupon_id],
    queryFn: () => fetchCouponData(coupon_id),
  });
};

const fetchCouponDataAll = () => {
  return axios.get(`http://localhost:4000/claimcoupon/`);
};

export const useClaimCouponAll = () => {
  return useQuery({
    queryKey: ["coupon-claim"],
    queryFn: () => fetchCouponDataAll(),
  });
};
