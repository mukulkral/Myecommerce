import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from "./Components/ProductList";
import Navbar from "./Components/Navbar";
import SingleProduct from "./Components/SingleProduct";
import Men from "./Components/Pages/Men";
import Woman from "./Components/Pages/Woman";
import Electronics from "./Components/Pages/Electronics";
import Jewelery from "./Components/Pages/Jewelery";
import Cart from "./Components/Cart/Cart";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/men" element={<Men />} />
          <Route path="/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart/>} />

          <Route path="/woman" element={<Woman/>} />
          <Route path="/electronics" element={<Electronics/>} />
          <Route path="/jewelery" element={<Jewelery/>} />
          <Route path="*" element={<h1>error</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
