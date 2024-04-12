import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const fetchFeaturedData = (featuredId) => {
  return axios.get(`https://elite-orange-cross.glitch.me/featuredDeals/${featuredId}`);
};
export const useFeaturedDealData = (featuredId) => {
  return useQuery({
    queryKey: ["featured-deals", featuredId],
    queryFn: () => fetchFeaturedData(featuredId),
  });
};
