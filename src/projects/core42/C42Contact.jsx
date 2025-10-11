import { useMemo, useState } from "react"
import Select from "react-select"
import { Link } from "react-router-dom"

const HUBSPOT_PORTAL_ID = import.meta.env.VITE_HUBSPOT_PORTAL_ID ?? ""
const HUBSPOT_FORM_GUID = import.meta.env.VITE_HUBSPOT_FORM_GUID ?? ""

const DEFAULT_PRODUCT_INTEREST = "General Inquiry"

const productOptions = [
  { value: "compass", label: "Compass" },
  { value: "ai-cloud", label: "AI Cloud" },
  { value: "sovereign", label: "Sovereign Public Cloud" },
  { value: "signature", label: "Signature Private Cloud" },
  { value: "Cloud & AI Delivery Services", label: "Cloud & AI Delivery Services" },
  { value: "Co-location", label: "Delivery Services" },
  { value: "Signature Fusion Cloud", label: "Signature Fusion Cloud" },
  { value: "other", label: "Other" },
]

const defaultFormState = {
  name: "",
  email: "",
  organisation: "",
  jobTitle: "",
  mobile: "",
  message: "",
  customProductInterest: "",
}

const splitName = (input) => {
  const parts = input.trim().split(/\s+/).filter(Boolean)
  if (parts.length === 0) return ["", ""]
  if (parts.length === 1) return [parts[0], parts[0]]
  return [parts[0], parts.slice(1).join(" ")]
}

const selectStyles = {
  control: (provided, state) => ({
    ...provided,
    backgroundColor: "rgba(15, 23, 42, 0.4)",
    borderRadius: 6,
    border: state.isFocused
      ? "1px solid #48de93"
      : "1px solid rgba(226, 232, 240, 0.35)",
    boxShadow: state.isFocused ? "0 0 0 3px rgba(72, 222, 147, 0.15)" : "none",
    minHeight: 48,
    color: "#f8fafc",
  }),
  valueContainer: (provided) => ({
    ...provided,
    padding: "0 12px",
  }),
  input: (provided) => ({
    ...provided,
    color: "#f8fafc",
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "#f8fafc",
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "rgba(226, 232, 240, 0.6)",
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: "rgba(15, 23, 42, 0.95)",
    borderRadius: 12,
    overflow: "hidden",
    zIndex: 20,
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? "rgba(72, 222, 147, 0.25)" : "transparent",
    color: "#f8fafc",
  }),
}

const C42Contact = () => {
  const [formState, setFormState] = useState(defaultFormState)
  const [status, setStatus] = useState({ state: "idle", message: "" })
  const [selectedProduct, setSelectedProduct] = useState(null)

  const hubspotEndpoint = useMemo(() => {
    if (!HUBSPOT_PORTAL_ID || !HUBSPOT_FORM_GUID) return null
    return `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_GUID}`
  }, [])

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleProductChange = (option) => {
    setSelectedProduct(option)
    if (option?.value !== "other") {
      setFormState((prev) => ({ ...prev, customProductInterest: "" }))
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!hubspotEndpoint) {
      setStatus({ state: "error", message: "Contact form is not configured." })
      return
    }

    if (!selectedProduct) {
      setStatus({ state: "error", message: "Please choose a product." })
      return
    }

    if (selectedProduct.value === "other" && !formState.customProductInterest.trim()) {
      setStatus({ state: "error", message: "Please specify your product interest." })
      return
    }

    setStatus({ state: "loading", message: "" })

    const hutk = document.cookie
      .split(";")
      .map((entry) => entry.trim())
      .find((entry) => entry.startsWith("hubspotutk="))
      ?.split("=")[1]

    const [firstName, lastName] = splitName(formState.name)

    const productInterestValue =
      selectedProduct.value === "other"
        ? formState.customProductInterest.trim()
        : selectedProduct.label

    const fields = [
      { name: "firstname", value: firstName },
      { name: "lastname", value: lastName },
      { name: "email", value: formState.email },
      { name: "company", value: formState.organisation },
      { name: "jobtitle", value: formState.jobTitle },
      { name: "phone", value: formState.mobile },
      { name: "message", value: formState.message },
      { name: "product_interest", value: productInterestValue || DEFAULT_PRODUCT_INTEREST },
      { name: "0-2/name", value: `${firstName} ${lastName}`.trim() || formState.name },
    ]

    const payload = {
      submittedAt: Date.now(),
      fields,
      context: {
        pageUri: window.location.href,
        pageName: document.title,
        hutk,
      },
    }

    try {
      const response = await fetch(hubspotEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        const error = await response.json().catch(() => null)
        const message =
          error?.message || error?.errors?.map((entry) => entry.message).join(", ") || "Failed to submit form."
        throw new Error(message)
      }

      setFormState(defaultFormState)
      setSelectedProduct(null)
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
            <p className="c42-contact__subtitle">Tell us a little about your organisation and how we can help.</p>
          </header>

          <form className="c42-contact__form" onSubmit={handleSubmit} noValidate>
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
              <span className="visually-hidden">Mobile</span>
              <input
                type="tel"
                name="mobile"
                placeholder="Mobile"
                value={formState.mobile}
                onChange={handleChange}
                required
              />
            </label>

            <label className="c42-contact__field">
              <span className="visually-hidden">Job title</span>
              <input
                type="text"
                name="jobTitle"
                placeholder="Job title"
                value={formState.jobTitle}
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

            <div className="c42-contact__field" role="presentation">
              <span className="visually-hidden" id="productInterestLabel">
                Product interest
              </span>
              <Select
                aria-labelledby="productInterestLabel"
                styles={selectStyles}
                classNamePrefix="c42-contact-select"
                placeholder="Select a product"
                value={selectedProduct}
                onChange={handleProductChange}
                options={productOptions}
                isSearchable={false}
                menuPortalTarget={typeof window !== "undefined" ? document.body : undefined}
                menuPlacement="auto"
              />
            </div>

            {selectedProduct?.value === "other" && (
              <label className="c42-contact__field">
                <span className="visually-hidden">Tell us more about your product interest</span>
                <input
                  type="text"
                  name="customProductInterest"
                  placeholder="Tell us more about your product interest"
                  value={formState.customProductInterest}
                  onChange={handleChange}
                  required
                />
              </label>
            )}

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

            {status.state === "error" && (
              <p className="c42-contact__status c42-contact__status--error">{status.message}</p>
            )}
            {status.state === "success" && (
              <p className="c42-contact__status c42-contact__status--success">{status.message}</p>
            )}

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
