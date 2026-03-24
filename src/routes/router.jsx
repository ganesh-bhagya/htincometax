import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/home/Home";
import { StudentVisa } from "../pages/services/student_visa/StudentVisa";
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
  {
    path: "/student-visa",
    element: <StudentVisa />
  },
 
]);

export default router;
