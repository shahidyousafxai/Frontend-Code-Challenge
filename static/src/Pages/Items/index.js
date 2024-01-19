import React, { useEffect, useState } from "react";
import Header from "../../components/Header"
import { addItem, getItems } from "../../network/api"
import ProductCard from "../../components/ProductCard";
import Button from "../../components/Button";
import Modal from "../../components/Modal";

export default function Items() {
 const [items, setItems] = useState([]);
 const [openModal, setOpenModal] = useState(false);
 const getItemsListing = async () => {
  try {
   const response = await getItems();
   setItems(response?.data);
  } catch (error) {
   console.log("Error", error);
  }
 }

 useEffect(() => {
  getItemsListing();
 }, []);

 const addProduct = async (product) => {
  try {
   const response = await addItem(product);
   console.log(response?.data)
  } catch (error) {
   console.log("Error", error)
  }
 }

 const itemsList = items?.map((product) => {
  return (
   <ProductCard product={product} />
  )
 })

 return (
  <Header>
   <div className="bg-gray-100">
    <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
     <div className="flex justify-between items-center">
      <span className="font-bold text-3xl capitalize">Trending products</span>
      <Button
       label={"Add Item"}
       onClick={() => setOpenModal(!openModal)}
      />
     </div>
     <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
      {items ? (
       React.Children.toArray(itemsList)
      ) : null}
     </div>
    </div>
   </div>
   <Modal
    open={openModal}
    setOpen={setOpenModal}
    addProduct={addProduct}
   />
  </Header>
 )
}
