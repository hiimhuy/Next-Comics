import axios from "axios";

const BASE_URL_API = process.env.NEXT_PUBLIC_BASE_API_URL;
console.log(BASE_URL_API);


const axiosClient = axios.create({
  baseURL: BASE_URL_API,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  }
});

export default axiosClient;