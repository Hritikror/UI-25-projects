import React, { useState } from 'react'
import './index.css'

const DarkLightTheme = () => {
const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

function handleToggleTheme() {
    localStorage.setItem("theme", theme === "dark" ? "light": "dark");
    setTheme( theme === "dark" ? "light": "dark")
}

  return (
    <div className="light-dark-mode" data-theme={theme}>
      <div className="container">
        <p>Hello World !</p>
        <button onClick={handleToggleTheme}>Change Theme</button>
      </div>
    </div>
  )
}

export default DarkLightTheme;
