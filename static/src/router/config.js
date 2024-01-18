// Library Imports
import { Navigate } from "react-router-dom";

// Local Import 
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Items from "../Pages/Items";
import Checkout from "../Pages/Checkout";


const token = localStorage.getItem('token');
console.log(token)
export const routes = [
    {
        path: "/",
        element: token ? <Home /> : <Navigate to={"/login"}/>,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/items",
        element: <Items />,
    },
    // {
    //     path: "/add-item",
    //     element: <Login />,
    // },
    {
        path: "/checkout",
        element: <Checkout />,
    },
];