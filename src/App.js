import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Recipies from "./pages/Recipies";
import Products from "./pages/Products";
import {
  Healthcare,
  Livestock,
  Diseases,
  Cure,
} from "./pages/Healthcare";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/recipies" element={<Recipies />} />
        <Route path="/healthcare" element={<Healthcare />} />
        <Route path="/healthcare/livestock" exact component={Livestock} />
        <Route path="/healthcare/diseases" exact component={Diseases} />
        <Route path="/healthcare/cure" exact component={Cure} />
        {/* <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/dshboard" element={<Dashboard />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
