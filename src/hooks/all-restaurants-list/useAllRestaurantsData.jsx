import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { baseUrl } from "../baseUrl";
import { AxiosInstance } from "../../utils";

const fetchAllRestaurantsData = () => {
  // return axios.get(`${baseUrl}kuwiya/api/anonymous`);
  return AxiosInstance.get("kuwiya/api/anonymous");
};

export const useAllRestaurantsData = () => {
  return useQuery({
    queryKey: ["all-restaurants"],
    queryFn: fetchAllRestaurantsData,
  });
};
