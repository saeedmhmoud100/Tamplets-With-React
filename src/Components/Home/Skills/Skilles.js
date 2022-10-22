import React, { memo, useEffect, useState } from "react";
import axios from "axios";
import "./skilles.css";
function Skilles() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("js/data.json")
      .then(response => response.data.skilles)
      .then(data => setData(Array.from(data)));
  }, []);

  return (
    <div className="profile_skills">
      <div className="container">
        <div className="profile">
          <h2 className="profile-title">
            <span>My </span>Profile
          </h2>
          <ul className="profile-list">
            {data.map((item, i) => {
              return (
                <li className="profile-item" key={i}>
                  <span>
                    {item.title}:
                  </span>
                  {item.val}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="skills">
          <h2 className="skills-title">
            Some <span>skills</span>
          </h2>
          <p className="skills-desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            praesentium blanditiis esse cupiditate, omnis similique.
          </p>
          <div className="bar">
            <span className="title">Bootstrap</span>
            <span className="perc">100%</span>
            <div className="parent">
              <span className="sp1" />
            </div>
          </div>

          <div className="bar">
            <span className="title">CSS3</span>
            <span className="perc">90%</span>
            <div className="parent">
              <span className="sp2" />
            </div>
          </div>

          <div className="bar">
            <span className="title">Photoshop</span>
            <span className="perc">80%</span>
            <div className="parent">
              <span className="sp3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(Skilles)