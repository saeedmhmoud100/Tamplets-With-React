import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Home/Header/Header";
import Work from "./Components/Home/Work/Work";
import Skilles from "./Components/Home/Skills/Skilles";
import Portfolio from "./Components/Home/Portfolio/Portfolio";
import Profile from "./Components/Home/Profile/Profile";
import SocialMedia from "./Components/Home/SocialMedia/SocialMedia";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Work />
      <Portfolio />
      <Skilles />
      <Profile />
      <SocialMedia />
      <Footer />
    </div>
  );
}

export default App;
