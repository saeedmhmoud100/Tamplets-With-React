import React, { memo, useEffect, useState } from "react";
import "./portfolio.css";
import axios from "axios";

function Portfolio() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("js/data.json")
      .then(response => response.data.portfolio)
      .then(data => setData(data));
  }, []);

  return (
    <div className="portfolio">
      <h2 className="portfolio-title">
        <span>My</span> Portfolio
      </h2>
      <ul className="portfolio-list">
        <li className="portfolio-item active">All</li>
        <li className="portfolio-item">HTML</li>
        <li className="portfolio-item">Photoshop</li>
        <li className="portfolio-item">Wordpress</li>
        <li className="portfolio-item">Mobile</li>
      </ul>

      <div className="box">
        {data.map(item => {
          return (
            <div key={item.id}>
              <img src={item.image} alt="" />
              <p className="overlay">
                <span> Show Image </span>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default memo(Portfolio)