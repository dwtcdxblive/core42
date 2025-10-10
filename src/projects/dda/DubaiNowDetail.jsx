import { Link, useParams } from "react-router-dom";
import { dubaiNowItems } from "./DubaiNowData";
import TradeQR from "../../assets/dubai-now-QR.png";

export default function DubaiNowDetail() {
  const { slug } = useParams();
  const item = dubaiNowItems.find(x => x.slug === slug) || dubaiNowItems[0];

  return (
    <section className="dn-detail">
      <div className="dn-detail__card">
        <div className="dn-detail__back">
          <Link to="/projects/dda/dubai-now" className="dn-detail__back-link">← <span dir="rtl">رجوع</span> / Back</Link>
        </div>

        <header className="dn-detail__header text-center">
          <p className="dn-detail__kicker font-title" dir="rtl">تجارب المدينة الرقمية</p>
          <h1 className="dn-detail__title font-title">{item.en}</h1>
          <div className="dn-detail__pill font-title" dir="rtl">{item.ar}</div>
        </header>

        {/* Replace this box with your real player when ready */}
        <div className="dn-detail__video">
          {item.videoSrc ? (
            <iframe
              src={item.videoSrc}
              title={item.en}
              frameBorder="0"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div className="dn-detail__video-box">VIDEO WILL BE INSERTED HERE</div>
          )}
        </div>

        <div className="dn-detail__cta">
          <img src={TradeQR} alt="QR" />
        </div>
      </div>
    </section>
  );
}

