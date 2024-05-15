import axios from "axios";
import { baseUrl } from "../baseUrl";
import { token } from "../../utils/axios-utils/AxiosInstance";

const csrfToken = "wz1Tw4ScaUdAZBTTBlIKCHfywi61WMYW";

// Make a POST request to the like endpoint
export const useFeaturedLike = ({ user, user_likes }) =>
  axios.post(
    `${baseUrl}featured/featured-likes/`,
    {
      user,
      user_likes,
    },
    {
      headers: {
        Authorization: `Basic ${token}`,
      },
    }
  );
