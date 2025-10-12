





import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import qrInvest from "../../assets/qrInvest.png";
import justiceSponsers from "../../assets/justiceSponsers.svg";
import GovDubai from "../../assets/dubai-gov.png";
import { RedirectBase } from "./RedirectBase";
const JusticeDubai = () => {






const pageTitle_en = "THE SPECIALIZED DIGITAL PLATFORM FOR JUSTICE IN DUBAI";
const pageTitle_ar = "المنصة الرقمية المتخصصة في العدل في دبي";
const headSection_en = "DIGITAL CITY EXPERIENCES COVERING MORE THAN 145 SERVICES FOR MORE THAN 9 ENTITIES.";
const headSection_ar = "تجارب المدينة الرقمية تغطي أكثر من 145 خدمة لأكثر من 9 جهات";
const activitiesEn = [
  { strong: "Lawsuits of All Types", normal: " - (Civil, Commercial, Real Estate, etc.)" },
  { strong: "Enforcement of Criminal Judgments", normal: " - and Orders Services" },
  { strong: "General Judicial Services", normal: " - and Complaints" },
];

const activitiesAr = [
  { strong: "الدعاوى بجميع أنواعها", normal: " - (مدني، تجاري، عقاري، إلخ)" },
  { strong: "خدمات تنفيذ الأحكام", normal: " - والأوامر الجزائية" },
  { strong: "الخدمات القضائية العامة", normal: " - و الشكاوى" },
];

  return (
    <main className="min-vh-100 d-flex align-items-start  ">
      <div className="container py-5">
        {/* logo */}
         <div className="col-12 col-md-3 text-md-start text-start mb-3 mb-md-0 my-5 ">
          <img
            src={GovDubai}
            alt="Government of Dubai"
            className="img-fluid mb-5"
            style={{ height: "100px" }}
          />
          </div>
        {/* Header */}
        <div className="text-center mb-2 mt-1">
          
          <h5 className="dark-blue fw-bold mb-1 py-4 fs-1 font-GE_SSBold" dir="rtl">
            {pageTitle_ar}
          </h5>
          <h5 className="dark-blue fw-bold text-uppercase fs-1 font-GothamBold ">
            {pageTitle_en}
          </h5>
        </div>

        {/* Main Row */}
        <div className="row align-items-start bg-white    rounded-1  justify-content-center gy-4 mt-5">
          {/* Left English Block */}
          <div className="col-12 col-md-5">
            <div className="blue-font-bg text-white rounded-3 p-2 mb-3 fw-bold font-GothamMedium fs-5" style={{height:'7vh'}}>
          {headSection_en}
            </div>
            <ul className="list-unstyled fw-semibold blue-font mb-0 font-GothamMedium fs-3">
              {activitiesEn.map((item,index) => <li   key={index}>
                      <strong>{item.strong} </strong>
                      
                      {item.normal}</li>)}
            </ul>
          </div>

          {/* Center QR */}
            <div className="col-8 col-sm-6 col-md-2 text-center position-relative d-flex flex-column justify-content-end align-items-center" style={{height: '389px' }}>
            {/* <img
              src={qrInvest}
              alt="QR Code"
              className="img-fluid mb-3"
              style={{ maxWidth: "150px" }}
            /> */}
      
           <div className="dark-blue-bg text-white rounded-3 fw-semibold py-2 px-4 mx-auto fs-3" onClick={() => window.open(RedirectBase.JusticeDubai.link, "_blank")}>
              <div className="text-uppercase font-GE_SSBold " >جرب الآن</div>
              <div className="text-uppercase font-GothamMedium">Explore</div>
            </div> 
          </div>

          {/* Right Arabic Block */}
          <div className="col-12 col-md-5" dir="rtl">
            <div className="blue-font-bg text-white rounded-3 p-2 mb-3 fw-bold text-end font-GE_SSBold fs-5" style={{height:'7vh'}}>
      


                     {headSection_ar}
            </div>
            <ul className="list-unstyled fw-semibold blue-font mb-0 text-end font-GE_SSMedium fs-3">
              {activitiesAr.map((item,index) => <li   key={index}>
                      <strong>{item.strong} </strong>
                      
                      {item.normal}</li>)}
            </ul>
          </div>
        </div>

         <footer className="dn__logos w-100">
            
                  <img src={justiceSponsers} className="mw-100" alt="Dubai Now partners" />
                </footer>
      </div>
    </main>
  );
};

export default JusticeDubai;