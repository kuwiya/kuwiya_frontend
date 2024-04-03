import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const fetchFeaturedData = () => {
  return axios.get("http://localhost:4000/featuredDeals");
};
export const useFeaturedDealsData = () => {
  return useQuery({
    queryKey: ["featured-deals"],
    queryFn: fetchFeaturedData,
  });
};
