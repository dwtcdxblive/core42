





import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import dubaiPopulation from "../../../assets/bgDDA/dubaiPopulation.png";
import { RedirectBase } from "../RedirectBase";
const DubaiPopulationPage = () => {


  return (
    <main className="min-vh-100 d-flex align-items-start  ">
      <img onClick={() => window.open(RedirectBase.DubaiPopulationNow.link, "_blank")} className="container py-5"     width='100%'
    src={dubaiPopulation}/>
      
    
    </main>
  );
};

export default DubaiPopulationPage;