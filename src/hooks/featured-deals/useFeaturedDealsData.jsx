import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const fetchFeaturedData = () => {
  return axios.get("https://elite-orange-cross.glitch.me/featuredDeals");
};
export const useFeaturedDealsData = () => {
  return useQuery({
    queryKey: ["featured-deals"],
    queryFn: fetchFeaturedData,
  });
};
