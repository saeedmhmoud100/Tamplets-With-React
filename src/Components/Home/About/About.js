import React, { useEffect, useState } from "react";
import "./about.css";
import axios from "axios";
export default function About() {
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get("js/data.json")
      .then(res => res.data.about)
      .then(data => setData(data));
  });

  return (
    <div class="creative" style={{ backgroundImage: `url(${data.image}) ` }}>
      <div class="container">
        <div class="creative-info">
          <h2 class="info-title">
            <span>This is</span> Me
          </h2>
          <h4 class="info-dir">
            {data.title}
          </h4>
          <p
            class="info-desc"
            dangerouslySetInnerHTML={{ __html: data.desc }}
          />
        </div>
      </div>
    </div>
  );
}
