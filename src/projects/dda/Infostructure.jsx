import { memo } from "react";


import secondLogo from "../../assets/secondLogo.png";


const sectionTitleEn = "RECRUITMENT AGENTS";
const sectionTitleAr = "وكلاء التوظيف";






// const pageTitle_ar = "الاصطناعي لحكومة دبي";
const pageTitle_ar =   { num1: "منصة البنية التحتية للذكاء",num2:"الاصطناعي لحكومة دبي" };
const pageTitle_en =   { num1: "DUBAI GOVERNMENT AI",num2:" INFRASTRUCTURE PLATFORM" };



const headSection_en = "A shared government AI platform offering GPU and LLM-as-a-Service, with powerful toolkits enabling gov entities to build, deploy, and scale their own AI solutions.";
const headSection_ar = "منصة حكومية موحدة للذكاء الاصطناعي توفر خدمات وحدة معالجة الرسومات GPU وخدمات النماذج اللغوية الكبيرة، وتوفر أدوات متقدمة تتيح للجهات الحكومية تطوير حلولها الذكية ونشرها وتوسيع نطاقها بمرونة وكفاءة عالية.";

const activitiesEn = [
  { strong: "LLM as a service" },
  { strong: "GPUs as a service" },
  { strong: "Low code / No code" },
];

const activitiesAr = [
  { strong: "خدمة النماذج اللغوية الكبرى" },
  { strong: "خدمة وحدات معالجة الرسومات" },
  { strong: "الذكاء الاصطناعي منخفض البرمجة" },
];

const Infostructure = memo(function Infostructure() {
  return (



 <section className="ags bg-transparent se p-4 w-100 justify-content-center flex-column">
      {/* header */}
                <header className="ags__header vh-25 mb-4">
                  <div className="ags__agent-brand g-4">
                    <span className="ags__brand-en py-2 "  style={{fontSize: '40px'}}>{pageTitle_ar.num1} <br/>{pageTitle_ar.num2}</span>
                    <span className="ags__brand-ar font-dda_ar py-2" style={{fontSize: '40px'}} >{pageTitle_en.num1} <br/>{pageTitle_en.num2}</span>
                  </div>
                </header>
                      <div className="se__intro text-ddablue m-4">
          <p className="se__intro-en fs-1 px-2">
          {headSection_en}
          </p>
          <span className="se__divider" aria-hidden="true" />
          <p className="se__intro-ar fs-1 px-2">
         {headSection_ar}
          </p>
        </div>
  <div className="row w-100 g-4  d-flex  justify-content-around align-items-stretch row-cols-1 row-cols-md-2 row-cols-lg-3">
    
          
            <div  className="ags__card_container_copilot col d-flex w-50">
              <article className="ags__card position-relative bg-transparent">
           

 

                {/* activities */}
                <div className="ags__roles-head-copilot">
                  <span className="ags__pill fs-1 ">{sectionTitleEn}</span>
                  {/* <span className="ags__pill  ags__pill--ar">{sectionTitleAr}</span> */}
                </div>

    
                
                  {/* Roles two-column list */}
                  <div className=" pb-4   position-relative ">
                    <div className="ags__roles h-unset border-0 d-flex flex-column bg-transparent" style={{height: '105px'}} >
                   
        

                     <ul className="ags__list ags__list--en h-70  pb-4" >
                        {activitiesEn.map((item) => <li className="fs-2 px-4 " style={{minHeight:'unset'}}  key={item}>
                                <strong>{item.strong} </strong>
                                
                                {item.normal}</li>)}
                  
                    </ul>

                    </div>
                
                  </div>
              </article>
            </div>
             <div  className="ags__card_container_copilot col d-flex w-50">
              <article className="ags__card position-relative bg-transparent">
           

 

                {/* activities */}
                <div className="ags__roles-head-copilot">
                  {/* <span className="ags__pill ">{sectionTitleEn}</span> */}
                  <span className="ags__pill  ags__pill--ar fs-1 ">{sectionTitleAr}</span>
                </div>

    
                
                  {/* Roles two-column list */}
                  <div className=" pb-4   position-relative ">
                    <div className="ags__roles h-unset border-0 d-flex flex-column bg-transparent" style={{height: '105px'}}>
                   
        

                    <ul className="ags__list ags__list--ar h-50  pb-4 font-dda_ar fs-6">
                      {activitiesAr.map((item) => <li className="fs-1 min-vh-0  px-4  " style={{minHeight:'unset'}}  key={item}>
                                <strong>{item.strong} </strong>
                                
                                {item.normal}</li>)}
                    </ul>
                    
                    </div>
                
                  </div>
              </article>
            </div>
       
  </div>
        {/* CTA */}
                  <div className="ags__cta py-3 h-unset d-flex justify-content-center align-item-center" >
                    {/* onClick={() => window.open(RedirectBase.ProductCopilot.link, "_blank")} */}
                    <button type="button" className="ags__btn cursor-pointer"  style={{height:'auto' ,width:'360px'}} >
                      <span className="ags__btn-ar font-dda_ar fs-1 ">جرّب الآن</span>
                      <span className="ags__btn-en fs-1  ">EXPLORE</span>
                    </button>
                  </div>
    </section>
  );
});

export default Infostructure;
