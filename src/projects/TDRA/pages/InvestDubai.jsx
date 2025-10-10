import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import dubai_government from "../../../assets/tdra/dubai_government.svg";
import dubai_police_logo from "../../../assets/tdra/dubai_police_logo.png";
import qr from "../../../assets/tdra/qr.png";

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

  const logoFooter = new Array(18).fill(0).map((_, i) => ({
    id: i,
    src: dubai_police_logo,
  }));

  return (
    <main className="min-vh-100 d-flex align-items-start bg-light">
      <div className="container py-5">
        {/* logo */}
         <div className="col-12 col-md-3 text-md-start text-start mb-3 mb-md-0 my-5 ">
          <img
            src={dubai_government}
            alt="Government of Dubai"
            className="img-fluid mb-5"
            style={{ height: "100px" }}
          /></div>
        {/* Header */}
        <div className="text-center mb-4 mt-4">
          
          <h5 className="dark-blue fw-bold mb-1 fs-2 font-GE_SSBold" dir="rtl">
            {pageTitle_ar}
          </h5>
          <h5 className="dark-blue fw-bold text-uppercase fs-2 font-GothamBold ">
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
            <ul className="list-unstyled fw-semibold blue-font mb-0 font-GothamMedium">
              {english_content.map((item, idx) => (
                <li key={idx}>- {item.data}</li>
              ))}
            </ul>
          </div>

          {/* Center QR */}
          <div className="col-8 col-sm-6 col-md-2 text-center position-relative">
            <img
              src={qr}
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
            <ul className="list-unstyled fw-semibold blue-font mb-0 text-end font-GE_SSMedium">
              {arabic_content.map((item, idx) => (
                <li key={idx}>- {item.data}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer logos */}
        <div className="mt-5">
          <hr />
          <div className="d-flex flex-wrap justify-content-center align-items-center gap-4 py-3">
            {logoFooter.map((logo) => (
              <img
                key={logo.id}
                src={logo.src}
                alt="Partner logo"
                className="img-fluid opacity-75"
                style={{ height: "34px" }}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default InvestDubai;
