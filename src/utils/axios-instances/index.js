import axios from "axios";

const axiosProductionInstance = axios.create({
  baseURL: "https://app-68c6b164-71cf-4968-8378-502de2661021.cleverapps.io",
});

export default axiosProductionInstance;
