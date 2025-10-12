





import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import infrostructure from "../../../assets/bgDDA/infrostructure.png";
import { RedirectBase } from "../RedirectBase";
const InfrostructureBg = () => {


  return (
    <main className="min-vh-100 d-flex align-items-center  ">
      <img className="container "  onClick={() => window.open(RedirectBase.Infostructure.link, "_blank")}     width='100%'
    height='100%' src={infrostructure}/>
      
    
    </main>
  );
};

export default InfrostructureBg;