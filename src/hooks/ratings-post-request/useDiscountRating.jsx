import axios from "axios";
import { baseUrl } from "../baseUrl";

const csrfToken = "wz1Tw4ScaUdAZBTTBlIKCHfywi61WMYW";

// Make a POST request to the rating endpoint
export const useDiscountRating = ({ rating, user, discount_ratings }) =>
  axios
    .post(
      `${baseUrl}discount/discount-rating/`,
      {
        rating,
        user,
        discount_ratings,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "X-CSRF-Token": csrfToken,
          "X-Requested-With": "XMLHttpRequest",
          "Access-Control-Allow-Origin": "*", // Required for CORS requests
          "Access-Control-Allow-Credentials": "true",
          "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
        },
      }
    )
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
