import axios from "axios";
import { endPoints } from "./constants";

export const login = (payload) => {

  axios.defaults.headers = {
   Accept: "application/json",
   "Content-Type": "application/json",
  };

 return axios.post(`${endPoints?.login}`, payload);
};