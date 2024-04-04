import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const fetchRestaurantsData = (restaurant_id) => {
  return axios.get(`http://localhost:4000/Restaurants/${restaurant_id}`);
};
export const useRestaurantsData = (restaurant_id) => {
  return useQuery({
    queryKey: ["restaurants", restaurant_id],
    queryFn: () => fetchRestaurantsData(restaurant_id),
  });
};
