import axios from "axios";
import { baseUrl } from "../baseUrl";
import { token } from "../../utils/axios-utils/AxiosInstance";

// const csrfToken = "wz1Tw4ScaUdAZBTTBlIKCHfywi61WMYW";

// Make a POST request to the rating endpoint
export const useRestaurantRating = ({ rating, user, ratings }) =>
  axios.post(
    `${baseUrl}kuwiya/kuwiya-rating/`,
    {
      rating,
      user,
      ratings,
    },
    {
      headers: {
        Authorization: `Basic ${token}`,
      },
    }
  );
