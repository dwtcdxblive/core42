import { memo } from "react";

const cards = [
  {
    key: "recruitment",
    titleAr: "مساعد التوظيف الافتراضي",
    titleEn: "RECRUITMENT AGENT",
    descAr:
      "التوظيف باستخدام الذكاء الاصطناعي بكل سهولة؛ أداة توظيف متقدمة تقوم تلقائيًا بإنشاء إعلانات الوظائف، ومطابقة السير الذاتية، وتجهيز مقابلات الوظائف، وتختار المرشحين الأكثر ملاءمة لكل وظيفة.",
    descEn:
      "AI Recruitment Agent that automates CV matching, pre-screening interviews, job posting, and candidate shortlisting.",
activitiesEn: [
  { strong: "Job ", normal: "Posting" },
  { strong: "Resume Evaluation ", normal: "and Matching" },
  { strong: "Interview Question ", normal: "Builder" },
  { strong: "Pre-Screening ", normal: "Interview" },
],

activitiesAr: [
  { strong: "  منشئ إعلانات الوظائف", normal: " - ينشئ الإعلان خلال ثوانٍ" },
  { strong: "  مطابق السير الذاتية", normal: " - يحدد المرشحين الأنسب للوظائف" },
  { strong: "  منشئ أسئلة المقابلات", normal: " - يُنشئ أسئلة خاصة بكل وظيفة" },
  { strong: "  المقابلة التمهيدية", normal: " - الذكاء الاصطناعي يجري عملية الفرز الأولى" },
],
  },
  {
    key: "sourcing",
    titleAr: "مساعد التوريد الافتراضي",
    titleEn: "SOURCING AGENT",
descAr:
  "ذكاء اصطناعي يعمل على تبسيط إدارة الموردين، ويدير دورة عمل المورد، والمشاركة في المناقصات، والتواصل بكفاءة.",
descEn:
  "AI Recruitment Agent that automates CV matching, pre-screening interviews, job posting, and candidate shortlisting for managers.",
  activitiesEn: [
  { strong: "Tenders", normal: "Coordinator" },
  { strong: "Supplier", normal: "Participation" },
  { strong: "Supplier", normal: "Inquiries" },
  { strong: "Supplier", normal: "Registration" },
  { strong: "Profile", normal: "Update" },
],

activitiesAr: [
  { strong: "  تنسيق المناقصات", normal: " - إدارة جميع أنشطة المناقصات" },
  { strong: "  مشاركة الموردين", normal: " - متابعة وضمان مشاركة الموردين" },
  { strong: "  الرد على استفسارات الموردين", normal: " - إجابات فورية على الاستفسارات" },
  { strong: "  تسجيل الموردين الجدد", normal: " - عملية تسجيل سريعة وسهلة" },
  { strong: "  تحديث الملف التعريفي", normal: " - تعديل المعلومات بسلاسة" },
],
  },
  {
    key: "procurement",
    titleAr: "مساعد العقود والمشتريات الافتراضي",
    titleEn: "PROCUREMENT & CONTRACT AGENT",
descAr:
  "وكيل ذكاء اصطناعي يدعم تقييم المناقصات وصياغة العقود ويضمن الامتثال والتحقق من الفواتير.",
descEn:
  "AI Sourcing Agent that supports tender evaluation, contract drafting, ensures compliance, and verifies invoices.",
   activitiesEn: [
  { strong: "Tender", normal: "Evaluation" },
  { strong: "Contract", normal: "Drafting" },
  { strong: "Contract", normal: "Analyzer" },
  { strong: "Invoice", normal: "Verification" },
],

activitiesAr: [
  { strong: "تقييم المناقصات", normal: " - تحليل العطاءات بسرعة وكفاءة" },
  { strong: "إعداد العقود", normal: " - توليد مسودات العقود آلياً" },
  { strong: "مجال العقود", normal: " - التحقق من الالتزام والمخاطر" },
  { strong: "التحقق من الفواتير" , normal: " -  أتمتة عمليات المراجعة والدقة" },
],
  },
];

const AgentsSuite = memo(function AgentsSuite() {
  return (



 <section className="ags py-4 w-100 d-flex justify-content-center">

  <div className="row w-100 g-4 justify-content-center align-items-stretch row-cols-1 row-cols-md-2 row-cols-lg-3">
     
          {cards.map((c) => (
            <div key={c.key} className="ags__card_container col d-flex">
              <article className="ags__card position-relative">
                {/* header */}
                <header className="ags__header ">
                  <div className="ags__agent-brand">
                    <span className="ags__brand-ar font-dda_ar">{c.titleAr}</span>
                    <span className="ags__brand-en">{c.titleEn}</span>
                  </div>
                </header>

                {/* intro */}
                <div className="ags__intro">
                     <p className="ags__intro-ar">{c.descAr}</p>
                  {/* <span className="ags__divider" aria-hidden /> */}
             
                    <p className="ags__intro-en">{c.descEn}</p>
                </div>

                {/* activities */}
                <div className="ags__roles-head">
                  <span className="ags__pill">ACTIVITIES</span>
                  <span className="ags__pill ags__pill--ar">النشاطات</span>
                </div>

    
                
                  {/* Roles two-column list */}
                  <div className=" pb-4  vh-50 position-relative ">
                    <div className="ags__roles">
                    <ul className="ags__list ags__list--en  pb-4">
                        {c.activitiesEn.map((item) => <li className="fs-4" key={item}>
                                <strong>{item.strong} </strong>
                                
                                {item.normal}</li>)}
                  
                    </ul>

                    <span className="ags__divider ags__divider--roles" aria-hidden="true" />

                    <ul className="ags__list se__list--ar  pb-4 font-dda_ar fs-6">
                      {c.activitiesAr.map((item) => <li className="fs-4"  key={item}>
                                <strong>{item.strong} </strong>
                                
                                {item.normal}</li>)}
                    </ul>
                    </div>
                    {/* CTA */}
                  <div className="ags__cta  position-absolute  start-50 translate-middle-x" style={{bottom:'10px'}}>
                    <button type="button" className="ags__btn ">
                      <span className="ags__btn-ar font-dda_ar ">جرّب الآن</span>
                      <span className="ags__btn-en ">EXPLORE</span>
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

export default AgentsSuite;
