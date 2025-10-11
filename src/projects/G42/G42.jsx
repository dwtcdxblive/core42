import { useState } from "react";

const VIMEO_ID = "1126473052";
const VIMEO_HASH = "198932976f";
// Player URL (not vimeo.com/...)
const streamUrl =
  `https://player.vimeo.com/video/${VIMEO_ID}?h=${VIMEO_HASH}` +
  "&autoplay=1&loop=1&autopause=0&playsinline=1";

const intelligenceGridUrl = "https://intelligencegrid.g42.ai/";

const G42 = () => {
  const [showIntelligenceGrid, setShowIntelligenceGrid] = useState(false);

  return (
    <main className={showIntelligenceGrid ? "g42-page g42-page--overlay" : "g42-page"}>
      {/* Background / main video area */}
      <div className="g42-video-container" aria-hidden={showIntelligenceGrid}>
        <iframe
          title="G42 Live Stream"
          src={streamUrl}
          className="g42-video"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
        <button
          type="button"
          className="g42-launch-btn"
          onClick={() => setShowIntelligenceGrid(true)}
        >
          Launch Intelligence Grid
        </button>
      </div>

      {/* Overlay panel */}
      {showIntelligenceGrid && (
        <div className="g42-overlay" role="dialog" aria-modal="true">
          <iframe
            title="G42 Intelligence Grid"
            src={intelligenceGridUrl}
            className="g42-overlay-frame"
            // If the site disallows embedding, this iframe will stay blank
            // The button below lets users open it in a new tab.
            frameBorder="0"
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
  );
};

export default G42;
