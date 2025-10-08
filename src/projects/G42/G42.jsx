import { useState } from "react"

const streamUrl = "https://player.castr.com/live_8005c6e07e4911f0b36595c94a84f69d?range=1757414965-2&abr=false&namedHls=true&autoplay=1&loop=1&muted=1"
const intelligenceGridUrl = "https://intelligencegrid.g42.ai/"

const G42 = () => {
  const [showIntelligenceGrid, setShowIntelligenceGrid] = useState(false)

  return (
    <main className={showIntelligenceGrid ? "g42-page g42-page--overlay" : "g42-page"}>
      <div className="g42-video-container" aria-hidden={showIntelligenceGrid}>
        <iframe
          title="G42 Live Stream"
          src={streamUrl}
          className="g42-video"
          allow="autoplay; fullscreen"
          allowFullScreen
          frameBorder="0"
          scrolling="no"
        />
        <button
          type="button"
          className="g42-launch-btn"
          onClick={() => setShowIntelligenceGrid(true)}
        >
          Launch Intelligence Grid
        </button>
      </div>

      {showIntelligenceGrid && (
        <div className="g42-overlay" role="dialog" aria-modal="true">
          <iframe
            title="G42 Intelligence Grid"
            src={intelligenceGridUrl}
            className="g42-overlay-frame"
            allow="fullscreen"
            allowFullScreen
          />
          <button
            type="button"
            className="g42-close-btn"
            onClick={() => setShowIntelligenceGrid(false)}
          >
            Close
          </button>
        </div>
      )}
    </main>
  )
}

export default G42
