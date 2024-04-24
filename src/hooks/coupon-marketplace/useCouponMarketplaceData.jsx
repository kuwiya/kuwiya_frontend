import { useQuery } from "@tanstack/react-query";
import { AxiosInstance } from "../../utils";

const fetchCouponData = (coupon_id) => {
  return AxiosInstance.get(`coupon/coupon-readonly-single-item/${coupon_id}/`);
};

export const useCouponMarketplaceData = (coupon_id) => {
  return useQuery({
    queryKey: ["coupon-marketplace-deals", coupon_id],
    queryFn: () => fetchCouponData(coupon_id),
  });
};
