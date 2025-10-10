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
      "Job Posting",
      "Resume Evaluation and Matching",
      "Interview Question Builder",
      "Pre-Screening Interview",
    ],
    activitiesAr: [
      "نشر إعلانات الوظائف",
      "مطابقة السير الذاتية",
      "منشئ أسئلة المقابلات",
      "إجراء مقابلة الفرز الأولي",
    ],
  },
  {
    key: "sourcing",
    titleAr: "مساعد التوريد الافتراضي",
    titleEn: "SOURCING AGENT",
    descAr:
      "مساعد التوريد باستخدام الذكاء الاصطناعي، يعمل على تبسيط إدارة الموردين، ويدير دورة عمل المورد، والمشاركة في المناقصات، والتواصل بكفاءة.",
    descEn:
      "AI Sourcing Agent that manages supplier registrations, tender participation, profile updates, and responds to supplier inquiries on tenders.",
    activitiesEn: [
      "Tenders Coordinator",
      "Supplier Participation",
      "Supplier Inquiries",
      "Supplier Registration",
    ],
    activitiesAr: [
      "منسق المناقصات",
      "مشاركة الموردين",
      "الرد على استفسارات/أسئلة الموردين",
      "تسجيل الموردين",
    ],
  },
  {
    key: "procurement",
    titleAr: "مساعد العقود والمشتريات الافتراضي",
    titleEn: "PROCUREMENT & CONTRACT AGENT",
    descAr:
      "مساعد العقود والمشتريات باستخدام الذكاء الاصطناعي؛ يدعم تقييم المناقصات وصياغة العقود ويضمن الامتثال والتحقق من الفواتير.",
    descEn:
      "An AI Procurement & Contract Agent that automates tender evaluations, contract generation, and invoice verification.",
    activitiesEn: [
      "Tender Evaluation",
      "Contract Drafting",
      "Contract Analyzer",
      "Invoice Verification",
    ],
    activitiesAr: [
      "تقييم المناقصات",
      "إعداد العقود",
      "تحليل العقود",
      "التحقق من الفواتير",
    ],
  },
];

const AgentsSuite = memo(function AgentsSuite() {
  return (
    <section className="py-4">
      <div className="container">
        <div className="row g-4 align-items-stretch">
          {cards.map((c) => (
            <div key={c.key} className="col-12 col-md-6 col-lg-4">
              {/* Card = flex column so we can space sections and pin CTA */}
              <div className="card h-100 shadow-sm">
                <div className="card-body d-flex flex-column">
                  {/* Stack of 3 content blocks spaced with justify-content-between */}
                  <div className="d-flex flex-column justify-content-between flex-grow-1 gap-3">
                    {/* 1) Headers */}
                    <header className="text-center">
                      <h5 className="mb-1 fw-bold" dir="rtl">
                        {c.titleAr}
                      </h5>
                      <h6 className="mb-0 text-uppercase fw-bold">
                        {c.titleEn}
                      </h6>
                    </header>

                    {/* 2) Descriptions */}
                    <div className="text-center">
                      <p className="mb-2" dir="rtl">
                        {c.descAr}
                      </p>
                      <p className="mb-0">{c.descEn}</p>
                    </div>

                    {/* 3) Activities */}
                    <div>
                      {/* Pills */}
                      <div className="d-flex gap-2 mb-2">
                        <span className="badge rounded-pill text-bg-primary flex-fill text-center py-2">
                          ACTIVITIES
                        </span>
                        <span
                          className="badge rounded-pill text-bg-primary flex-fill text-center py-2"
                          dir="rtl"
                        >
                          الأنشطة
                        </span>
                      </div>

                      {/* Bordered lists box */}
                      <div className="border rounded-3 p-3 bg-white">
                        <div className="row g-3">
                          {/* EN list */}
                          <div className="col-6">
                            <ul className="list-unstyled mb-0">
                              {c.activitiesEn.map((item) => (
                                <li key={item} className="mb-2 d-flex">
                                  <span className="me-2">•</span>
                                  <span className="fw-semibold">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          {/* Divider */}
                          <div className="col-0 d-none d-sm-block border-start" />
                          {/* AR list */}
                          <div className="col-6" dir="rtl">
                            <ul className="list-unstyled mb-0 text-end">
                              {c.activitiesAr.map((item) => (
                                <li key={item} className="mb-2 d-flex justify-content-end">
                                  <span className="fw-semibold">{item}</span>
                                  <span className="ms-2">•</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CTA pinned at bottom via mt-auto on its wrapper OR by flex-grow above */}
                  <div className="mt-3 text-center">
                    <button type="button" className="btn btn-primary px-4 py-2 rounded-3">
                      <div className="fw-bold" dir="rtl">
                        جرّب الآن
                      </div>
                      <div className="small text-uppercase fw-bold">Explore</div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default AgentsSuite;
