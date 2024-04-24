import { useQuery } from "@tanstack/react-query";
import { AxiosInstance } from "../../utils";

const fetchFeaturedData = () => {
  return AxiosInstance.get("featured/featured-read-only/");
};
export const useFeaturedDealsData = () => {
  return useQuery({
    queryKey: ["featured-deals"],
    queryFn: fetchFeaturedData,
  });
};
