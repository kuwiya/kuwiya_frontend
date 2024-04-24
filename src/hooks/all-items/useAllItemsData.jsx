import { useQuery } from "@tanstack/react-query";
import { AxiosInstance } from "../../utils";

const fetchAllItemsData = () => {
  return AxiosInstance.get("menuitem/menu-items-read-only/");
};
export const useAllItemsData = () => {
  return useQuery({
    queryKey: ["all-items"],
    queryFn: fetchAllItemsData,
  });
};
