import { Link, useParams } from "react-router-dom";
import { dubaiNowItems } from "./DubaiNowData";
import back from "../../assets/back.svg";
import qrCode from "../../assets/dubaiNow/qrCode.png";


export default function DubaiNowDetail() {
   const detectSlugLanguage=(slug)=>{
  if (typeof slug !== "string") return "en"; // default fallback

  // Arabic Unicode range: \u0600–\u06FF
  const arabicPattern = /[\u0600-\u06FF]/;

  return arabicPattern.test(slug) ? "ar" : "en";
}
  const { slug } = useParams();
  const isArabic=detectSlugLanguage(slug)=='ar';
  const item = isArabic?dubaiNowItems.find(x => x.slug_ar === slug) : dubaiNowItems.find(x => x.slug_en === slug);

  return (
    <section className="dn-detail">
      <div className="dn-detail__card h-100">
        <div className="dn-detail__back d-flex">
         
          <Link to="/projects/dda/dubai-now" className="dn-detail__back-link"> <img src={back} alt="back" width='97px' height='80px' /></Link>
        </div>
        <div className="d-flex flex-column justify-content-start align-item-center h-100">
        <header className="dn-detail__header text-center h-15vh  d-flex flex-column justify-content-center align-item-center"  >
          <h1 className="dn-detail__title font-title" dir="rtl">{item.ar}</h1>
          <h1 className="dn-detail__title font-title">{item.en}</h1>
      
        </header>
        <div className=" se se__cta py-4 h-10vh " >
          {item.img? <img src={item.img} width='240px'/>:
          
            <button type="button" className="se__btn  ">
            <span className="se__btn-ar font-dda_ar ">
           {item.ar}

            </span>
            <span className="se__btn-en ">{item.en}</span>
          </button>
          }
        
        </div>
    
        {/* Replace this box with your real player when ready */}
        <div className="dn-detail__video h-30vh">
       
          {item.videoSrc_en ? (
            <iframe
              src={detectSlugLanguage(slug)=='ar'? item.videoSrc_ar:item.videoSrc_en }
              title={item.en}
           
             
                referrerPolicy="strict-origin-when-cross-origin" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
  style={{ width: '100%', aspectRatio: '16/9', border: '1px solid #1c2654' ,boxShadow: '0 4px 12px rgba(28, 38, 84, 0.3)',backgroundColor:'transparent' }}
            />
          ) : (
            <div className="dn-detail__video-box">VIDEO WILL BE INSERTED HERE</div>
          )}
        </div>
  <footer className="dn__update__logo h-15vh">
          <img src={qrCode}  width='100%' alt="dubaiNowDetail" />
        </footer>
        {/* <div className="dn-detail__cta">
          <img src={dubaiNowDetail} alt="QR" />
        </div> */}
        </div>
      </div>
    </section>
  );
}

