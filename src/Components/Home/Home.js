import React from "react";
import Header from "./Header/Header";
import Work from "./Work/Work";
import Skilles from "./Skills/Skilles";
import Portfolio from "./Portfolio/Portfolio";
import Profile from "./Profile/Profile";
import SocialMedia from "./SocialMedia/SocialMedia";

export default function Home() {
  return (
    <div>
      <Header />
      <Work />
      <Portfolio />
      <Skilles />
      <Profile />
      <SocialMedia />
    </div>
  );
}
