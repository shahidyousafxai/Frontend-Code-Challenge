// Library Imports
import React, { useEffect, useState } from "react";

// Local Imports
import Header from "../../components/Header"
import { getItems } from "../../services/api"
import ProductCard from "../../components/ProductCard";
import Loader from "../../components/Loader";
import Input from "../../components/Input";

export default function Items() {
  const [items, setItems] = useState([]);
  const [searchedItems, setSearchedItems] = useState([]);
  const [searchedText, setSearchedText] = useState("");
  const [totalCheckoutItems, setTotalCheckoutItems] = useState("");
  const [loading, setLoading] = useState(false);

  // Get Items Listing
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

  // Mapping Items Card
  const itemsList = searchedText ? searchedItems?.map((product) => {
    return (
      <ProductCard product={product} getItemsListing={getItemsListing} />
    )
  }) : items?.map((product) => {
    return (
      <ProductCard product={product} getItemsListing={getItemsListing} />
    )
  })

  // Search Items
  const searchItems = (value) => {
    setSearchedText(value)
    const searchWords = value?.toLowerCase().split(" ");
    const searchResults = JSON.parse(JSON.stringify(items))?.filter((obj) => {
      const lowerCaseName = obj?.name?.toLowerCase();
      return searchWords.every((word) => lowerCaseName?.includes(word));
    });
    setSearchedItems(searchResults);
  };

  return (
    <Header checkoutCount={totalCheckoutItems} cart={true}>
      <div className="bg-gray-100 min-h-[calc(100vh-64px)]">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="flex justify-between">
            <span className="font-bold text-2xl capitalize">Trending products</span>
            <div>
              <Input
                placeholder="Search..."
                onChange={(e) => searchItems(e.target.value)}
              />
            </div>
          </div>
          {loading ? <Loader /> : (
            <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
              {itemsList ? (
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
