import { useMemo, useState } from "react"
import { Link } from "react-router-dom"

const HUBSPOT_PORTAL_ID = import.meta.env.VITE_HUBSPOT_PORTAL_ID
const HUBSPOT_FORM_GUID = import.meta.env.VITE_HUBSPOT_FORM_GUID

const defaultFormState = {
  name: "",
  email: "",
  organisation: "",
  message: "",
}

const C42Contact = () => {
  const [formState, setFormState] = useState(defaultFormState)
  const [status, setStatus] = useState({ state: "idle", message: "" })

  const hubspotEndpoint = useMemo(() => {
    if (!HUBSPOT_PORTAL_ID || !HUBSPOT_FORM_GUID) return null
    return `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_GUID}`
  }, [])

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!hubspotEndpoint) {
      setStatus({ state: "error", message: "Contact form is not configured." })
      return
    }

    setStatus({ state: "loading", message: "" })

    const hutk = document.cookie
      .split(";")
      .map((entry) => entry.trim())
      .find((entry) => entry.startsWith("hubspotutk="))
      ?.split("=")[1]

    const payload = {
      submittedAt: Date.now(),
      fields: [
        { name: "firstname", value: formState.name },
        { name: "email", value: formState.email },
        { name: "company", value: formState.organisation },
        { name: "message", value: formState.message },
      ],
      context: {
        pageUri: window.location.href,
        pageName: document.title,
        hutk,
      },
    }

    try {
      const response = await fetch(hubspotEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => null)
        throw new Error(errorData?.message || "Failed to submit form.")
      }

      setFormState(defaultFormState)
      setStatus({ state: "success", message: "Thank you! We will be in touch soon." })
    } catch (error) {
      setStatus({
        state: "error",
        message: error instanceof Error ? error.message : "Something went wrong. Please try again.",
      })
    }
  }

  return (
    <main className="c42-contact min-vh-100 d-flex align-items-center">
      <div className="container">
        <div className="c42-contact__panel mx-auto">
          <div className="c42-contact__marks" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>

          <header className="text-center mb-5">
            <h1 className="c42-contact__title">Contact us today</h1>
            <p className="c42-contact__subtitle">
              Tell us a little about your organisation and how we can help.
            </p>
          </header>

          <form className="c42-contact__form" onSubmit={handleSubmit}>
            <label className="c42-contact__field">
              <span className="visually-hidden">Name</span>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formState.name}
                onChange={handleChange}
                required
              />
            </label>

            <label className="c42-contact__field">
              <span className="visually-hidden">Email</span>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formState.email}
                onChange={handleChange}
                required
              />
            </label>

            <label className="c42-contact__field">
              <span className="visually-hidden">Organisation</span>
              <input
                type="text"
                name="organisation"
                placeholder="Organisation"
                value={formState.organisation}
                onChange={handleChange}
                required
              />
            </label>

            <label className="c42-contact__field">
              <span className="visually-hidden">Message</span>
              <textarea
                name="message"
                placeholder="Message"
                rows={4}
                value={formState.message}
                onChange={handleChange}
                required
              />
            </label>

            {status.state === "error" && <p className="c42-contact__status c42-contact__status--error">{status.message}</p>}
            {status.state === "success" && <p className="c42-contact__status c42-contact__status--success">{status.message}</p>}

            <div className="c42-contact__actions">
              <button type="submit" className="c42-contact__submit" disabled={status.state === "loading"}>
                {status.state === "loading" ? "Sending..." : "Submit"}
              </button>
              <Link className="c42-contact__back" to="/projects/core42/info">
                Back
              </Link>
            </div>
          </form>

          <div className="c42-contact__marks c42-contact__marks--bottom" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
    </main>
  )
}

export default C42Contact




