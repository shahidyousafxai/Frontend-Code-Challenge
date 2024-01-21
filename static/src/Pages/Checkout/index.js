// Library Imports
import React, { useEffect, useState } from "react";

// Local Imports
import Header from "../../components/Header";
import { getCheckoutItems } from "../../services/api";
import ProductCard from "../../components/ProductCard";
import Loader from "../../components/Loader";

export default function Items() {
  const [checkoutProducts, setCheckoutProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalCheckoutItems, setTotalCheckoutItems] = useState("");

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

  return (
    <Header checkoutCount={totalCheckoutItems} cart={true}>
      <div className="bg-gray-100">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="font-bold text-3xl capitalize">Checkout Items</div>
          {loading ? <Loader /> : (
            <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
              {React.Children.toArray(checkoutProducts?.map((product) => {
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
