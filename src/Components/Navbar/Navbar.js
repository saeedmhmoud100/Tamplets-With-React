import React from "react";
import { NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <div>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/">Home</NavLink>
    </div>
  );
}
