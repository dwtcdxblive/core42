import Logo from "../../assets/smartemployee.png"; // adjust path if needed
import { memo } from "react";


const SmartEmplyee = memo(function SmartEmplyee() {


const activitiesEn= [
  { strong: "Information Inquiries", normal: "Instant answers" },
  { strong: "Apply for Services", normal: "Submit requests fast" },
  { strong: "Laws & Policies", normal: "Quick access to guidelines" },
  { strong: "Expense Bill Analysis", normal: "Validate claims" },
  { strong: "Receipt Matching", normal: "Automated reconciliation" },
  { strong: "Financial Reconciliation", normal: "Ensure accuracy" },
  { strong: "Workforce Scheduler Generator", normal: "Optimized schedules" },
];

 const activitiesAr= [ 
  { strong: "استفسارات المعلوماتية", normal: " - إجابات فورية" },
  { strong: "التقديم على الخدمات", normal: " - إرسال الطلبات بسرعة" },
  { strong: "القوانين والسياسات", normal: " - وصول سريع إلى الإرشادات" },
  { strong: "تحليل فواتير المصروفات", normal: " - التحقق من المطالبات" },
  { strong: "مطابقة الإيصالات", normal: " - تسوية آلية" },
  { strong: "التسوية المالية", normal: " - ضمان الدقة المالية" },
  { strong: "منشئ جداول القوى العاملة", normal: " - جداول عمل محسّنة" },
];
const titleEn= "Sourcing Agents";
const titleAr= "وكلاء التوريد";

const sectionTitleEn= "ROLES";
const sectionTitleAr= "المهام";
  return (
    <section className="se vh-100">
      <div className="se__card   vh-100">
        {/* Header / Logo */}
        <header className="se__header ">
     
          <div className="se__brand">
               <img className="se__logo" src={Logo} alt="smarTemployee" />
      
          </div>
        </header>

        <div className="se__intro text-ddablue py-0">
          <p className="se__intro-en">
            <strong>Your Smart Work Companion:</strong> Guides employees with
            instant answers, seamless requests, and policy
          </p>
          <span className="se__divider" aria-hidden="true" />
          <p className="se__intro-ar">
            <strong>رفيقك الذكي في العمل:</strong> يوجّه الموظفين بإجابات
            فورية، وطلبات سلسة، ويتيح الوصول السهل إلى القوانين والسياسات.
          </p>
        </div>
        {/* Roles header pills */}
        <div className="se__roles-head  py-2  ">
          <span className="se__pill se__pill--en  fs-5 h-auto ">{sectionTitleEn}</span>
          <span className="se__pill se__pill--ar fs-5 h-auto">{sectionTitleAr}</span>
        </div>

        {/* Roles two-column list */}
        <div className=" pb-4  vh-50 position-relative ">
          <div className="se__roles">
          <ul className="se__list se__list--en  pb-4">
               {activitiesEn.map((item,index) => <li  key={index}>
                      <strong>{item.strong} </strong>
                      
                      {item.normal}</li>)}
        
          </ul>

          <span className="se__divider se__divider--roles" aria-hidden="true" />

          <ul className="se__list se__list--ar  pb-4 font-dda_ar fs-6">
            {activitiesAr.map((item,index) => <li   key={index}>
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

export default SmartEmplyee;
