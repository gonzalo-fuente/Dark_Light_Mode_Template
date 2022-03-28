import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  // Select theme mode respecting OS User Color-Scheme Preference
  useEffect(() => {
    if (
      localStorage.getItem("color-mode") === "dark" ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches &&
        !localStorage.getItem("color-mode"))
    ) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, []);

  // Select theme mode according to user selection
  useEffect(() => {
    if (darkMode) {
      // Sets the custom html attribute
      document.documentElement.setAttribute("color-mode", "dark");
      // Sets the user's preference in local storage
      localStorage.setItem("color-mode", "dark");
    } else {
      // Sets the custom html attribute
      document.documentElement.setAttribute("color-mode", "light");
      // Sets the user's preference in local storage
      localStorage.setItem("color-mode", "light");
    }
  }, [darkMode]);

  function toggleDarkMode() {
    setDarkMode((prevMode) => !prevMode);
  }

  return (
    <div className="container">
      <Navbar toggleDarkMode={toggleDarkMode} />
      <Main />
    </div>
  );
}

export default App;
