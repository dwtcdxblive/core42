import { memo } from "react";
import secondLogo from "../../assets/secondLogo.png";

 const activitiesEn=[
    { strong: "Job Posting Generator", normal: " – Creates postings in seconds" },
    { strong: "Resume Matcher", normal: " – Finds best-fit candidates" },
    { strong: "Interview Question Builder", normal: " – Generates role-specific questions" },
    { strong: "Pre-Screening Interview", normal: " – AI conducts first-round filtering" },
  ];
  const activitiesAr=[
    { strong: "منصة الإماراتيين", normal: " - حصرية للمواطنين" },
    { strong: "العائلة", normal: " - التعليم والرعاية الصحية في مكان واحد" },
    { strong: "المدفوعات", normal: " - كل فواتيرك في كل مرة" },
    { strong: "القيادة", normal: " - جميع خدمات القيادة في مكان واحد" },
  ];


const sectionTitleEn = "RECRUITMENT AGENTS";
const sectionTitleAr = "وكلاء التوظيف";


const Recruitment = memo(function Recruitment() {
  return (



 <section className="ags py-4 w-100 justify-content-center flex-column">
      {/* header */}
                <header className="ags__header vh-25 ">
                  <div className="ags__agent-brand g-4">
                    <span className="ags__brand-ar font-dda_ar" style={{fontSize: '50px'}} >{sectionTitleEn}</span>
                    <span className="ags__brand-en "  style={{fontSize: '70px'}}>{sectionTitleAr}</span>
                  </div>
                </header>
  <div className="row w-100 g-4  d-flex  justify-content-around align-items-stretch row-cols-1 row-cols-md-2 row-cols-lg-3">
    
          
            <div  className="ags__card_container_copilot col d-flex">
              <article className="ags__card position-relative bg-transparent">
           

 

                {/* activities */}
                <div className="ags__roles-head-copilot">
                  <span className="ags__pill fs-1 ">{sectionTitleEn}</span>
                  {/* <span className="ags__pill  ags__pill--ar">{sectionTitleAr}</span> */}
                </div>

    
                
                  {/* Roles two-column list */}
                  <div className=" pb-4   position-relative ">
                    <div className="ags__roles h-unset border-0 d-flex flex-column bg-transparent" style={{height: '385px'}} >
                   
        

                     <ul className="ags__list ags__list--en h-70  pb-4" >
                        {activitiesEn.map((item) => <li className="fs-2 px-4 " style={{minHeight:'unset'}}  key={item}>
                                <strong>{item.strong} </strong>
                                
                                {item.normal}</li>)}
                  
                    </ul>

                    </div>
                
                  </div>
              </article>
            </div>
             <div  className="ags__card_container_copilot col d-flex">
              <article className="ags__card position-relative bg-transparent">
           

 

                {/* activities */}
                <div className="ags__roles-head-copilot">
                  {/* <span className="ags__pill ">{sectionTitleEn}</span> */}
                  <span className="ags__pill  ags__pill--ar fs-1 ">{sectionTitleAr}</span>
                </div>

    
                
                  {/* Roles two-column list */}
                  <div className=" pb-4   position-relative ">
                    <div className="ags__roles h-unset border-0 d-flex flex-column bg-transparent" style={{height: '385px'}}>
                   
        

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
        {/* onClick={() => window.open(RedirectBase.SmartEmplyee.link, "_blank")}  */}
                  <div className="ags__cta py-3 h-unset d-flex justify-content-center align-item-center" >
                    <button type="button" className="ags__btn cursor-pointer"  style={{height:'auto' ,width:'360px'}} >
                      <span className="ags__btn-ar font-dda_ar fs-1 ">جرّب الآن</span>
                      <span className="ags__btn-en fs-1  ">EXPLORE</span>
                    </button>
                  </div>
    </section>
  );
});

export default Recruitment;
