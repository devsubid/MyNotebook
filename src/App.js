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
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/MyNotebook/about">
            <Header title={title} tabs={tabs} colors={colors} />
            <About />
          </Route>
          <Route exact path="/MyNotebook/contact">
            <Header title={title} tabs={tabs} colors={colors} />
            <Contact />
          </Route>
          <Route exact path="/MyNotebook/">
            <Header title={title} tabs={tabs} colors={colors} />
            <Notes />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
