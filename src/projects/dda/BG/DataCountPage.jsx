





import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import DataCount from "../../../assets/bgDDA/DataCount.png";
import { RedirectBase } from "../RedirectBase";
const DataCountPage = () => {


  return (
    <main className="min-vh-100 d-flex align-items-start  ">
      <img onClick={() => window.open(RedirectBase.DataAndStatistics.link, "_blank")} className="container py-5"     width='100%'
    src={DataCount}/>
      
    
    </main>
  );
};

export default DataCountPage;