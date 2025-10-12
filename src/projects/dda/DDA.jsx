import { Route, Routes } from "react-router-dom"
import DDALanding from "./DDALanding.jsx"
import LinkingTest from "./LinkingTest.jsx"
import DDATrade from "./DDATrade.jsx"
import SmartEmplyee from "./SmartEmplyee.jsx"
import AgentsSuite from "./AgentsSuite.jsx"
import BuildInDubai from "./DDABuild.jsx"
import JusticeInDubai from "./DDAJustice.jsx"
import CODAI from "./CODAI.jsx"
import AISampling from "./AISampling.jsx"
import DubaiPopulation from "./DubaiPopulation.jsx"
import DataStatistics from "./DataStatistics.jsx"
import DataMarketplace from "./DataMarketplace.jsx"
import DubaiNow from "./DubaiNow.jsx"
import DubaiNowDetail from "./DubaiNowDetail.jsx"
import SourcingAgent from "./SourcingAgent.jsx"
import ProductCopilot from "./ProductCopilot.jsx"
import Recruitment from "./Recruitment.jsx"
import DubaiTransport from "./DubaiTransport.jsx"
import InvestDubai from "./InvestDubai.jsx"
import TourismDubai from "./TourismDubai.jsx"
import JusticeDubai from "./JusticeDubai.jsx"
import BuildDubai from "./buildDubai.jsx"
import VideoBackground from "./VideoBackground.jsx"
import Infostructure from "./Infostructure.jsx"
import UAEPass from "./UAEPass.jsx"
import TourismDubaiBg from "./BG/TourismDubaiBg.jsx"
import AicomiteeBg from "./BG/AicomiteeBg.jsx"
import CoPilotBg from "./BG/CoPilotBg.jsx"
import InfrostructureBg from "./BG/InfrostructureBg.jsx"
import AiAgent from "./BG/AiAgentBg.jsx"
import AiAgentBg from "./BG/AiAgentBg.jsx"
import BuildDubaiBg from "./BG/BuildDubaiBg.jsx"
import TradeDubaiBg from "./BG/TradeDubaiBg.jsx"
import JusticeDubaiBg from "./BG/JusticeDubaiBg.jsx"
import InvestBg from "./BG/InvestBg.jsx"
import DubaiTransportBg from "./BG/DubaiTransportBg.jsx"
import DubaiSmartSuplier from "./BG/DubaiSmartSuplier.jsx"
import DubaiSmartEmployee from "./BG/DubaiSmartEmployee.jsx"
const DDA = () => {
  return (
<div className="position-relative min-vh-100">
  <VideoBackground  />

  {/* Foreground content ABOVE the overlay */}
  <div className="position-relative" style={{ zIndex: 2 }}>
    <Routes>
      <Route index element={<DDALanding />} />
      <Route path="linking" element={<LinkingTest />} />
      <Route path="trade" element={<DDATrade />} />
      <Route path="smartemployee" element={<SmartEmplyee />} />
      <Route path="sourcinagent" element={<SourcingAgent />} />
      <Route path="productcopilot" element={<ProductCopilot />} />
      <Route path="recruitment" element={<Recruitment />} />
      <Route path="investDubai" element={<InvestDubai />} />
      <Route path="tourismDubai" element={<TourismDubai />} />
      <Route path="justiceDubai" element={<JusticeDubai />} />
      <Route path="buildDubai" element={<BuildDubai />} />
      <Route path="agents-suite" element={<AgentsSuite />} />
      <Route path="build" element={<BuildInDubai />} />
      <Route path="justice" element={<JusticeInDubai />} />
      <Route path="codai" element={<CODAI />} />
      <Route path="ai-sampling" element={<AISampling />} />
      <Route path="dubai-population" element={<DubaiPopulation />} />
      <Route path="data-statistics" element={<DataStatistics />} />
      <Route path="data-marketplace" element={<DataMarketplace />} />
      <Route path="dubai-now" element={<DubaiNow />} />
      <Route path="dubai-now/:slug" element={<DubaiNowDetail />} />
      <Route path="dubai-transport" element={<DubaiTransport />} />
      <Route path="dubai-Infostructure" element={<Infostructure />} />
      <Route path="UAEPass" element={<UAEPass />} />
      <Route path="TourismDubaiBG" element={<TourismDubaiBg />} />
      <Route path="AicomiteeBg" element={<AicomiteeBg />} />
      <Route path="CoPilotBg" element={<CoPilotBg />} />
      <Route path="InfrostructureBg" element={<InfrostructureBg />} />
      <Route path="AiAgentBg" element={<AiAgentBg />} />
      <Route path="JusticeDubaiBg" element={<JusticeDubaiBg />} />

   <Route path="InvestBg" element={<InvestBg />} />



     <Route path="BuildtBg" element={<BuildDubaiBg />} />
      <Route path="TradeDubaiBg" element={<TradeDubaiBg />} />
      <Route path="DubaiTransportBg" element={<DubaiTransportBg />} />
      <Route path="DubaiSmartSuplier" element={<DubaiSmartSuplier />} />
      <Route path="DubaiSmartEmployee" element={<DubaiSmartEmployee />} />





      
    </Routes>
  </div>
</div>
  )
}

export default DDA