import axios from "axios";

const axiosClient = axios.create();
axiosClient.defaults.baseURL = "http://localhost:5000/merntest/api/v1";

axiosClient.defaults.headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
  "Access-Control-Allow-Origin": "*",
};

axiosClient.defaults.timeout = 7000;

axiosClient.defaults.withCredentials = true;

export default axiosClient;
