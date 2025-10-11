
import { memo } from "react";

const SourcingAgent = memo(function SourcingAgent() {
  const activitiesEn= [
    { strong: "Tenders", normal: "Coordinator" },
    { strong: "Supplier", normal: "Participation" },
    { strong: "Answer Supplier", normal: "Inquiries" },
    { strong: "New Supplier", normal: "Registration" },
    { strong: "Profile", normal: "Modifications" },
  ];
  
  const activitiesAr= [
    { strong: "منصة الإماراتيين", normal: " - حصرية للمواطنين" },
    { strong: "العائلة", normal: " - التعليم والرعاية الصحية في مكان واحد" },
    { strong: "المدفوعات", normal: " - كل الفواتير في كل مرة" },
    { strong: "القيادة", normal: " - جميع خدمات القيادة في مكان واحد" },
    { strong: "القيادة", normal: " - جميع خدمات القيادة في مكان واحد" },
  ];
  const titleEn= "Sourcing Agents";
const titleAr= "وكلاء التوريد";

const sectionTitleEn= "Project / Product Description";
const sectionTitleAr= "وصف المشروع / المنتج";
  return (
    <section className="se vh-100">
      <div className="se__card   vh-100">
        {/* Header / Logo */}
        <header className="se__header h-25 ">
     
          <div className="se__brand">
            <span className="se__brand-ar font-36 font-bold ">{titleAr} </span>
            <span className="se__brand-en font-36 font-bold">{titleEn}</span>
          </div>
        </header>


        {/* Roles header pills */}
        <div className="se__roles-head  py-2  ">
          <span className="se__pill se__pill--en  fs-5 h-auto ">{sectionTitleEn}</span>
          <span className="se__pill se__pill--ar fs-5 h-auto">{sectionTitleAr}</span>
        </div>

        {/* Roles two-column list */}
        <div className=" pb-4  vh-50 position-relative ">
          <div className="se__roles">
          <ul className="se__list se__list--en  pb-4">
               {activitiesEn.map((item) => <li className="fs-4" key={item}>
                      <strong>{item.strong} </strong>
                      
                      {item.normal}</li>)}
        
          </ul>

          <span className="se__divider se__divider--roles" aria-hidden="true" />

          <ul className="se__list se__list--ar  pb-4 font-dda_ar fs-6">
            {activitiesAr.map((item) => <li className="fs-4"  key={item}>
                      <strong>{item.strong} </strong>
                      
                      {item.normal}</li>)}
          </ul>
           </div>
           {/* CTA */}
        <div className="se__cta  position-absolute  start-50 translate-middle-x" style={{bottom:'10px'}}>
          <button type="button" className="se__btn ">
            <span className="se__btn-ar font-dda_ar ">جرّب الآن</span>
            <span className="se__btn-en ">EXPLORE</span>
          </button>
        </div>
        </div>

       
      </div>
    </section>
  );
});

export default SourcingAgent;
