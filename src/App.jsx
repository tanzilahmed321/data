import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import SingleProduct from "./component/SingleProduct";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<SingleProduct />} />
      </Routes>
    </>
  );
};

export default App;
