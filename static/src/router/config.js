// Local Import 
import Home from "../Pages/Home";
import Items from "../Pages/Items";
import Checkout from "../Pages/Checkout";
import AddItems from "../Pages/AddItems";

export const routes = [
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/items",
        element: <Items />,
    },
    {
        path: "/checkout",
        element: <Checkout />,
    },
    {
        path: "/add-items",
        element: <AddItems />,
    },
];