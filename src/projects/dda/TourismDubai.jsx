





import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import qrInvest from "../../assets/qrInvest.png";
import tourismSponsers from "../../assets/tourismSponsers.svg";
import GovDubai from "../../assets/dubai-gov.png";
import { RedirectBase } from "./RedirectBase"
import secondLogo from "../../assets/secondLogo.png";
const TourismDubai = () => {

const activitiesEn = [
  { strong: "Planning to arrive in Dubai" },
  { strong: "Experience Dubai" },
  { strong: "Stay connected with Dubai" },
];

const activitiesAr = [
  { strong: "التخطيط للوصول إلى دبي" },
  { strong: "تجربة دبي" },
  { strong: "ابق على تواصل مع دبي" },
];



const headSection_en = {
  num1: "DIGITAL CITY EXPERIENCES COVERING 21",
  num2: "FOR MORE THAN 7 ENTITIES"
};

const headSection_ar = {
  num1: "تجارب المدينة الرقمية تغطي أكثر من 21 خدمة",
  num2: "لأكثر من 7 جهات"
};
const pageTitle_en = "THE OFFICIAL PLATFORM FOR TOURISM IN DUBAI.";
const pageTitle_ar = "المنصة الرسمية للسياحة في دبي";

  return (
    <main className="bg-transparent min-vh-100 d-flex align-items-start  ">
      <div className="container py-5">
        {/* logo */}
         <div className="col-12 col-md-3 text-md-start text-start mb-3 mb-md-0 my-5 w-100 d-flex justify-content-between align-items-center ">
          <img
            src={GovDubai}
            alt="Government of Dubai"
            className="img-fluid mb-5"
            style={{ height: "100px" }}
          />
            <img
                    className="img-fluid mb-5"
                      src={secondLogo}
                      alt="Government of Dubai"
                      style={{ height: "50px", width: "auto" }}
                    />
          </div>
        {/* Header */}
        <div className="text-center mb-4 mt-4">
          
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
        {headSection_en.num1} <br/>{headSection_en.num2}
            </div>
            <ul className="list-unstyled fw-semibold blue-font mb-0 font-GothamMedium fs-3">
              {activitiesEn.map((item,index) => <li   key={index}>
                      - <strong>{item.strong} </strong>
                      
                      </li>)}
            </ul>
          </div>

          {/* Center QR */}
          <div className="col-8 col-sm-6 col-md-2 text-center position-relative">
            <img
              src={qrInvest}
              alt="QR Code"
              className="img-fluid mb-3"
              style={{ maxWidth: "150px" }}
            />
      
           <div className="dark-blue-bg text-white rounded-3 fw-semibold py-2 px-4 mx-auto fs-3 cursor-pointer"  onClick={() => window.open(RedirectBase.VisitDubai.link, "_blank")} >
              <div className="text-uppercase font-GE_SSBold " >جرب الآن</div>
              <div className="text-uppercase font-GothamMedium" >Explore</div>
            </div> 
          </div>

          {/* Right Arabic Block */}
          <div className="col-12 col-md-5" dir="rtl">
            <div className="blue-font-bg text-white rounded-3 p-2 mb-3 fw-bold text-end font-GE_SSBold fs-5" style={{height:'7vh'}}>
      


                      {headSection_ar.num1} <br/>{headSection_ar.num2}
            </div>
            <ul className="list-unstyled fw-semibold blue-font mb-0 text-end font-GE_SSMedium fs-3">
              {activitiesAr.map((item,index) => <li   key={index}>
                      - <strong>{item.strong} </strong>
                      
                      </li>)}
            </ul>
          </div>
        </div>

         <footer className="dn__logos w-100">
            
                  <img src={tourismSponsers} className="mw-100" alt="Dubai Now partners" />
                </footer>
      </div>
    </main>
  );
};

export default TourismDubai;