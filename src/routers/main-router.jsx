import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SharedLayout from "../components/shared-layout";
import Home from "../pages/home";
import Product from "../pages/product";
import Category from "../pages/category";
import CartPage from "../pages/cart";
import CheckOut from "../pages/checkout";
import SignIn from "../pages/signin-signout";
import AuthContext from "../contexts/auth-context";

const LayOut = () => {
  const [auth, setAuth] = useState(localStorage.getItem("auth") || "");

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      <BrowserRouter basename="/frontend-final-2">
        <Routes>
          <Route element={<SharedLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<Product />}></Route>
            <Route path="/category" element={<Category />}></Route>
            <Route path="/cart" element={<CartPage />}></Route>
            <Route path="/checkout" element={<CheckOut />}></Route>
          </Route>
          <Route path="/signIn" element={<SignIn />}></Route>
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
};

export default LayOut;
