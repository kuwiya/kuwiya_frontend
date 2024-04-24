import { useQuery } from "@tanstack/react-query";
import { AxiosInstance } from "../../utils";

const fetchDiscountedData = () => {
  return AxiosInstance.get("discount/discount-read-only");
};

export const useDiscountedDealsData = () => {
  return useQuery({
    queryKey: ["discounted-deals"],
    queryFn: fetchDiscountedData,
  });
};
