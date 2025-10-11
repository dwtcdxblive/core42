import { memo } from "react";
import { Link } from "react-router-dom";
import GovDubai from "../../assets/dubai-gov.png";
import rtaLogo from "../../assets/rtaLogo.svg";
import transportQr from "../../assets/transportQr.png";
import { dubaiNowItems } from "./DubaiNowData";

const DubaiTransport = memo(function DubaiTransport() {
  // split EN/AR columns evenly

const pageTitle_en = "THE SPECIALIZED DIGITAL PLATFORM FOR TRANSPORTATION IN DUBAI";
const pageTitle_ar = "المنصة الرقمية المتخصصة في التنقل في دبي";

const headSection_en = "DIGITAL CITY EXPERIENCES COVERING MORE THAN 25 SERVICES FOR MORE THAN 5 ENTITIES.";
const headSection_ar = "تجارب المدينة الرقمية تغطي أكثر من 25 خدمة لأكثر من 5 جهات";

const activitiesEn = [
  { strong: "Plan your journey" },
  { strong: "Navigate smoothly through Dubai roads" },
  { strong: "Explore new options for shared mobility" },
  { strong: "Use your NOL card and top it up" },
  { strong: "Complement your journey with Salik and Parkin Services" },
  { strong: "Get updated public transport information" },
];

const activitiesAr = [
  { strong: "خطط رحلتك" },
  { strong: "استفد من الملاحة السلسة في طرق دبي" },
  { strong: "اكتشف وسائل جديدة من التنقل المشترك والمرن" },
  { strong: "استخدم بطاقة نول و اشحنها بسهولة" },
  { strong: "عزز رحلتك بخدمات المواقف وسالك" },
  { strong: "تعرف على مواعيد المواصلات العامة" },
];
  return (
    <section className=" se">
      <div className="dn__card se__card   vh-100">
  
   <header className="se__header">
      {/* Top Row: logo left */}
      <div className="d-flex align-items-start justify-content-between w-100">
        <div className="se__brand d-flex align-items-center gap-2">
          <img
            className="se__logo"
            src={GovDubai}
            alt="Government of Dubai"
            style={{ height: "70px", width: "auto" }}
          />
         
        </div>
      </div>

      {/* Centered Titles */}
      <div className="text-center mt-4">
        <span className="se__brand-ar fw-medium d-block fs-4 pb-2 font-dda_ar">
       {pageTitle_ar}
        </span>
        <span className="se__brand-en fw-bold d-block pb-2 fs-5 text-uppercase mt-1">
      {pageTitle_en}
        </span>
      </div>
    </header>
      {/* Roles header pills */}
        <div className="se__roles-head  py-2  ">
          <span className="se__pill se__pill--en   fs-09 h-auto px-2 ">{headSection_en}</span>
          <span className="se__pill se__pill--ar  fs-09 h-auto px-2">{headSection_ar}</span>
        </div>
         <div className=" pb-4  position-relative " style={{height:'380px'}}>
          <div className="se__roles h-100">
          <ul className="se__list se__list--en justify-content-start
    align-content-start  pb-4">
               {activitiesEn.map((item) => <li className="fs-08" key={item}>
                      <strong>{item.strong} </strong>
                      
                      {item.normal}</li>)}
        
          </ul>

          <span className="se__divider se__divider--roles" aria-hidden="true" />

          <ul className="se__list se__list--ar justify-content-start
    align-content-start  pb-4 font-dda_ar fs-6">
            {activitiesAr.map((item) => <li className="fs-08"  key={item}>
                      <strong>{item.strong} </strong>
                      
                      {item.normal}</li>)}
          </ul>
           </div>
           {/* CTA */}
            <div className="se__cta  position-absolute   start-50 translate-middle-x d-flex flex-column justify-content-center align-items-center g-4" style={{bottom:'0px'}}>
                 <img className="dn__qr" src={transportQr} alt="QR" />
            
            </div>
        </div>

   

        <footer className="dn__logo">
          <img src={rtaLogo}  width='160px' alt="Dubai Now partners" />
        </footer>
      </div>
    </section>
  );
});

export default DubaiTransport;

