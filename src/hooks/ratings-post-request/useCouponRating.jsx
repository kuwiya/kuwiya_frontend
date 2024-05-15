import axios from "axios";
import { baseUrl } from "../baseUrl";
import { token } from "../../utils/axios-utils/AxiosInstance";

// const csrfToken = "wz1Tw4ScaUdAZBTTBlIKCHfywi61WMYW";

// Make a POST request to the rating endpoint
export const useCouponRating = ({ rating, user, coupon_ratings }) =>
  axios.post(
    `${baseUrl}coupon/coupon-rating/`,
    {
      rating,
      user,
      coupon_ratings,
    },
    {
      headers: {
        Authorization: `Basic ${token}`,
      },
    }
  );
