import axios from "axios";
import { baseUrl } from "../baseUrl";

const csrfToken = "wz1Tw4ScaUdAZBTTBlIKCHfywi61WMYW";

// Make a DELETE request to the dislike endpoint
export const useRestaurantDisLike = ({ user_id }) =>
  axios
    .delete(`${baseUrl}kuwiya/kuwiya-likes/${user_id}`)
    .then((response) => {
      console.log("Like action successful:", response.data);
      // Handle successful response
    })
    .catch((error) => {
      console.error(
        "Error liking product:",
        error.response ? error.response.data : error.message
      );
      // Handle error
    });
