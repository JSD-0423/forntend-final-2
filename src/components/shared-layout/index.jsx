import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../pages/footer";
import Header from "../../pages/header";
import Favourites from "../../pages/favourites";

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Favourites />
      <Outlet />
      <Footer />
    </>
  );
};

export default SharedLayout;
