import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Layouts/Navbar/Navbar";
import Footer from "./Components/Layouts/Footer/Footer";
import "./App.css";
import Home from "./Components/Home/Home";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/Tamplets-With-React/" element={<Home />} />
        <Route path="/Tamplets-With-React/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
