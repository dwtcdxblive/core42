import GovDubai from '../../assets/dubai-gov.png';
import TradeQR from '../../assets/trade-QR.png';
import LogosStrip from '../../assets/trade-logos.png';
import Explore from '../../assets/explore-btn.png';
export default function TradeInDubai() {
  return (
    <section className='trade'>
      {/* outer frame */}
      <div className='trade__frame'>
        {/* top-left government mark */}
        <img className='trade__gov' src={GovDubai} alt='Government of Dubai' />

        {/* bilingual headline */}
        <header className='trade__header font-title'>
          <h2 className='trade__title-ar font-title'>
            المنصة الرقمية المتخصصة في الخدمات اللوجستية والتجارية للاستيراد
            والتصدير في دبي
          </h2>
          <h1 className='trade__title-en font-title'>
            THE SPECIALIZED DIGITAL PLATFORM FOR LOGISTICS AND TRADE SERVICES
            <br />
            FOR IMPORTS/EXPORTS IN DUBAI
          </h1>
        </header>

        {/* 3-column band: EN pill list / QR + CTA / AR pill list */}
        <div className='trade__band'>
          {/* EN card */}
          <article className='trade__card'>
            <h3 className='trade__pill font-title'>
              DIGITAL CITY EXPERIENCES COVERING MORE THAN 400 SERVICES FOR OVER
              20 ENTITIES
            </h3>
            <ul className='trade__list trade__list--en font-title'>
              <li className='font-title'>
                Cargo Handling &amp; Booking (Sea, Air &amp; Land)
              </li>
              <li className='font-title'>Customs Clearance</li>
              <li className='font-title'>
                Import &amp; Export Permits and Certificates
              </li>
              <li className='font-title'>Trade &amp; Logistics Payments</li>
              <li className='font-title'>Value Added Services</li>
            </ul>
          </article>

          {/* QR + CTA */}
          <div className='trade__qr'>
            <img src={TradeQR} className='trade__qr-img' alt='QR code' />
            <a
              href='https://www.figma.com/proto/XXxKjLU64ghvbaQPLioQBi/SW_Journey_gitex?page-id=0%3A1&node-id=5-2589&p=f&viewport=519%2C328%2C0.04&t=UwgdqMEMifA9HG08-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=5%3A2589'
              target='_blank'
              type='button'
              className='bg-transparent border-0 text-center text-decoration-none'
            >
              <img src={Explore} className='w-50' alt='explore' />
            </a>
          </div>

          {/* AR card */}
          <article className='trade__card trade__card--ar'>
            <h3 className='trade__pill font-title' dir='rtl'>
              تجارب المدينة الرقمية تغطي أكثر من 400 خدمة لأكثر من 20 جهة
            </h3>
            <ul className='trade__list trade__list--ar font-title' dir='rtl'>
              <li className='font-title'>
                مناولة وحجز الشحن (بحرًا وجوًا وبرًا)
              </li>
              <li className='font-title'>التخليص الجمركي</li>
              <li className='font-title'>تصاريح وشهادات الاستيراد والتصدير</li>
              <li className='font-title'>المدفوعات التجارية واللوجستية</li>
              <li className='font-title'>خدمات القيمة المضافة</li>
            </ul>
          </article>
        </div>

        {/* logos strip */}
        <footer className='trade__logos'>
          <img src={LogosStrip} alt='Strategic partners' />
        </footer>
      </div>
    </section>
  );
}
