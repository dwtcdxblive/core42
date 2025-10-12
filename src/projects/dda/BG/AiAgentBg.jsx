import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import AI1 from "../../../assets/bgDDA/AI1.svg";
import AI2 from "../../../assets/bgDDA/AI2.svg";
import AI3 from "../../../assets/bgDDA/AI3.svg";
import { RedirectBase } from "../RedirectBase";
const AiAgentBg = () => {
  const imageList = [
    { src: AI1, link: "" },
    { src: AI2, link: "" },
    { src: AI3, link: "" },
  ];

  return (
    <main className="min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="container">
        <div className="row justify-content-center g-4">
          {imageList.map((item, index) => (
            <div
              key={index}
              className="col-12 col-md-4 d-flex justify-content-center"
            >
              <img
                src={item.src}
                alt={`AI-${index + 1}`} onClick={() => window.open(item.link, "_blank")}  
                className="img-fluid rounded shadow-sm"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default AiAgentBg;
