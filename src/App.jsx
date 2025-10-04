import { Link, Route, Routes, useParams } from "react-router-dom"
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
  return (
    <Routes>
      <Route path="/" element={<ProjectOverview />} />
      <Route path="/projects/core42" element={<C42Home />} />
      <Route path="/projects/core42/info" element={<C42Info />} />
      <Route path="/projects/core42/products" element={<C42Products />} />
      <Route path="/projects/core42/products/compass" element={<C42Compass />} />
      <Route path="/projects/core42/products/ai-cloud" element={<C42AiCloud />} />
      <Route path="/projects/core42/products/sovereign-cloud" element={<C42SovereignCloud />} />
      <Route path="/projects/core42/products/signature-cloud" element={<C42SignatureCloud />} />
      <Route path="/projects/core42/products/oracle-fusion" element={<C42OracleFusion />} />
      <Route path="/projects/core42/products/delivery-services" element={<C42DeliveryServices />} />
      <Route path="/projects/core42/brand" element={<C42Brand />} />
      <Route path="/projects/core42/partners" element={<C42Partners />} />
      <Route path="/projects/core42/contact" element={<C42Contact />} />
      <Route path="/projects/:projectId" element={<ProjectDetails />} />
    </Routes>
  )
}

export default App





