





import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Justice from "../../../assets/bgDDA/Justice.png";
import { RedirectBase } from "../RedirectBase";
const JusticeDubaiBg = () => {


  return (
    <main className="min-vh-100 d-flex align-items-start  ">
      <img className="container py-5"   onClick={() => window.open(RedirectBase.DubaiJustice.link, "_blank")}  width='100%'
    src={Justice}/>
      
    
    </main>
  );
};

export default JusticeDubaiBg;