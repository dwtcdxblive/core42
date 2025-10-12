import GovDubai from "../../assets/dubai-gov.png";
import TradeQR from "../../assets/build-dubai-QR.png";
import LogosStrip from "../../assets/build-dubai-logos.png";
import Explore from "../../assets/explore-btn.png";
import { RedirectBase } from "./RedirectBase";
import secondLogo from "../../assets/secondLogo.png";
export default function BuildInDubai() {
  return (
    <section className="trade">
      <div className="trade__frame">
        {/* top-left government mark */}
        <img className="trade__gov" src={GovDubai} alt="Government of Dubai" />

        {/* bilingual headline */}
        <header className="trade__header font-title">
          <h2 className="trade__title-ar font-title">
            المنصة الرقمية المتخصصة في البناء في دبي
          </h2>
          <h1 className="trade__title-en font-title">
            THE SPECIALIZED DIGITAL PLATFORM FOR BUILD IN DUBAI
          </h1>
        </header>

        {/* 3-column band */}
        <div className="trade__band">
          {/* EN card */}
          <article className="trade__card">
            <h3 className="trade__pill font-title">
              DIGITAL CITY EXPERIENCES COVERING MORE THAN 200 SERVICES FOR MORE THAN 6 ENTITIES
            </h3>
            <ul className="trade__list trade__list--en font-title">
              <li className="font-title">Building Works Licenses</li>
              <li className="font-title">Building Expansion and Elevation</li>
              <li className="font-title">No-Objection Certificates (NOCs)</li>
            </ul>
          </article>

          {/* QR + CTA (image button) */}
          <div className="trade__qr cursor-pointer" onClick={() => window.open(RedirectBase.DubaiBuild.link, "_blank")}>
            <img src={TradeQR} className="trade__qr-img" alt="QR code" />
            <a  
            href={RedirectBase.DubaiBuild.link}
            type="button" className="bg-transparent border-0 p-0  text-center text-decoration-none">
              <img src={Explore} className="w-50" alt="Explore" />
            </a>
          </div>

          {/* AR card */}
          <article className="trade__card trade__card--ar">
            <h3 className="trade__pill font-title" dir="rtl">
              تجارب المدينة الرقمية تغطي أكثر من 200 خدمة لأكثر من 6 جهات
            </h3>
            <ul className="trade__list trade__list--ar font-title" dir="rtl">
              <li className="font-title">تراخيص أعمال البناء</li>
              <li className="font-title">التوسعة والارتفاع للبناء</li>
              <li className="font-title">شهادات عدم الممانعة</li>
            </ul>
          </article>
        </div>

        {/* logos strip */}
        <footer className="trade__logos">
          <img src={LogosStrip} alt="Strategic partners" />
        </footer>
      </div>
    </section>
  );
}
