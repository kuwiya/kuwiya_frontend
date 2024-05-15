import axios from "axios";
import { baseUrl } from "../baseUrl";
import { token } from "../../utils/axios-utils/AxiosInstance";

const csrfToken = "wz1Tw4ScaUdAZBTTBlIKCHfywi61WMYW";

// Make a POST request to the like endpoint
export const useDiscountLike = ({ user, discount_likes }) =>
  axios.post(
    `${baseUrl}discount/discount-likes/`,
    {
      user,
      discount_likes,
    },
    {
      headers: {
        Authorization: `Basic ${token}`,
      },
    }
  );
