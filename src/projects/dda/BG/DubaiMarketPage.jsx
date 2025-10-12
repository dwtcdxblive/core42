





import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import dubaiMarket from "../../../assets/bgDDA/dubaiMarket.png";
import { RedirectBase } from "../RedirectBase";
const DubaiMarketPage = () => {


  return (
    <main className="min-vh-100 d-flex align-items-start  ">
      <img onClick={() => window.open(RedirectBase.DataMarketplace.link, "_blank")} className="container py-5"     width='100%'
    src={dubaiMarket}/>
      
    
    </main>
  );
};

export default DubaiMarketPage;