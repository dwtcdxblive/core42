





import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import investBg from "../../../assets/bgDDA/investBg.svg";

const InvestBg = () => {


  return (
    <main className="min-vh-100 d-flex align-items-start  ">
      <img className="container py-5"     width='100%'
    height='1080px' src={investBg}/>
      
    
    </main>
  );
};

export default InvestBg;