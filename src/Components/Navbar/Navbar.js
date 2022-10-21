import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
export default function Navbar() {
  return (
    <div class="navbar">
      <div class="container">
        <div class="logo">
          <h2 class="logo-text">Ultra Profile</h2>
        </div>

        <input type="checkbox" id="nav" />
        <label for="nav" />

        <ul class="ul-list">
          <li class="list-item">
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li class="list-item">
            <NavLink to={"#"}>Work</NavLink>
          </li>
          <li class="list-item">
            <NavLink to={"#"}>Portfolio</NavLink>
          </li>
          <li class="list-item">
            <NavLink to={"#"}>Resume</NavLink>
          </li>
          <li class="list-item">
            <NavLink to={"#"}>About</NavLink>
          </li>
          <li class="list-item">
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
