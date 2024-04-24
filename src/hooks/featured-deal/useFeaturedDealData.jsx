import { useQuery } from "@tanstack/react-query";
import { AxiosInstance } from "../../utils";

const fetchFeaturedData = (featuredId) => {
  return AxiosInstance.get(
    `featured/featured-read-only-single-item/${featuredId}/`
  );
};
export const useFeaturedDealData = (featuredId) => {
  return useQuery({
    queryKey: ["featured-deals", featuredId],
    queryFn: () => fetchFeaturedData(featuredId),
  });
};
