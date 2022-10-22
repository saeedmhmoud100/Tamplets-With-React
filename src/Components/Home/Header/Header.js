import React, { memo } from "react";
import "./header.css";
function Header() {
  return (
    <div
      className="home"
      style={{ backgroundImage: `url("./images/Home/home-bg.jpg")` }}
    >
      <div className="container">
        <div className="home-information">
          <h2 className="home-title margin-bottom">Home Title</h2>
          <h4 className="home-info">Creative Director</h4>
          <p className="home-desc">
            Iam a professional <span>UX Designer</span> and Front-End Developer
            creating modern and resposive designs to Web and Mobile. Let us work
            together. Thank you.
          </p>
          <button className="home-btn">Let's Begin</button>
        </div>
      </div>
    </div>
  );
}

export default memo(Header);
