import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const fetchDiscountedData = () => {
  return axios.get("https://elite-orange-cross.glitch.me/availableDiscounts");
};

export const useDiscountedDealsData = () => {
  return useQuery({
    queryKey: ["discounted-deals"],
    queryFn: fetchDiscountedData,
  });
};
