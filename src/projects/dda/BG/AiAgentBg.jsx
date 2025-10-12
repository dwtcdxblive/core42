import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import AI1 from "../../../assets/bgDDA/AI1.png";
import AI2 from "../../../assets/bgDDA/AI2.png";

import { RedirectBase } from "../RedirectBase";

const AiAgentBg = () => {
  const imageList = [
    { src: AI1, link: "" },
    { src: AI2, link: "" },
  ];

  return (
    <main className="min-vh-100 d-flex align-items-center justify-content-center ">
      <div className=" w-100">
        {/* 
          Use justify-content-center and columnGap for clear space between cards.
          gx-0 removes Bootstrap default gutter, and we set our own fixed gap.
        */}
        <div
          className="row justify-content-center align-items-center gx-0 w-100"
          style={{ columnGap: "60px" }} // controls horizontal space
        >
          {imageList.map((item, index) => (
            <div
              key={index}
              className="col-12 col-md-5 d-flex justify-content-center"
            >
              <img
                src={item.src}
                alt={`AI-${index + 1}`}
                onClick={() => item.link && window.open(item.link, "_blank")}
                className="img-fluid rounded shadow-sm"
                style={{
                  width: "100%",
                  maxWidth: "480px",
                  height: "auto",
                  cursor: item.link ? "pointer" : "default",
                  transition: "transform 0.25s ease, box-shadow 0.25s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "translateY(-5px)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "translateY(0)")
                }
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default AiAgentBg;
