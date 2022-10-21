import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <h2 className="logo-text">Ultra Profile</h2>
        </div>

        <input type="checkbox" id="nav" />
        <label for="nav" />

        <ul className="ul-list">
          <li className="list-item">
            <NavLink to={"/Tamplets-With-React"}>Home</NavLink>
          </li>
          <li className="list-item">
            <NavLink to={"#"}>Work</NavLink>
          </li>
          <li className="list-item">
            <NavLink to={"#"}>Portfolio</NavLink>
          </li>
          <li className="list-item">
            <NavLink to={"#"}>Resume</NavLink>
          </li>
          <li className="list-item">
            <NavLink to={"#"}>About</NavLink>
          </li>
          <li className="list-item">
            <NavLink to="/Tamplets-With-React/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
