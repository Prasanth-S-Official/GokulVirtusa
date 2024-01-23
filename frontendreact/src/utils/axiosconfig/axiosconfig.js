import axios from "axios";

const baseURL = "https://8080-fcebccfceabbafdecaababdaaceb.premiumproject.examly.io";


const axiosInstance = axios.create({
  baseURL,
  timeout: 60 * 1000,
});

export { axiosInstance };
