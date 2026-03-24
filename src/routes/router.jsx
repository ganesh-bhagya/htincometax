import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/home/Home";
import { Forms } from "../pages/forms/Forms";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/forms",
    element: <Forms />
  },
  
 
]);

export default router;
