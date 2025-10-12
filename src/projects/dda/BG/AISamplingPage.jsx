





import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import AISampling from "../../../assets/bgDDA/AISampling.png";
import { RedirectBase } from "../RedirectBase";
const AISamplingPage = () => {


  return (
    <main className="min-vh-100 d-flex align-items-start  ">
      <img onClick={() => window.open(RedirectBase.DubaiTrade.link, "_blank")} className="container py-5"     width='100%'
    src={AISampling}/>
      
    
    </main>
  );
};

export default AISamplingPage;