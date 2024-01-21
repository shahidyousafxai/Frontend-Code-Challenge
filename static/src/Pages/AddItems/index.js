// Library Imports
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Local Imports
import Input from "../../components/Input";
import { addItem } from '../../services/api';
import Header from '../../components/Header';

const AddItems = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    name: "",
    price: "",
    img: "",
  })

  const [error, setError] = useState({
    name: "",
    price: "",
    img: "",
  })

  const onChangeHandler = (e) => {
    setError((prevError) => ({ ...prevError, [e.target.name]: "" }));
    setProduct((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  // Add Product to Items Listing
  const addProduct = async (product) => {
    setError({
      name: "",
      price: "",
      img: "",
    });

    // Check for empty fields
    if (!product.name) {
      setError((prevError) => ({ ...prevError, name: "Name is required" }));
    }
    if (!product.price) {
      setError((prevError) => ({ ...prevError, price: "Price is required" }));
    }
    if (!product.img) {
      setError((prevError) => ({ ...prevError, img: "Image URL is required" }));
    }

    if(Object.values(product).some((val) => val === "")){
      return;
    }

    try {
      const response = await addItem(product);
      if(response?.status) {
        setProduct({
          name: "",
          price: "",
          img: "",
        });
        navigate("/items")
      }
      console.log(response?.data)
    } catch (error) {
      console.log("Error", error)
    }
  }

  return (
    <Header cart={true}>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg">
          <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">Get started today</h1>

          <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati sunt dolores deleniti
            inventore quaerat mollitia?
          </p>

          <div action="" className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
            <p className="text-center text-lg font-medium">Add product to the store</p>
            < Input
              label="Product Name"
              name="name"
              value={product?.name}
              onChange={(e) => onChangeHandler(e)}
              error={error?.name}
            />
            < Input
              label="Price"
              name="price"
              value={product?.price}
              onChange={(e) => onChangeHandler(e)}
              error={error?.price}
            />
            < Input
              label="Image Name"
              name="img"
              value={product?.img}
              onChange={(e) => onChangeHandler(e)}
              error={error?.img}
            />
            <button
              className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
              onClick={() => addProduct(product)}
            >
              Add Product
            </button>
          </div>
        </div>
      </div>
    </Header>
  )
}

export default AddItems