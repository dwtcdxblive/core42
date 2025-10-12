import GovDubai from "../../assets/dubai-gov.png";
import LogosStrip from "../../assets/dubai-justice-logos.png";
import Explore from '../../assets/explore-btn.png';
import EnTypo from '../../assets/justice-typo-en.png'
import ArTypo from '../../assets/justice-typo-ar.png'
import { RedirectBase } from "./RedirectBase";
import secondLogo from "../../assets/secondLogo.png";
export default function JusticeInDubai() {
  return (
    <section className="trade  bg-transparent trade--justice">
      <div className="trade__frame">
        {/* top-left government mark */}
        <img className="trade__gov" src={GovDubai} alt="Government of Dubai" />

        {/* bilingual headline */}
        <header className="trade__header font-title">
          <h2 className="trade__title-ar font-title">
            المنصة الرقمية المتخصصة في العدال في دبي
          </h2>
          <h1 className="trade__title-en font-title">
            THE SPECIALIZED DIGITAL PLATFORM FOR JUSTICE IN DUBAI
          </h1>
        </header>

        {/* band: EN list | AR list (no QR) */}
        <div className="trade__band trade__band--two">
          {/* EN card */}
          <article className="trade__card">
            <h3 className="trade__pill font-title">
              DIGITAL CITY EXPERIENCES COVERING MORE THAN 145 SERVICES FOR MORE THAN 9 ENTITIES
            </h3>
            <ul className="trade__list trade__list--en font-title">
              <li className="font-title">Lawsuits of All Types (Civil, Commercial, Real Estate, etc.)</li>
              <li className="font-title">Enforcement of Criminal Judgments and Orders Services</li>
              <li className="font-title">General Judicial Services and complaints</li>
            </ul>
          </article>
        <div className="trade__cta cursor-pointer" onClick={() => window.open(RedirectBase.ProductCopilot.link, "_blank")}>
            <a  
            href={RedirectBase.ProductCopilot.link}
            type="button" className="bg-transparent border-0 p-0 text-center text-decoration-none">
              <img src={Explore} className="w-50" alt="Explore" />
            </a>
        </div>
          {/* AR card */}
          <article className="trade__card trade__card--ar">
            <h3 className="trade__pill font-title" dir="rtl">
              تجارب المدينة الرقمية تغطي أكثر من 145 خدمة لأكثر من 9 جهات
            </h3>
            <ul className="trade__list trade__list--ar font-title" dir="rtl">
              <li className="font-title">الدعاوى بجميع أنواعها (مدني، تجاري، عقاري، إلخ)</li>
              <li className="font-title">خدمات تنفيذ الأحكام والأوامر الجزائية</li>
              <li className="font-title">الخدمات القضائية العامة والشكاوى</li>
            </ul>
          </article>
        </div>

        {/* Center CTA */}


        {/* logos strip */}
        <footer className="trade__logos">
          <img src={LogosStrip} alt="Justice ecosystem partners" />
        </footer>
      </div>
    </section>
  );
}
