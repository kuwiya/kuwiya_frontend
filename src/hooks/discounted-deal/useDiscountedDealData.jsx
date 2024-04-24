import { useQuery } from "@tanstack/react-query";
import { AxiosInstance } from "../../utils";

const fetchDiscountedData = (discount_id) => {
  return AxiosInstance.get(
    `discount/discount-read-only-single-item/${discount_id}`
  );
};

export const useDiscountedDealData = (discount_id) => {
  return useQuery({
    queryKey: ["discounted-deals", discount_id],
    queryFn: () => fetchDiscountedData(discount_id),
  });
};
