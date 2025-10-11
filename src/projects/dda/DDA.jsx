import { Route, Routes } from "react-router-dom"
import DDALanding from "./DDALanding.jsx"
import LinkingTest from "./LinkingTest.jsx"
import DDATrade from "./DDATrade.jsx"
import SmartEmplyee from "./SmartEmplyee.jsx"
import AgentsSuite from "./AgentsSuite.jsx"
import BuildInDubai from "./DDABuild.jsx"
import JusticeInDubai from "./DDAJustice.jsx"
import SourcingAgent from "./SourcingAgent.jsx"
import ProductCopilot from "./ProductCopilot.jsx"
import Procurment from "./Procurment.jsx"
const DDA = () => {
  return (
    <Routes>
      <Route index element={<DDALanding />} />
      <Route path="linking" element={<LinkingTest />} />
      <Route path="trade" element={<DDATrade />} />
      <Route path="smartemployee" element={<SmartEmplyee />} />
      <Route path="sourcinagent" element={<SourcingAgent />} />
      <Route path="productcopilot" element={<ProductCopilot />} />
      <Route path="procurment" element={<Procurment />} />



      <Route path="agents-suite" element={<AgentsSuite />} />
      <Route path="build" element={<BuildInDubai/>}/>
      <Route path="justice" element={<JusticeInDubai/>}/>
    </Routes>
  )
}

export default DDA
