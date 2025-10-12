





import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import CODAI from "../../../assets/bgDDA/CODAI.png";
import { RedirectBase } from "../RedirectBase";
const CODAIPage = () => {


  return (
    <main className="min-vh-100 d-flex align-items-start  ">
      <img onClick={() => window.open(RedirectBase.CODAI.link, "_blank")} className="container py-5"     width='100%'
    src={CODAI}/>
      
    
    </main>
  );
};

export default CODAIPage;