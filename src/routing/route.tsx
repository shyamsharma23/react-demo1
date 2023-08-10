import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Category from "../components/Category";
import Update from "../components/Update";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/updateProduct/:myID",
    element: <Update />,
  },
]);

export default router;
