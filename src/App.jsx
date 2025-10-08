import { Link, Route, Routes, useLocation, useParams } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import PageTransition from "./components/PageTransition.jsx"

import C42Home from "./projects/core42/c42home.jsx"
import C42Info from "./projects/core42/c42info.jsx"
import C42Products from "./projects/core42/C42Products.jsx"
import C42Compass from "./projects/core42/C42Compass.jsx"
import C42AiCloud from "./projects/core42/C42AiCloud.jsx"
import C42SovereignCloud from "./projects/core42/C42SovereignCloud.jsx"
import C42SignatureCloud from "./projects/core42/C42SignatureCloud.jsx"
import C42OracleFusion from "./projects/core42/C42OracleFusion.jsx"
import C42DeliveryServices from "./projects/core42/C42DeliveryServices.jsx"
import C42Brand from "./projects/core42/C42Brand.jsx"
import C42Partners from "./projects/core42/C42Partners.jsx"
import C42Contact from "./projects/core42/C42Contact.jsx"
import TDRA from "./projects/TDRA/TDRA.jsx"
import G42 from "./projects/G42/G42.jsx"
import DDA from "./projects/dda/DDA.jsx"

import "./App.scss"

const projects = [
  {
    id: "core42",
    name: "Core 42",
    summary: "Core platform capabilities and shared services.",
    description:
      "Core 42 consolidates the foundational services, governance, and tooling that power every other initiative.",
    path: "/projects/core42",
  },
  {
    id: "tdra",
    name: "TDRA",
    summary: "TDRA transformation dashboards and services.",
    description:
      "TDRA centralizes digital service adoption metrics, impacts, and insights across entities.",
    path: "/projects/tdra",
  },
  {
    id: "g42",
    name: "G42",
    summary: "Immersive Intelligence Grid live showcase.",
    description:
      "G42 streams the Intelligence Grid experience with a direct portal into the live platform.",
    path: "/projects/g42",
  },
  {
    id: "m42",
    name: "M42",
    summary: "Mission 42: next-generation operational intelligence.",
    description:
      "M42 focuses on intelligence workflows, analytics, and automation to accelerate mission success.",
  },
  {
    id: "dda",
    name: "DDA",
    summary: "Digital Defense Architecture initiatives and pilots.",
    description:
      "DDA experiments with digital defense strategies and pilots future-ready capabilities.",
    path: "/projects/dda",
  },
]

const ProjectList = () => (
  <div className="row g-4">
    {projects.map((project) => (
      <div className="col-md-4" key={project.id}>
        <div className="card h-100 shadow-sm">
          <div className="card-body d-flex flex-column">
            <h2 className="card-title h5 mb-3">{project.name}</h2>
            <p className="card-text text-secondary flex-grow-1">{project.summary}</p>
            <Link
              className="btn btn-outline-primary mt-3 align-self-start"
              to={project.path ? project.path : `/projects/${project.id}`}
            >
              View details
            </Link>
          </div>
        </div>
      </div>
    ))}
  </div>
)

const ProjectOverview = () => (
  <div className="project-overview">
    <div className="container py-5">
      <header className="mb-5 text-center text-md-start">
        <h1 className="display-5 fw-semibold mb-2">Projects</h1>
        <p className="lead text-secondary mb-0">Explore the workstreams we are currently building.</p>
      </header>

      <ProjectList />
    </div>
  </div>
)

const ProjectDetails = () => {
  const { projectId } = useParams()
  const project = projects.find((entry) => entry.id === projectId)

  if (!project) {
    return (
      <main className="project-detail min-vh-100 d-flex align-items-center">
        <div className="container">
          <div className="alert alert-warning" role="alert">
            We couldn't find that project.
          </div>
          <Link className="btn btn-primary" to="/">
            Back to projects
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="project-detail min-vh-100 d-flex align-items-center">
      <div className="container py-5">
        <div className="card shadow-sm mx-auto" style={{ maxWidth: "720px" }}>
          <div className="card-body">
            <h2 className="card-title h4 mb-3">{project.name}</h2>
            <p className="card-text text-secondary mb-4">{project.description}</p>
            <Link className="btn btn-primary" to="/">
              Back to projects
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}

function App() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><ProjectOverview /></PageTransition>} />
        <Route path="/projects/core42" element={<PageTransition><C42Home /></PageTransition>} />
        <Route path="/projects/core42/info" element={<PageTransition><C42Info /></PageTransition>} />
        <Route path="/projects/core42/products" element={<PageTransition><C42Products /></PageTransition>} />
        <Route path="/projects/core42/products/compass" element={<PageTransition><C42Compass /></PageTransition>} />
        <Route path="/projects/core42/products/ai-cloud" element={<PageTransition><C42AiCloud /></PageTransition>} />
        <Route path="/projects/core42/products/sovereign-cloud" element={<PageTransition><C42SovereignCloud /></PageTransition>} />
        <Route path="/projects/core42/products/signature-cloud" element={<PageTransition><C42SignatureCloud /></PageTransition>} />
        <Route path="/projects/core42/products/oracle-fusion" element={<PageTransition><C42OracleFusion /></PageTransition>} />
        <Route path="/projects/core42/products/delivery-services" element={<PageTransition><C42DeliveryServices /></PageTransition>} />
        <Route path="/projects/core42/brand" element={<PageTransition><C42Brand /></PageTransition>} />
        <Route path="/projects/core42/partners" element={<PageTransition><C42Partners /></PageTransition>} />
        <Route path="/projects/core42/contact" element={<PageTransition><C42Contact /></PageTransition>} />
        <Route path="/projects/g42" element={<PageTransition><G42 /></PageTransition>} />
        <Route path="/projects/dda/*" element={<PageTransition><DDA /></PageTransition>} />
        <Route path="/projects/tdra/*" element={<PageTransition><TDRA /></PageTransition>} />
        <Route path="/projects/:projectId" element={<PageTransition><ProjectDetails /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  )
}

export default App










