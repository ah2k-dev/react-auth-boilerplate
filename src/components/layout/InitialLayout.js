import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const InitialLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default InitialLayout;
