import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SharedLayout from "../components/shared-layout";
import Home from "../pages/home";
import Product from "../pages/product";
import Category from "../pages/category";

const LayOut = () => {
  return (
    <BrowserRouter basename="/frontend-final-2">
      <Routes>
        <Route element={<SharedLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />}></Route>
          <Route path="/category" element={<Category />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default LayOut;
