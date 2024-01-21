import React, { useEffect, useState } from "react";
import Header from "../../components/Header"
import { getItems } from "../../services/api"
import ProductCard from "../../components/ProductCard";
import Loader from "../../components/Loader";

export default function Items() {
  const [items, setItems] = useState([]);
  const [totalCheckoutItems, setTotalCheckoutItems] = useState("");
  const [loading, setLoading] = useState(false);


  const getItemsListing = async () => {
    try {
      setLoading(true);
      const response = await getItems();
      setItems(response?.data?.data);
      setTotalCheckoutItems(response?.data?.totalCheckoutItems);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log("Error", error);
    }
  }

  useEffect(() => {
    getItemsListing();
  }, []);

  const itemsList = items?.map((product) => {
    console.log(product)
    return (
      <ProductCard product={product} getItemsListing={getItemsListing}/>
    )
  })

  return (
    <Header checkoutCount={totalCheckoutItems} cart={true}>
      <div className="bg-gray-100">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="">
            <span className="font-bold text-3xl capitalize">Trending products</span>
          </div>
          {loading ? <Loader /> : (
            <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
              {items ? (
                React.Children.toArray(itemsList)
              ) : (
                <div className="h-full w-full mt-10">
                  <h2 className="text-xl">No Data found</h2>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </Header>
  )
}
