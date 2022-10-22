import React, { memo, useEffect, useState } from "react";
import axios from "axios";
import "./work.css";
function Work() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("js/data.json")
      .then(data => setData(Array.from(data.data.works)));
  }, []);
  return (
    <div className="work">
      <div className="container">
        <h2 className="work-title">
          <span>My</span> Work
        </h2>

        {data.map((item, i) => {
          return (
            <div
              className={`part ${item.id === 1
                ? "first"
                : item.id === data.length ? "last" : ""}`}
              key={item.id}
            >
              <i className={item.icon_name} />
              <h4 className="part-title">
                {item.title}
              </h4>
              <hr className="line" />
              <p className="part-desc">
                {item.body}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default memo(Work);
