import axios from "axios";

// base URL and other configurations
const baseURL = "http://34.211.210.115:8000/";
const timeout = 5000;
const token = "ZWF6eTpxd2VydHl1aW9w";

// instance of Axios with default configuration
const axiosInstance = axios.create({
  baseURL,
  timeout,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    // Authorization: `Basic ${token}`,
  },
});

// function to set authentication token in headers
export const setAuthToken = (token) => {
  if (token) {
    axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axiosInstance.defaults.headers.common["Authorization"];
  }
};

// utility function to handle errors
const handleErrors = (error) => {
  console.error("Axios request error:", error);
  throw error; // Rethrow the error for the caller to handle
};

// utility function to make GET requests
export const get = async (url, params) => {
  try {
    const response = await axiosInstance.get(url, { params });
    return response.data;
  } catch (error) {
    handleErrors(error);
    throw error; // Rethrow the error for the caller to handle
  }
};

// utility function to make POST requests
export const post = async (url, data) => {
  try {
    const response = await axiosInstance.post(url, data);
    return response.data;
  } catch (error) {
    handleErrors(error);
    throw error; // Rethrow the error for the caller to handle
  }
};

// Exporting axios instance and utility functions
export default axiosInstance;
