import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SharedLayout from "../components/shared-layout";
import Home from "../pages/home";

const LayOut = () => {
  return (
    <BrowserRouter basename="/frontend-final-2">
      <Routes>
        <Route element={<SharedLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default LayOut;
