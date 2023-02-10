import React from "react";
import Footer from "./containers/Footer";
import Header from "./containers/Header";
import Home from "./pages/Home";
import Test from "./components/test";
import Blogs from "./pages/Blogs";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Recipies from "./pages/Recipies";
import Products from "./pages/Products";
import Livestock from "./pages/Livestock";
import Diseases from "./pages/Diseases";
import Cure from "./pages/Cure";
import Profile from "./dropdown/Profile";
import Dashboard from "./dropdown/Dashboard";
import Settings from "./dropdown/Settings";
import ErrorPage from "./pages/ErrorPage";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/recipies" element={<Recipies />} />
        <Route path="/healthcare/livestock" element={<Livestock />} />
        <Route path="/healthcare/diseases" element={<Diseases />} />
        <Route path="/healthcare/cure" element={<Cure />} />

        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
