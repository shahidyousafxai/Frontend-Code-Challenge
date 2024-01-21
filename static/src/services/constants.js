
const baseURL = 'http://localhost:5000';

const endPoints = {
 // Get Items
 getItems: `${baseURL}/items`,

 // Add Item
 addItem: `${baseURL}/addItem/`,

 // Checkout
 checkout: `${baseURL}/checkout/`,

  // Get Checkout
  getCheckout: `${baseURL}/getCheckout`,
};

export { endPoints, baseURL };
