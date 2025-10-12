import { memo } from "react";
import { RedirectBase } from "./RedirectBase";
import secondLogo from "../../assets/secondLogo.png";
const cards = [
  {
    key: "copilot",
    titleAr: "وكيل اللجان",
    titleEn: "PRODUCT COPILOT",

   
    activitiesEn: [
      { strong: "Your smart CX partner: ", normal: " Instantly finds issues, gives insights, and keeps products healthy with less manual work." },
   
    ],
    activitiesAr: [
      { strong:      "يؤدي دور لجنة رقمية تسرّع عملية اتخاذ القرار،", normal: " -  وتحدّ من التأخير مع ضمان الدقة والشفافية في النتائج.", },

    ],
  },
  {
    key: "ai_committee",
    titleAr: "لجنة الذكاء الاصطناعي",
    titleEn: "AI COMMITTEE",

    activitiesEn: [
      { strong: "Multi-Agent AI for Smarter Decisions: ", normal: "AI agents (Procurement, Finance, HR, CX, Legal, and more) collaborate, debate, and make decisions. Humans can join when needed." },

    ],
    activitiesAr: [
      { strong:      "يؤدي دور لجنة رقمية تسرّع عملية اتخاذ القرار،", normal: " -  وتحدّ من التأخير مع ضمان الدقة والشفافية في النتائج.", },

    ],
  },
];
const sectionTitleEn= "Project / Product Description";
const sectionTitleAr= "وصف المشروع / المنتج";

const ProductCopilot = memo(function ProductCopilot() {
  return (



 <section className="ags py-4 w-100 d-flex justify-content-center">

  <div className="row w-100 g-4 justify-content-around align-items-stretch row-cols-1 row-cols-md-2 row-cols-lg-3">
     
          {cards.map((c) => (
            <div key={c.key} className="ags__card_container_copilot col d-flex">
              <article className="ags__card position-relative">
                {/* header */}
                <header className="ags__header ">
                  <div className="ags__agent-brand">
                    <span className="ags__brand-ar font-dda_ar" style={{fontSize: '46px'}} >{c.titleAr}</span>
                    <span className="ags__brand-en "  style={{fontSize: '46px'}}>{c.titleEn}</span>
                  </div>
                </header>

                {/* intro */}
                {/* <div className="ags__intro">
                     <p className="ags__intro-ar">{c.descAr}</p>
                
             
                    <p className="ags__intro-en">{c.descEn}</p>
                </div> */}

                {/* activities */}
                <div className="ags__roles-head-copilot">
                  <span className="ags__pill justify-content-center">{sectionTitleEn}</span>
                  <span className="ags__pill justify-content-center ags__pill--ar">{sectionTitleAr}</span>
                </div>

    
                
                  {/* Roles two-column list */}
                  <div className=" pb-4  vh-50 position-relative ">
                    <div className="ags__roles h-unset border-0 d-flex flex-column" style={{height:'288px'}}>
                   
        

                    <ul className="ags__list se__list--ar h-50  pb-4 font-dda_ar fs-6">
                      {c.activitiesAr.map((item) => <li className="fs-4 text-center"  key={item}>
                                <strong>{item.strong} </strong>
                                
                                {item.normal}</li>)}
                    </ul>
                     <ul className="ags__list ags__list--en h-70  pb-4" >
                        {c.activitiesEn.map((item) => <li className="fs-4 text-center" key={item}>
                                <strong>{item.strong} </strong>
                                
                                {item.normal}</li>)}
                  
                    </ul>

                    </div>
                    {/* CTA */}
                  <div className="ags__cta py-3 h-unset d-flex justify-content-center align-item-center" >
                    <button type="button" className="ags__btn cursor-pointer"  style={{height:'auto' ,width:'260px'}} onClick={() => window.open(RedirectBase.ProductCopilot.link, "_blank")}>
                      <span className="ags__btn-ar font-dda_ar fs-4 ">جرّب الآن</span>
                      <span className="ags__btn-en fs-4  ">EXPLORE</span>
                    </button>
                  </div>
                  </div>
              </article>
            </div>
          ))}
  </div>
    
    </section>
  );
});

export default ProductCopilot;
