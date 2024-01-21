// Library Imports
import React, { useEffect, useState } from "react";

// Local Imports
import Header from "../../components/Header";
import { getCheckoutItems } from "../../services/api";
import ProductCard from "../../components/ProductCard";
import Loader from "../../components/Loader";
import Input from "../../components/Input";

export default function Items() {
  const [checkoutProducts, setCheckoutProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalCheckoutItems, setTotalCheckoutItems] = useState("");
  const [searchedItems, setSearchedItems] = useState([]);
  const [searchedText, setSearchedText] = useState("");

  // Get checkout products listing
  const getCheckoutProducts = async () => {
    try {
      const response = await getCheckoutItems();
      setCheckoutProducts(response?.data?.data);
      setTotalCheckoutItems(response?.data?.data?.length);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log("Error", error);
    }
  }

  useEffect(() => {
    getCheckoutProducts();
  }, []);

  // Search Items
  const searchItems = (value) => {
    setSearchedText(value)
    const searchWords = value?.toLowerCase().split(" ");
    const searchResults = JSON.parse(JSON.stringify(checkoutProducts))?.filter((obj) => {
      const lowerCaseName = obj?.name?.toLowerCase();
      return searchWords.every((word) => lowerCaseName?.includes(word));
    });
    setSearchedItems(searchResults);
  };

  return (
    <Header checkoutCount={totalCheckoutItems} cart={true}>
      <div className="bg-gray-100">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="flex justify-between">
            <div className="font-bold text-2xl capitalize">Checkout Items</div>
            <div>
              <Input
                placeholder="Search..."
                onChange={(e) => searchItems(e.target.value)}
              />
            </div>
          </div>
          {loading ? <Loader /> : (
            <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
              {React.Children.toArray(searchedText ? searchedItems?.map((product) => {
                return (
                  <ProductCard
                    product={product}
                    getCheckoutProducts={getCheckoutProducts}
                  />
                )
              }) : checkoutProducts?.map((product) => {
                return (
                  <ProductCard
                    product={product}
                    getCheckoutProducts={getCheckoutProducts}
                  />
                )
              }))}
            </div>
          )}
        </div>
      </div>
    </Header>
  )
}
