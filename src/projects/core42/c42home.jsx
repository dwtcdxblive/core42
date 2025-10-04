import { Link } from "react-router-dom"
import CoreLogo from "../../assets/core42-logo.svg"
import CoreStarted from "../../assets/get-started-core.svg"

const C42Home = () => {
  return (
    <main className="c42-home min-vh-100 d-flex align-items-center">
      <div className="container py-5">
        <div className="row align-items-center flex-column justify-content-center gy-4">
          <div className="col-md-6 text-center mb-5 pb-2">
            <img src={CoreLogo} alt="Core 42 logo" className="img-fluid mb-4" />
            {/* <div className="d-flex flex-column flex-md-row gap-3">
              <Link className="btn btn-outline-primary" to="/">
                Back to projects
              </Link>
              <Link className="btn btn-primary" to="/projects/core42/info">
                Get started
              </Link>
            </div> */}
          </div>
          <div className="col-md-6 text-center">
            <Link className="" to="/projects/core42/info">
            <img src={CoreStarted} alt="Get started with Core 42" className="img-fluid" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}

export default C42Home




