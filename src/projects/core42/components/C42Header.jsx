import CoreIcon from "../../../assets/core-icon.svg"
import CoreLogoText from "../../../assets/core42-text.svg"
const C42Header = () => {
    return <div>
      <header className="d-flex flex-column w-100 flex-lg-row align-items-center gap-4 text-white justify-content-between header-spacing">
        <div className="text-center text-lg-start">
          <img src={CoreLogoText} alt="Core 42" className="img-fluid mb-3" />
        </div>
        <img src={CoreIcon} alt="Core 42 icon" className="c42-info__icon" />
      </header>

    </div>;
}


export default C42Header;