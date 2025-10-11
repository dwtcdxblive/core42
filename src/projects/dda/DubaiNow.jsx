import { memo } from "react";
import { Link } from "react-router-dom";
import GovDubai from "../../assets/dubai-gov.png";
import LogosStrip from "../../assets/dubai-now-logos.png";
import TradeQR from "../../assets/trade-QR.png";
import { dubaiNowItems } from "./DubaiNowData";
import rtaLogo from "../../assets/rtaLogo.svg";
import transportQr from "../../assets/transportQr.png";


const DubaiNow = memo(function DubaiNow() {
  // split EN/AR columns evenly
  const mid = Math.ceil(dubaiNowItems.length / 2);
  const left = dubaiNowItems.slice(0, mid);
  const right = dubaiNowItems.slice(mid);
const pageTitle_en = "THE UNIFIED PLATFORM FOR ALL INDIVIDUAL SERVICES IN THE CITY.";
const pageTitle_ar = "المنصة الموحدة لجميع خدمات الأفراد في المدينة";

const headSection_en = "DIGITAL CITY EXPERIENCES COVERING 350 SERVICES FOR MORE THAN 50 ENTITIES";
const headSection_ar = "تجارب المدينة الرقمية تغطي أكثر من 350 خدمة لأكثر من 50 جهة";

const activitiesEn = [
  { strong: "Volunteer" },
  { strong: "Domestic Workers" },
  { strong: "Marriage" },
  { strong: "Rent a Home" },
  { strong: "May They Rest In Peace" },
  { strong: "Obtain Medical" },
  { strong: "Get Land" },
  { strong: "Get Ready House" },
  { strong: "Land Exchange" },
  { strong: "Electric Vehicle" },
  { strong: "Buy and Sell Property" },
];

const activitiesAr = [
  { strong: "التطوع" },
  { strong: "إقامة العمالة المساعدة" },
  { strong: "الزواج" },
  { strong: "استئجار منزل" },
  { strong: "أحسن الله عزاءكم" },
  { strong: "إدارة الخدمات الصحية" },
  { strong: "الحصول على قطعة أرض سكنية" },
  { strong: "الحصول على منزل جاهز" },
  { strong: "تبادل الأراضي السكنية" },
  { strong: "المركبات الكهربائية" },
  { strong: "بيع أو شراء عقار" },
];

const cta_en = "EXPLORE";
const cta_ar = "جرب الآن";


// const card ={
//   key: "transportation",
//   titleAr: " المنصة الموحدة لجميع خدمات الأفراد في المدينة",
//   titleEn: "THE UNIFIED PLATFORM FOR ALL INDIVIDUAL SERVICES IN THE CITY.",
//   descAr:
//     "تجارب المدينة الرقمية تغطي أكثر من 25 خدمة لأكثر من 20 جهات.",
//   descEn:
//     "DIGITAL CITY EXPERIENCES COVERING 350 SERVICES FOR MORE THAN 20 ENTITIES",
//  activitiesEn : [
//   { strong: "Payments: Every Bill, Every Time" },
//   { strong: "Driving: All Driving Services in One Place" },
//   { strong: "Residency: Complete Residency Management" },
//   { strong: "Family: Education & Health Care in One Place" },
// ],

//  activitiesAr : [
//   { strong: "المدفوعات: سدد كل فواتيرك بسهولة وفي أي وقت" },
//   { strong: "القيادة: جميع خدمات القيادة في مكان واحد" },
//   { strong: "الإقامة: إدارة متكاملة للإقامة" },
//   { strong: "العائلة: التعليم والرعاية الصحية في مكان واحد" },
// ]
// }
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
            style={{ height: "50px", width: "auto" }}
          />
         
        </div>
      </div>

      {/* Centered Titles */}
      <div className="text-center mt-2">
        <span className="se__brand-ar fw-medium d-block fs-4  font-dda_ar">
         {pageTitle_ar}
        </span>
        <span className="se__brand-en fw-bold d-block pb-2 fs-5 text-uppercase mt-1" >
     {pageTitle_en}
        </span>
      </div>
    </header>
      {/* Roles header pills */}
        <div className="se__roles-head  py-2  ">
          <span className="se__pill se__pill--en    h-auto px-2 " style={{ fontSize: '0.8rem' }}>{headSection_en}</span>
          <span className="se__pill se__pill--ar   h-auto px-2" style={{ fontSize: '0.8rem' }}>{headSection_ar}</span>
        </div>
        
         <div className=" pb-2  position-relative " >
          <div className="se__roles h-100">
          <ul className="se__list se__list--en justify-content-start
    align-content-start  pb-4">
                    {activitiesEn.map(i => (
              <li style={{minHeight: 'unset'}} key={i.slug}>{i.strong}
                {/* <Link className="dn__link"   style={{ textDecoration: 'none', color: 'inherit' }} to={`/projects/dda/dubai-now/${i.slug}`}>{i.strong}</Link> */}
              </li>
            ))}
        
          </ul>

          <span className="se__divider se__divider--roles" aria-hidden="true" />

          <ul className="se__list se__list--ar justify-content-start
    align-content-start  pb-4 font-dda_ar fs-6">
                  {activitiesAr.map(i => (
              <li style={{minHeight: 'unset'}} key={i.slug}>{i.strong}
                {/* <Link className="dn__link" style={{ textDecoration: 'none', color: 'inherit' }} to={`/projects/dda/dubai-now/${i.slug}`} dir="rtl">{i.ar}</Link> */}
              </li>
            ))}
          </ul>
           </div>
           {/* CTA */}
            <div className="se__cta  position-absolute   start-50 translate-middle-x d-flex flex-column justify-content-center align-items-center g-4" style={{bottom:'0px'}}>
                 <img className="dn__qr" src={transportQr} alt="QR" />
          
            </div>
        </div>

    

       <footer className="dn__logos">
          <img src={LogosStrip} alt="Dubai Now partners" />
        </footer>
      </div>
    </section>
  );
});

export default DubaiNow;