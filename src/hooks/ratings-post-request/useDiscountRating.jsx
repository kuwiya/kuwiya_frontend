import axios from "axios";
import { baseUrl } from "../baseUrl";
import { token } from "../../utils/axios-utils/AxiosInstance";

// const csrfToken = "wz1Tw4ScaUdAZBTTBlIKCHfywi61WMYW";

// Make a POST request to the rating endpoint
export const useDiscountRating = ({ rating, user, discount_ratings }) =>
  axios.post(
    `${baseUrl}discount/discount-rating/`,
    {
      rating,
      user,
      discount_ratings,
    },
    {
      headers: {
        Authorization: `Basic ${token}`,
      },
    }
  );
