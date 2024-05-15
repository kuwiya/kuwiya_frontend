import axios from "axios";
import { baseUrl } from "../baseUrl";
import { token } from "../../utils/axios-utils/AxiosInstance";

const csrfToken = "wz1Tw4ScaUdAZBTTBlIKCHfywi61WMYW";

// Make a POST request to the like endpoint
export const useRestaurantLike = ({ user, likes }) =>
  axios.post(
    `${baseUrl}kuwiya/kuwiya-likes/`,
    {
      user,
      likes,
    },
    {
      headers: {
        Authorization: `Basic ${token}`,
      },
    }
  );
