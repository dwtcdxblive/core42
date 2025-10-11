import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import qrInvest from "../../assets/qrInvest.png";
import DubaiInvestSponsers from "../../assets/DubaiInvestSponsers.svg";
import GovDubai from "../../assets/dubai-gov.png";

const InvestDubai = () => {
  const pageTitle_en =
    "THE UNIFIED PLATFORM FOR ALL BUSINESSES SERVICES IN THE CITY.";
  const pageTitle_ar = "المنصة الموحدة لجميع خدمات الأعمال في المدينة";

  const english_content = [
    { data: "Establishing A business" },
    { data: "Practicing a Business" },
    { data: "Permits and approvals" },
    { data: "Consultation and value-added services." },
  ];

  const arabic_content = [
    { data: "تأسيس الأعمال" },
    { data: "مزاولة الأعمال" },
    { data: "التراخيص والموافقات" },
    { data: "الاستشارات والخدمات ذات القيمة المضافة" },
  ];



  return (
    <main className="min-vh-100 d-flex align-items-start bg-light">
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
        <div className="text-center mb-4 mt-4">
          
          <h5 className="dark-blue py-4 fw-bold mb-1 fs-1 font-GE_SSBold" dir="rtl">
            {pageTitle_ar}
          </h5>
          <h5 className="dark-blue py-1 fw-bold text-uppercase fs-1 font-GothamBold ">
            {pageTitle_en}
          </h5>
        </div>

        {/* Main Row */}
        <div className="row align-items-start bg-gray rounded-1  justify-content-center gy-4 mt-5">
          {/* Left English Block */}
          <div className="col-12 col-md-5">
            <div className="blue-font-bg text-white rounded-3 p-2 mb-3 fw-bold font-GothamMedium fs-5">
              DIGITAL CITY EXPERIENCES COVERING <br />
              700 SERVICES FOR MORE THAN 50 ENTITIES
            </div>
            <ul className="list-unstyled fw-semibold blue-font mb-0 font-GothamMedium fs-3">
              {english_content.map((item, idx) => (
                <li key={idx}>- {item.data}</li>
              ))}
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
            <div className="dark-blue-bg text-white rounded-3 fw-semibold py-2 px-4 mx-auto fs-3">
              <div className="text-uppercase font-GE_SSBold " >جرب الآن</div>
              <div className="text-uppercase font-GothamMedium">Explore</div>
            </div>
          </div>

          {/* Right Arabic Block */}
          <div className="col-12 col-md-5" dir="rtl">
            <div className="blue-font-bg text-white rounded-3 p-2 mb-3 fw-bold text-end font-GE_SSBold fs-5">
              تجارب المدينة الرقمية تغطي أكثر من <br />
              خدمة لأكثر من
            </div>
            <ul className="list-unstyled fw-semibold blue-font mb-0 text-end font-GE_SSMedium fs-3">
              {arabic_content.map((item, idx) => (
                <li key={idx}>- {item.data}</li>
              ))}
            </ul>
          </div>
        </div>

         <footer className="dn__logos w-100">
            
                  <img src={DubaiInvestSponsers} className="mw-100" alt="Dubai Now partners" />
                </footer>
      </div>
    </main>
  );
};

export default InvestDubai;