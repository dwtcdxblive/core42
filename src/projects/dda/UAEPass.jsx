
// src/pages/UAEPASS.jsx
import React from "react";

import card_1 from "../../assets/uaepass/card_1.png";
import card_2 from "../../assets/uaepass/card_2.png";
import card_3 from "../../assets/uaepass/card_3.png";
import card_4 from "../../assets/uaepass/card_4.png";
import titleUaePass from "../../assets/uaepass/titleUaePass.png";
import uaepasssponsers from "../../assets/uaepass/uaepasssponsers.png";
import exploreuaepass from "../../assets/uaepass/exploreuaepass.png";
import uaeQode from "../../assets/uaepass/uaeQode.png";

export default function UAEPASS() {

  const features = [
    { 
      src:card_1,
      alt:'card_1',
      link:"uaepassstg://"
    },
    { 
      src:card_2,
      alt:'card_2',
      link:"uaepassstg://"
    },
    { 
      src:card_3,
      alt:'card_3',
      link:"uaepassstg://"
    },{ 
      src:card_4,
      alt:'card_4',
      link:"https://www.figma.com/design/U9aDLHXUxz29yQrBdWorgI/UAE-PASS-Home-Page-V3?node-id=74-1649&p=f&a%E2%80%A6"
    },

   
  ];
  return (
    <section className="uaepass d-flex justify-content-center align-items-center text-center">
      <div className="uaepass__sheet container" dir="rtl">
        {/* Title */}
        <img src={titleUaePass} alt="UAE Pass Title" className="w-100 mb-3" />

        {/* Explore UAE PASS */}
        <div className="my-3">
          <img
            src={exploreuaepass}
            alt="Explore UAE Pass"
            width="240"
            className="img-fluid"
          />
        </div>

     <div className="row g-3 justify-content-center mb-4 w-100">
  {features.map((f, i) => (
    <div key={i} className="col-6 col-md-6 col-lg-5"  onClick={() => window.open(f.link, "_blank")}  >
      <div className="uaepass__feature">
        <img src={f.src} alt={f.alt} className="img-fluid" />
      </div>
    </div>
  ))}
</div>

        {/* QR */}
        <div className="mt-4 mb-3">
          <div className="uaepass__qr mt-2">
            <img src={uaeQode} alt="QR code" />
          </div>
        </div>

        {/* Sponsors */}
        <div className="row justify-content-center align-items-center text-center">
          <img
            className="uaepass__logo img-fluid"
            src={uaepasssponsers}
            alt="UAE Pass Sponsors"
          />
        </div>
      </div>
    </section>
  );
}

