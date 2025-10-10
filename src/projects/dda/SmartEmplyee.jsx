import Logo from "../../assets/smartemployee.png"; // adjust path if needed
import { memo } from "react";

const SmartEmplyee = memo(function SmartEmplyee() {
  return (
    <section className="se">
      <div className="se__card">
        {/* Header / Logo */}
        <header className="se__header">
          <img className="se__logo" src={Logo} alt="smarTemployee" />
          <div className="se__brand">
            <span className="se__brand-ar">الموظف الذكي</span>
            <span className="se__brand-en">smartemployee</span>
          </div>
        </header>

        {/* Hero description box */}
        <div className="se__intro">
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
        <div className="se__roles-head">
          <span className="se__pill se__pill--en">ROLES</span>
          <span className="se__pill se__pill--ar">المهام</span>
        </div>

        {/* Roles two-column list */}
        <div className="se__roles">
          <ul className="se__list se__list--en">
            <li>
              <strong>Information Inquiries</strong> – Instant answers
            </li>
            <li>
              <strong>Apply for Services</strong> – Submit requests fast
            </li>
            <li>
              <strong>Laws &amp; Policies</strong> – Quick access to guidelines
            </li>
            <li>
              <strong>Expense Bill Analysis</strong> – Validate claims
            </li>
            <li>
              <strong>Receipt Matching</strong> – Automated reconciliation
            </li>
            <li>
              <strong>Financial Reconciliation</strong> – Ensure accuracy
            </li>
            <li>
              <strong>Workforce Scheduler Generator</strong> – Optimized schedules
            </li>
          </ul>

          <span className="se__divider se__divider--roles" aria-hidden="true" />

          <ul className="se__list se__list--ar">
            <li>
              <strong>استفسارات المعلومات</strong> – إجابات فورية
            </li>
            <li>
              <strong>التقديم على الخدمات</strong> – تسليم الطلبات بسرعة
            </li>
            <li>
              <strong>القوانين والسياسات</strong> – وصول سريع للإرشادات
            </li>
            <li>
              <strong>تحليل فواتير المصروفات</strong> – التحقق من المطالبات
            </li>
            <li>
              <strong>مطابقة الإيصالات</strong> – تسوية مُؤتمتة
            </li>
            <li>
              <strong>التسوية المالية</strong> – ضمان الدقة
            </li>
            <li>
              <strong>منشئ جداول القوى العاملة</strong> – جداول عمل محسّنة
            </li>
          </ul>
        </div>

        {/* CTA */}
        <div className="se__cta">
          <button type="button" className="se__btn">
            <span className="se__btn-ar">جرّب الآن</span>
            <span className="se__btn-en">EXPLORE</span>
          </button>
        </div>
      </div>
    </section>
  );
});

export default SmartEmplyee;
