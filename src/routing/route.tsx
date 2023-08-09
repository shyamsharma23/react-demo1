import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Category from "../components/Category";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "productCategory/:id",
    element: <Category />,
  },
]);

export default router;
