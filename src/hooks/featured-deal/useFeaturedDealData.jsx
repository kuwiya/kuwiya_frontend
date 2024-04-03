import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const fetchFeaturedData = (featuredId) => {
  return axios.get(`http://localhost:4000/featuredDeals/${featuredId}`);
};
export const useFeaturedDealData = (featuredId) => {
  return useQuery({
    queryKey: ["featured-deals", featuredId],
    queryFn: () => fetchFeaturedData(featuredId),
  });
};
