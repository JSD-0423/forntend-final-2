import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SharedLayout from "../components/shared-layout";
import Home from "../pages/home";
import Product from "../pages/product";

const LayOut = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SharedLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default LayOut;
