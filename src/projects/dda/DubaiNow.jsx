import { memo } from "react";
import { Link } from "react-router-dom";
import GovDubai from "../../assets/dubai-gov.png";
import LogosStrip from "../../assets/dubai-now-logos.png";
import TradeQR from "../../assets/trade-QR.png";
import { dubaiNowItems } from "./DubaiNowData";

const DubaiNow = memo(function DubaiNow() {
  // split EN/AR columns evenly
  const mid = Math.ceil(dubaiNowItems.length / 2);
  const left = dubaiNowItems.slice(0, mid);
  const right = dubaiNowItems.slice(mid);

  return (
    <section className="dn">
      <div className="dn__card">
        <header className="dn__header">
          <img className="dn__logo" src={GovDubai} alt="Government of Dubai" />
          <div className="dn__titles font-title">
            <h2 className="dn__title-ar" dir="rtl">المنصة الموحدة لجميع خدمات الأفراد في المدينة</h2>
            <h1 className="dn__title-en">THE UNIFIED PLATFORM FOR ALL INDIVIDUAL SERVICES IN THE CITY.</h1>
          </div>
        </header>

        <div className="dn__intro">
          <span className="dn__pill font-title">DIGITAL CITY EXPERIENCES COVERING 350 SERVICES FOR MORE THAN 20 ENTITIES</span>
          <span className="dn__divider" aria-hidden="true" />
          <span className="dn__pill dn__pill--ar font-title" dir="rtl">تجارب المدينة الرقمية تغطي أكثر من 350 خدمة لأكثر من 20 جهة</span>
        </div>

        <div className="dn__lists">
          {/* EN column */}
          <ul className="dn__list dn__list--en font-title">
            {left.map(i => (
              <li key={i.slug}>
                <Link className="dn__link" to={`/projects/dda/dubai-now/${i.slug}`}>{i.en}</Link>
              </li>
            ))}
          </ul>

          <span className="dn__lists-divider" aria-hidden="true" />

          {/* AR column */}
          <ul className="dn__list dn__list--ar font-title" dir="rtl">
            {right.map(i => (
              <li key={i.slug}>
                <Link className="dn__link" to={`/projects/dda/dubai-now/${i.slug}`} dir="rtl">{i.ar}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="dn__cta">
          <img className="dn__qr" src={TradeQR} alt="QR" />
          <Link to={`/projects/dda/dubai-now/${dubaiNowItems[0].slug}`} className="dn__btn">
            <span className="dn__btn-ar">جرّب الآن</span>
            <span className="dn__btn-en">EXPLORE</span>
          </Link>
        </div>

        <footer className="dn__logos">
          <img src={LogosStrip} alt="Dubai Now partners" />
        </footer>
      </div>
    </section>
  );
});

export default DubaiNow;

