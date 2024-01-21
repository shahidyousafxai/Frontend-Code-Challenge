// Library Imports
import axios from "axios";

// Local Imports
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

// Get Checkout Items 
export const checkoutItem = (id) => {
  axios.defaults.headers = {
   Accept: "application/json",
   "Content-Type": "application/json",
  };

 return axios.post(`${endPoints?.checkout}${id}`);
};

// Checkout Item 
export const getCheckoutItems = () => {
  axios.defaults.headers = {
   Accept: "application/json",
   "Content-Type": "application/json",
  };

 return axios.get(`${endPoints?.getCheckout}`);
};


// Delete Checkout Item 
export const deleteCheckoutItem = (id) => {
  axios.defaults.headers = {
   Accept: "application/json",
   "Content-Type": "application/json",
  };

 return axios.delete(`${endPoints?.deleteCheckoutItem}/${id}`);
};


// Delete Item 
export const deleteItem = (id) => {
  axios.defaults.headers = {
   Accept: "application/json",
   "Content-Type": "application/json",
  };

 return axios.delete(`${endPoints?.deleteItem}/${id}`);
};