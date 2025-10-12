





import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import invest from "../../../assets/bgDDA/invest.png";
import { RedirectBase } from "../RedirectBase";
const InvestBg = () => {


  return (
    <main className="min-vh-100 d-flex align-items-start  ">
      <img className="container py-5"  onClick={() => window.open(RedirectBase.InvestInDubai.link, "_blank")}     width='100%'
    src={invest}/>
      
    
    </main>
  );
};

export default InvestBg;