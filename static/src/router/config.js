// Library Imports
import { Navigate } from "react-router-dom";

// Local Import 
import Home from "../Pages/Home";
import Login from "../Pages/Login";

const token = localStorage.getItem('token')

export const routes = [
    {
        path: "/dashboard",
        element: token ? <Home /> : <Navigate to={"/"}/>,
    },
    {
        path: "/",
        element: <Login />,
    },
];