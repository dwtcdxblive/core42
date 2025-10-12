





import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import dubaiAiPhone from "../../../assets/bgDDA/dubaiAiPhone.svg";
import { RedirectBase } from "../RedirectBase";
const DubaiAiPhone = () => {


  return (
    <main className="min-vh-100 d-flex align-items-start  ">
      <img onClick={() => window.open(RedirectBase.DubaiAI.link, "_blank")} className="container py-5"     width='100%'
    src={dubaiAiPhone}/>
      
    
    </main>
  );
};

export default DubaiAiPhone;