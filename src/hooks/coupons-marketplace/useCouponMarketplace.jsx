import { useQuery } from "@tanstack/react-query";
import { AxiosInstance } from "../../utils";

const fetchCouponData = () => {
  return AxiosInstance.get("coupon/coupon-readonly/");
};

export const useCouponsMarketplaceData = () => {
  return useQuery({
    queryKey: ["coupon-marketplace-deals"],
    queryFn: fetchCouponData,
  });
};
