import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../pages/footer";
import Header from "../../pages/header";

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default SharedLayout;
