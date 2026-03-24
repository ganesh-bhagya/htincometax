import React from "react";
import { Outlet } from "react-router-dom";
import { Arrow } from "./Arrow";
export const MainLayout = () => {
  return (
    <div className="">
      <div className=" fixed bottom-0 right-0 z-50">ff</div>
    
        <Outlet />
      
    </div>
  );
};
