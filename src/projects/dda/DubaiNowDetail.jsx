import { Link, useParams } from "react-router-dom";
import { dubaiNowItems } from "./DubaiNowData";
import back from "../../assets/back.svg";
import dubaiNowDetail from "../../assets/dubaiNowDetail.svg";


export default function DubaiNowDetail() {
  const { slug } = useParams();
  const item = dubaiNowItems.find(x => x.slug === slug) || dubaiNowItems[0];

  return (
    <section className="dn-detail">
      <div className="dn-detail__card h-100">
        <div className="dn-detail__back d-flex">
         
          <Link to="/projects/dda/dubai-now" className="dn-detail__back-link"> <img src={back} alt="back" width='97px' height='80px' /></Link>
        </div>
<div className="d-flex flex-column justify-content-start align-item-center h-100">
        <header className="dn-detail__header text-center h-15vh "  >
          <h1 className="dn-detail__title font-title" dir="rtl">{item.ar}</h1>
          <h1 className="dn-detail__title font-title">{item.en}</h1>
      
        </header>
        <div className=" se se__cta py-4 h-10vh " >
          <button type="button" className="se__btn  ">
            <span className="se__btn-ar font-dda_ar ">جرّب الآن</span>
            <span className="se__btn-en ">VOLUNTEER</span>
          </button>
        </div>
        {/* Replace this box with your real player when ready */}
        <div className="dn-detail__video h-30vh">
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
  <footer className="dn__update__logo h-15vh">
          <img src={dubaiNowDetail}  width='100%' alt="dubaiNowDetail" />
        </footer>
        {/* <div className="dn-detail__cta">
          <img src={dubaiNowDetail} alt="QR" />
        </div> */}
        </div>
      </div>
    </section>
  );
}

