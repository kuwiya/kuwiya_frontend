import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const fetchDiscountedData = (discount_id) => {
  return axios.get(`http://localhost:4000/availableDiscounts/${discount_id}`);
};

export const useDiscountedDealData = (discount_id) => {
  return useQuery({
    queryKey: ["discounted-deals", discount_id],
    queryFn: () => fetchDiscountedData(discount_id),
  });
};
