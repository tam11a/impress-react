import axios from "axios";

export const rootURL = "https://impress-api.herokuapp.com/";
export const baseURL = rootURL + "api/";

const instance = axios.create({
  // unauthorized instance
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
    accept: "*/*",
  },
});

export default instance;
