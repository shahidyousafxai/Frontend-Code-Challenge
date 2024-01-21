import axios from "axios";
import { endPoints } from "./constants";

// Get Item
export const getItems = () => {
  axios.defaults.headers = {
   Accept: "application/json",
   "Content-Type": "application/json",
  };

 return axios.get(`${endPoints?.getItems}`);
};

// Add Item
export const addItem = (payload) => {
  axios.defaults.headers = {
   Accept: "application/json",
   "Content-Type": "application/json",
  };

 return axios.post(`${endPoints?.addItem}`, payload );
};

// Checkout
export const checkoutItem = (id) => {
  axios.defaults.headers = {
   Accept: "application/json",
   "Content-Type": "application/json",
  };

 return axios.post(`${endPoints?.checkout}${id}`);
};

// Checkout
export const getCheckoutItems = () => {
  axios.defaults.headers = {
   Accept: "application/json",
   "Content-Type": "application/json",
  };

 return axios.get(`${endPoints?.getCheckout}`);
};