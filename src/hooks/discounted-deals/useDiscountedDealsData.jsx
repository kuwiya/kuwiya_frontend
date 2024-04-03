import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const fetchDiscountedData = () => {
  return axios.get("http://localhost:4000/availableDiscounts");
};

export const useDiscountedDealsData = () => {
  return useQuery({
    queryKey: ["discounted-deals"],
    queryFn: fetchDiscountedData,
  });
};
