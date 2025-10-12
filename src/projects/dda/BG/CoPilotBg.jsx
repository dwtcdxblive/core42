





import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import CoPilot from "../../../assets/bgDDA/CoPilot.svg";
import { RedirectBase } from "../RedirectBase";
const CoPilotBg = () => {


  return (
    <main className="min-vh-100 d-flex align-items-center  ">
      <img className="container"   onClick={() => window.open(RedirectBase.ProductCopilot.link, "_blank")}    width='100%'
    height='100%' src={CoPilot}/>
      
    
    </main>
  );
};

export default CoPilotBg;