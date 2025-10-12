





import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import semployee from "../../../assets/bgDDA/semployee.png";
import { RedirectBase } from "../RedirectBase";
const DubaiSmartEmployee = () => {


  return (
    <main className="min-vh-100 d-flex align-items-start  ">
      <img onClick={() => window.open(RedirectBase.SmartEmployee.link, "_blank")} className="container py-5"     width='100%'
    src={semployee}/>
      
    
    </main>
  );
};

export default DubaiSmartEmployee;