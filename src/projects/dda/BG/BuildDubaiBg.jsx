





import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import build from "../../../assets/bgDDA/Build.png";
import { RedirectBase } from "../RedirectBase";
const BuildDubaiBg = () => {


  return (

        <main className="min-vh-100 d-flex align-items-center  ">
          <img className="container"  onClick={() => window.open(RedirectBase.DubaiBuild.link, "_blank")}     width='100%'
        height='100%' src={build}/>
          
        
        </main>
  );
};

export default BuildDubaiBg;