





import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import transport from "../../../assets/bgDDA/transport.png";
import { RedirectBase } from "../RedirectBase";
const DubaiTransportBg = () => {


  return (
    <main className="min-vh-100 d-flex align-items-start  ">
      <img onClick={() => window.open(RedirectBase.DubaiTransport.link, "_blank")} className="container py-5"     width='100%'
   src={transport}/>
      
    
    </main>
  );
};

export default DubaiTransportBg;