import React from "react";

function Header({ title, tabs, colors, activeColor }) {
  window.onload = () => {
    if (localStorage.getItem("mode") === "light") {
      let modeCheckbox = document.querySelector("#mode");
      modeCheckbox.checked = true;
      document.body.classList.add("light");
    }
    if (localStorage.getItem("primary") !== null) {
      let primary = localStorage.getItem("primary");
      document.documentElement.style.setProperty("--dark-color", primary);
      let primaryElement = document.querySelector(".primary");
      let body = document.querySelector("body");
      primaryElement.style.backgroundColor = primary;
      if (localStorage.getItem("mode") !== "light") {
        body.style.backgroundColor = primary;
      }
    }
  };
  let modeToggler = () => {
    let modeCheckbox = document.querySelector("#mode");
    let body = document.querySelector("body");
    let primary = localStorage.getItem("primary");
    if (localStorage.getItem("mode") === "light") {
      // dark mode
      modeCheckbox.checked = false;
      localStorage.setItem("mode", "dark");
      document.body.classList.remove("light");
      body.style.backgroundColor = primary;
    } else {
      //light mode
      modeCheckbox.checked = true;
      localStorage.setItem("mode", "light");
      document.body.classList.add("light");
    }
    if (localStorage.getItem("primary") !== null) {
      // if primary color is set
      document.documentElement.style.setProperty("--dark-color", primary);
      let primaryElement = document.querySelector(".primary");
      let body = document.querySelector("body");
      primaryElement.style.backgroundColor = primary;
      if (localStorage.getItem("mode") !== "light") {
        body.style.backgroundColor = primary;
      }
    }
  };
  let openColorPalette = () => {
    let colorPalette = document.querySelector(".colorPalette");
    colorPalette.classList.toggle("hidden");
  };
  let changeColor = (key) => {
    let primary = document.querySelector(".primary");
    let body = document.querySelector("body");
    primary.style.backgroundColor = colors[key];
    body.style.backgroundColor = colors[key];
    document.documentElement.style.setProperty("--dark-color", colors[key]);
    localStorage.setItem("primary", colors[key]);
  };

  return (
    <header>
      <div className="headerWrapper container">
        <h1>{title}</h1>

        <ul>
          {tabs.map((tab, index) => {
            return (
              <li key={index}>
                <a
                  href={`/${tab}`}
                  className={`${tab === "home" ? "active" : ""}`}
                >
                  {tab}
                </a>
              </li>
            );
          })}
          <li>
            <div className="colorPaletteSwitch" onClick={openColorPalette}>
              <div
                className="primary"
                style={{ backgroundColor: `${activeColor}` }}
              ></div>
              <div className="secondary"></div>
            </div>
            <div className="colorPalette grid-9 hidden">
              {colors.map((color, index) => {
                return (
                  <div
                    className="colorPaletteItem"
                    key={index}
                    onClick={() => {
                      changeColor(index);
                    }}
                  >
                    <div
                      className="primary"
                      style={{ backgroundColor: `${color}` }}
                    ></div>
                    <div className="secondary"></div>
                  </div>
                );
              })}
            </div>
          </li>
          <li className="switch">
            <input
              type="checkbox"
              name="mode"
              id="mode"
              onClick={modeToggler}
            />
            <span className="modeToggler" id="toggler"></span>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
