





import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import trade from "../../../assets/bgDDA/Trade.svg";
import { RedirectBase } from "../RedirectBase";
const TradeDubaiBg = () => {


  return (
    <main className="min-vh-100 d-flex align-items-start  ">
      <img onClick={() => window.open(RedirectBase.DubaiTrade.link, "_blank")} className="container py-5"     width='100%'
    height='1080px' src={trade}/>
      
    
    </main>
  );
};

export default TradeDubaiBg;