import axios from "axios";
import { baseUrl } from "../baseUrl";
import { token } from "../../utils/axios-utils/AxiosInstance";

const csrfToken = "wz1Tw4ScaUdAZBTTBlIKCHfywi61WMYW";

// Make a POST request to the rating endpoint
export const useFeaturedRating = ({ rating, user, user_ratings }) =>
  axios.post(
    `${baseUrl}featured/featured-rating/`,
    {
      rating,
      user,
      user_ratings,
    },
    {
      headers: {
        Authorization: `Basic ${token}`,
      },
    }
  );
