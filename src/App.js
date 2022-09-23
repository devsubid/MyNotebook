import "./App.css";
import Header from "./components/Header.jsx";
import Notes from "./components/Notes.jsx";
import About from "./components/About.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contact from "./components/Contact";

function App() {
  let title = "mynotebook";
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
    <Router>
      <div>
        <Header
          title={title}
          tabs={tabs}
          colors={colors}
          activeColor={activeColor}
        />
        <Switch>
          <Route exact path="/MyNotebook/about">
            <About />
          </Route>
          <Route exact path="/MyNotebook/contact">
            <Contact />
          </Route>
          <Route exact path="/MyNotebook/">
            <Notes />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
