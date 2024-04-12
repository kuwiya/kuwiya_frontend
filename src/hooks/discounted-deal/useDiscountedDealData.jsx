import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const fetchDiscountedData = (discount_id) => {
  return axios.get(`https://elite-orange-cross.glitch.me/availableDiscounts/${discount_id}`);
};

export const useDiscountedDealData = (discount_id) => {
  return useQuery({
    queryKey: ["discounted-deals", discount_id],
    queryFn: () => fetchDiscountedData(discount_id),
  });
};
