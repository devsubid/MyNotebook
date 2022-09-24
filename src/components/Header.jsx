import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Header({ title, tabs, colors }) {
  useEffect(() => {
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
  }, []);

  window.addEventListener("load", () => {
    if (window.location.pathname === "/MyNotebook/") {
      document.querySelector(".home").classList.add("active");
      console.log(window.location.pathname);
    } else if (window.location.pathname === "/MyNotebook/about") {
      document.querySelector(".about").classList.add("active");
      console.log(window.location.pathname);
    } else if (window.location.pathname === "/MyNotebook/contact") {
      document.querySelector(".contact").classList.add("active");
      console.log(window.location.pathname);
    }
  });

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
  let openHamMenu = () => {
    let hamMenu = document.querySelector(".navSM");
    hamMenu.classList.toggle("translate");
  };
  let activeTab = (e) => {
    let tab = document.querySelector(".active");
    if (tab !== null) {
      tab.classList.remove("active");
    }
    let currentTab = e.target;
    currentTab.classList.add("active");
    let hamMenu = document.querySelector(".navSM");
    hamMenu.classList.add("translate");
  };

  return (
    <header>
      <div className="headerWrapper container">
        <div className="logo">
          <span
            onClick={() => {
              openHamMenu();
            }}
          ></span>
          <Link to="/MyNotebook/" style={{ padding: "0" }}>
            <h1>{title}</h1>
          </Link>
        </div>

        <nav>
          <ul>
            {tabs.map((tab, index) => {
              return (
                <li key={index} className="generalTab">
                  <Link
                    to={`/MyNotebook/${tab === "home" ? "" : tab}`}
                    className={`${tab}`}
                    onClick={activeTab}
                  >
                    {tab}
                  </Link>
                </li>
              );
            })}
            <li>
              <div className="colorPaletteSwitch" onClick={openColorPalette}>
                <div
                  className="primary"
                  style={{ backgroundColor: `--light-color` }}
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
        </nav>
        <nav className="navSM translate">
          <ul>
            {tabs.map((tab, index) => {
              return (
                <li key={index}>
                  <Link
                    to={`/MyNotebook/${tab === "home" ? "" : tab}`}
                    className={`${tab}`}
                    onClick={activeTab}
                  >
                    {tab}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
