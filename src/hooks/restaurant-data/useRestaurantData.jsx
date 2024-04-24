import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { baseUrl } from "../baseUrl";
import { AxiosInstance } from "../../utils";

const fetchRestaurantData = (restaurant_id) => {
  // return axios.get(
  //   `${baseUrl}kuwiya/api/anonymous-single-item/${restaurant_id}`
  // );
  return AxiosInstance.get(`kuwiya/api/anonymous-single-item/${restaurant_id}`);
};

export const useRestaurantData = (restaurant_id) => {
  return useQuery({
    queryKey: ["restaurants", restaurant_id],
    queryFn: () => fetchRestaurantData(restaurant_id),
  });
};
