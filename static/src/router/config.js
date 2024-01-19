// Local Import 
import Home from "../Pages/Home";
import Items from "../Pages/Items";
import Checkout from "../Pages/Checkout";

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
];