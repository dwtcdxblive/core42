import { RedirectBase } from "./RedirectBase"
const deepLinks = [
  {
    name: "SmartSupplier",
    description: "Launch the SmartSupplier mobile experience.",

    url:RedirectBase.SmartSupplier.link,
    iosOnly: true,
  },
  {
    name: "Dubai Now (QA)",
    description: "Open the Dubai Now QA build and land on the success screen.",
    url: "dubaiNowQA://success",
    url:RedirectBase.DubaiNow.link,
    iosOnly: true,
  },
  {
    name: "Smart Employee (QA)",
    description: "Route into Smart Employee QA and confirm the deep link callback.",
    // url: "smartemployeeQA://success",
        url:RedirectBase.SmartEmployee.link,
    iosOnly: true,
  },
]

const LinkingTest = () => {
  return (
    <main className="dda-page">
      <section className="dda-card">
        <header className="dda-header">
          <p className="dda-kicker">Linking Test Harness</p>
          <h1>Mobile Deep Link Validation</h1>
          <p className="dda-subtext">
            Use an iPhone with the target apps installed. Tapping a button below should hand off to the respective
            application instantly.
          </p>
        </header>

        <div className="dda-link-grid">
          {deepLinks.map((link) => (
            <a key={link.url} className="dda-link-btn" href={link.url}>
              <span className="dda-link-name">{link.name}</span>
              <span className="dda-link-description">{link.description}</span>
              {link.iosOnly && <span className="dda-link-meta">iOS only</span>}
            </a>
          ))}
        </div>

        <footer className="dda-footer">
          <p>
            Having trouble? Confirm the application is installed and that the URL scheme is whitelisted on the device.
            For manual verification, open Safari and paste the link.
          </p>
        </footer>
      </section>
    </main>
  )
}

export default LinkingTest
