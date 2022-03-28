import React from "react";
import smallLogo from "../assets/logo512.png";

function Navbar({ toggleDarkMode }) {
  return (
    <nav>
      <img className="nav-logo_icon" src={smallLogo} alt="react logo" />
      <h3 className="nav-logo_text">ReactFacts</h3>

      <div className="toggler">
        <p>Light</p>
        <div className="toggler-slider" onClick={toggleDarkMode}>
          <div className="toggler-slider-circle"></div>
        </div>
        <p>Dark</p>
      </div>
    </nav>
  );
}

export default Navbar;
