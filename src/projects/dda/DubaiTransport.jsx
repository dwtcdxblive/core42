import { memo } from "react";
import { Link } from "react-router-dom";
import GovDubai from "../../assets/dubai-gov.png";
import rtaLogo from "../../assets/rtaLogo.svg";
import transportQr from "../../assets/transportQr.png";
import { dubaiNowItems } from "./DubaiNowData";

const DubaiTransport = memo(function DubaiTransport() {
  // split EN/AR columns evenly

const card ={
  key: "transportation",
  titleAr: "المنصة الرقمية المتخصصة في التنقل في دبي",
  titleEn: "THE SPECIALIZED DIGITAL PLATFORM FOR TRANSPORTATION IN DUBAI",
  descAr:
    "تجارب المدينة الرقمية تغطي أكثر من 25 خدمة لأكثر من 5 جهات.",
  descEn:
    "Digital city experiences covering more than 25 services for more than 5 entities.",
  activitiesEn: [
    { strong: "Plan", normal: " your journey." },
    { strong: "Book", normal: " your mode of transportation." },
    { strong: "Purchase and manage", normal: " your travel cards." },
  ],
  activitiesAr: [
    { strong: "خطط رحلتك.", normal: "" },
    { strong: "احجز وسيلة المواصلات الخاصة بك.", normal: "" },
    { strong: "اشترِ وأدر بطاقات السفر الخاصة بك.", normal: "" },
  ],
}
  return (
    <section className=" se">
      <div className="dn__card se__card   vh-100">
         {/* <header className="se__header  ">
     
          <div className="se__brand"  style={{
    justifyContent: "flex-start",
  }}>
            <img className="se__logo" src={GovDubai} alt="smarTemployee" />
              <div className=" d-flex flex-column justify-content-start
    align-items-center g-4 font-title py-2">
            <span className="se__brand-ar text-center  fw-medium pb-2 fs-2 ">{card.titleAr} </span>
            <span className="se__brand-en text-center fw-medium fs-2" >{card.titleEn}</span>
            </div>
          </div>
        </header> */}
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
          المنصة الرقمية المتخصصة في التنقل في دبي
        </span>
        <span className="se__brand-en fw-bold d-block pb-2 fs-5 text-uppercase mt-1">
          THE SPECIALIZED DIGITAL PLATFORM FOR<br />
          TRANSPORTATION IN DUBAI.
        </span>
      </div>
    </header>
      {/* Roles header pills */}
        <div className="se__roles-head  py-2  ">
          <span className="se__pill se__pill--en fw-normal  fs-6 h-auto px-2 ">{card.descEn}</span>
          <span className="se__pill se__pill--ar fw-normal fs-6 h-auto px-2">{card.descAr}</span>
        </div>
         <div className=" pb-4  position-relative " style={{height:'310px'}}>
          <div className="se__roles h-100">
          <ul className="se__list se__list--en justify-content-start
    align-content-start  pb-4">
               {card.activitiesEn.map((item) => <li className="fs-6" key={item}>
                      <strong>{item.strong} </strong>
                      
                      {item.normal}</li>)}
        
          </ul>

          <span className="se__divider se__divider--roles" aria-hidden="true" />

          <ul className="se__list se__list--ar justify-content-start
    align-content-start  pb-4 font-dda_ar fs-6">
            {card.activitiesAr.map((item) => <li className="fs-6"  key={item}>
                      <strong>{item.strong} </strong>
                      
                      {item.normal}</li>)}
          </ul>
           </div>
           {/* CTA */}
            <div className="se__cta  position-absolute   start-50 translate-middle-x d-flex flex-column justify-content-center align-items-center g-4" style={{bottom:'0px'}}>
                 <img className="dn__qr" src={transportQr} alt="QR" />
              {/* <button type="button" className="se__btn ">
                <span className="se__btn-ar font-dda_ar ">جرّب الآن</span>
                <span className="se__btn-en ">EXPLORE</span>
              </button> */}
            </div>
        </div>

        {/* <div className="dn__cta">
          <img className="dn__qr" src={TradeQR} alt="QR" />
          <Link to={`/projects/dda/dubai-now/${dubaiNowItems[0].slug}`} className="dn__btn">
            <span className="dn__btn-ar">جرّب الآن</span>
            <span className="dn__btn-en">EXPLORE</span>
          </Link>
        </div> */}

        <footer className="dn__logo">
          <img src={rtaLogo}  width='160px' alt="Dubai Now partners" />
        </footer>
      </div>
    </section>
  );
});

export default DubaiTransport;

