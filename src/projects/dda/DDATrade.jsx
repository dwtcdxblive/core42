// import GovDubai from '../../assets/dubai-gov.png';
// import TradeQR from '../../assets/trade-QR.png';
// import LogosStrip from '../../assets/trade-logos.png';
// import Explore from '../../assets/explore-btn.png';
// export default function TradeInDubai() {
//   return (
//     <section className='trade'>
//       {/* outer frame */}
//       <div className='trade__frame'>
//         {/* top-left government mark */}
//         <img className='trade__gov' src={GovDubai} alt='Government of Dubai' />

//         {/* bilingual headline */}
//         <header className='trade__header font-title'>
//           <h2 className='trade__title-ar font-title'>
//           </h2>
//           <h1 className='trade__title-en font-title'>
         
//           </h1>
//         </header>

//         {/* 3-column band: EN pill list / QR + CTA / AR pill list */}
//         <div className='trade__band'>
//           {/* EN card */}
//           <article className='trade__card'>
//             <h3 className='trade__pill font-title'>
            
//             </h3>
//             <ul className='trade__list trade__list--en font-title'>
//               <li className='font-title'>
//                 Cargo Handling &amp; Booking (Sea, Air &amp; Land)
//               </li>
//               <li className='font-title'>Customs Clearance</li>
//               <li className='font-title'>
//                 Import &amp; Export Permits and Certificates
//               </li>
//               <li className='font-title'>Trade &amp; Logistics Payments</li>
//               <li className='font-title'>Value Added Services</li>
//             </ul>
//           </article>

//           {/* QR + CTA */}
//           <div className='trade__qr'>
//             <img src={TradeQR} className='trade__qr-img' alt='QR code' />
//             <a
//               href='https://www.figma.com/proto/XXxKjLU64ghvbaQPLioQBi/SW_Journey_gitex?page-id=0%3A1&node-id=5-2589&p=f&viewport=519%2C328%2C0.04&t=UwgdqMEMifA9HG08-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=5%3A2589'
//               target='_blank'
//               type='button'
//               className='bg-transparent border-0 text-center text-decoration-none'
//             >
//               <img src={Explore} className='w-50' alt='explore' />
//             </a>
//           </div>

//           {/* AR card */}
//           <article className='trade__card trade__card--ar'>
//             <h3 className='trade__pill font-title' dir='rtl'>
    
//             </h3>
//             <ul className='trade__list trade__list--ar font-title' dir='rtl'>
//               <li className='font-title'>
//                 مناولة وحجز الشحن (بحرًا وجوًا وبرًا)
//               </li>
//               <li className='font-title'>التخليص الجمركي</li>
//               <li className='font-title'>تصاريح وشهادات الاستيراد والتصدير</li>
//               <li className='font-title'>المدفوعات التجارية واللوجستية</li>
//               <li className='font-title'>خدمات القيمة المضافة</li>
//             </ul>
//           </article>
//         </div>

//         {/* logos strip */}
//         <footer className='trade__logos'>
//           <img src={LogosStrip} alt='Strategic partners' />
//         </footer>
//       </div>
//     </section>
//   );
// }





import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import qrInvest from "../../assets/qrInvest.png";
import DubaiTradSponsers from "../../assets/DubaiTradSponsers.svg";
import GovDubai from "../../assets/dubai-gov.png";

const TradeInDubai = () => {
  const pageTitle_en ="THE SPECIALIZED DIGITAL PLATFORM FOR LOGISTICS AND TRADE SERVICES FOR IMPORTS/EXPORTS IN DUBAI"
  const pageTitle_ar ="  المنصة الرقمية المتخصصة في الخدمات اللوجستية والتجارية للاستيراد والتصدير في دبي"
const activitiesEn = [
  { strong: "Cargo Handling & Booking", normal: " - Sea, Air & Land" },
  { strong: "Customs Clearance", normal: "" },
  { strong: "Import & Export", normal: " - Permits and Certificates" },
  { strong: "Trade & Logistics", normal: " - Payments" },
  { strong: "Value Added", normal: " - Services" },
];

const activitiesAr = [
  { strong: "مناولة وحجز الشحن", normal: " - بحرًا وجوًا وبرًا" },
  { strong: "التخليص الجمركي", normal: "" },
  { strong: "تصاريح وشهادات", normal: " - الاستيراد والتصدير" },
  { strong: "المدفوعات", normal: " - التجارية واللوجستية" },
  { strong: "خدمات", normal: " - القيمة المضافة" },
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
        <div className="text-center mb-1 mt-1">
          
          <h5 className="dark-blue fw-bold mb-1 py-2 fs-1 font-GE_SSBold" dir="rtl">
            {pageTitle_ar}
          </h5>
          <h5 className="dark-blue fw-bold text-uppercase fs-1 font-GothamBold ">
            {pageTitle_en}
          </h5>
        </div>

        {/* Main Row */}
        <div className="row align-items-start bg-white    rounded-1  justify-content-center gy-4 mt-2">
          {/* Left English Block */}
          <div className="col-12 col-md-5">
            <div className="blue-font-bg text-white rounded-3 p-2 mb-3 fw-bold font-GothamMedium fs-5" style={{height:'7vh'}}>
            DIGITAL CITY EXPERIENCES COVERING MORE THAN 400 SERVICES FOR OVER
              20 ENTITIES
            </div>
            <ul className="list-unstyled fw-semibold blue-font mb-0 font-GothamMedium fs-3">
              {activitiesEn.map((item,index) => <li   key={index}>
                      <strong>{item.strong} </strong>
                      
                      {item.normal}</li>)}
            </ul>
          </div>

          {/* Center QR */}
          <div className="col-8 col-sm-6 col-md-2 text-center position-relative d-flex flex-column justify-content-end align-items-center" style={{height: '389px' }}>
            <img
              src={qrInvest}
              alt="QR Code"
              className="img-fluid mb-3"
              style={{ maxWidth: "150px" }}
            />
            <div className="dark-blue-bg text-white rounded-3 fw-semibold py-2 px-4 mx-auto fs-3">
              <div className="text-uppercase font-GE_SSBold " >جرب الآن</div>
              <div className="text-uppercase font-GothamMedium">Explore</div>
            </div>
          </div>

          {/* Right Arabic Block */}
          <div className="col-12 col-md-5" dir="rtl">
            <div className="blue-font-bg text-white rounded-3 p-2 mb-3 fw-bold text-end font-GE_SSBold fs-5" style={{height:'7vh'}}>
      


                        تجارب المدينة الرقمية تغطي أكثر من<br /> 400 خدمة لأكثر من 20 جهة
            </div>
            <ul className="list-unstyled fw-semibold blue-font mb-0 text-end font-GE_SSMedium fs-3">
              {activitiesAr.map((item,index) => <li   key={index}>
                      <strong>{item.strong} </strong>
                      
                      {item.normal}</li>)}
            </ul>
          </div>
        </div>

         <footer className="dn__logos w-100">
            
                  <img src={DubaiTradSponsers} className="mw-100" alt="Dubai Now partners" />
                </footer>
      </div>
    </main>
  );
};

export default TradeInDubai;