import { Route, Routes } from "react-router-dom"
import DDALanding from "./DDALanding.jsx"
import LinkingTest from "./LinkingTest.jsx"

const DDA = () => {
  return (
    <Routes>
      <Route index element={<DDALanding />} />
      <Route path="linking" element={<LinkingTest />} />
    </Routes>
  )
}

export default DDA
