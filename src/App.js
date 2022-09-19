import "./App.css";
import Header from "./components/Header.jsx";
import Notes from "./components/Notes.jsx";

function App() {
  let title = "itsme-Subid";
  let tabs = ["home", "about", "contact"];
  let colors = [
    "#403030",
    "#00010d",
    "#122031",
    "#262621",
    "#1b4140",
    "#0d2029",
    "#122640",
    "#0d1117",
    "#262626",
  ];
  let activeColor = "#0d1117";
  return (
    <div>
      <Header
        title={title}
        tabs={tabs}
        colors={colors}
        activeColor={activeColor}
      />
      <Notes />
    </div>
  );
}

export default App;
