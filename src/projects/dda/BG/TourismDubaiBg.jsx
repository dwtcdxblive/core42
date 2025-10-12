





import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import TOURISM from "../../../assets/bgDDA/TOURISM.svg";
import { RedirectBase } from "../RedirectBase";
const TourismDubaiBg = () => {
// onClick={() => window.open(RedirectBase., "_blank")}

  return (
    <main className="min-vh-100 d-flex align-items-start  ">
      <img  className="container py-5" onClick={() => window.open(RedirectBase.VisitDubai.link, "_blank")}    width='100%'
    height='1080px' src={TOURISM}/>
      
    
    </main>
  );
};

export default TourismDubaiBg;