





import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import smartSuplier from "../../../assets/bgDDA/smartSuplier.png";
import { RedirectBase } from "../RedirectBase";
const DubaiSmartSuplier = () => {


  return (
    <main className="min-vh-100 d-flex align-items-start  ">
      <img onClick={() => window.open(RedirectBase.SmartSupplier.link, "_blank")} className="container py-5"     width='100%'
    src={smartSuplier}/>
      
    
    </main>
  );
};

export default DubaiSmartSuplier;