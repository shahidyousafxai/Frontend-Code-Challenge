Productbox Frontend Code Challenge
==================================

This is RandoStore; an online store where anyone can put up any random item up for sale and anyone else can buy it.

Overview
--------
I have created a simple ReactJs/NodeJS application server for item additions and listing.

I have build four pages:

- A page for listing all items that you can add to your cart
- A page to view all the items that you've checked out
- A page that allows you to add new items
- A homepage that allows you to navigate to the last three pages

Getting Started
---------------
Install the package dependencies by running the following command: `npm install`
You have to install package dependencies in both react js and node js.
To install package dependencies in React js, you have to navigate to `static`` directory.

Create .env file and then past `PORT=5000` into the .env file to declare port for Backend Server.

Once the dependancies are installed and .env is created, you can start the Node Js application server by running: `npm start` and React Js application server by running: `yarn start`

The Node Js Server will be running on port `5000`. If you want to change the port, please make sure you change it in react project as well in `static/src/services/constant.js`

Once the server is running, you can access the start page by opening your browser to `http://localhost:3000`

REST API
--------
I have created 6 APIs for the following operations:
- Items Listing
- Checkout Items Listing
- Add Item to the listing
- Add existing item to cart
- Delete Item from Item Listing
- Delete Item from checkout listing

FRONTEND
--------
I have uses the following tech stack on the frontend side:
- React Js JavaScript Framework
- Tailwind CSS For styling
- Axios for APIs integration
