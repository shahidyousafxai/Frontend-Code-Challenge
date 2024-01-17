// Library Imports
import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// Local Imports
import { routes } from './config';

const Router = () => {
  const router = createBrowserRouter(routes);

  return (
    <React.Fragment>
      <RouterProvider router={router} />
    </React.Fragment>
  )
}

export default Router 