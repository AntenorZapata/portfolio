import "../src/style/App.scss";
import Landing from "./Pages/Landing";
import Navbar from "./Components/Navbar";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import { Switch, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [showSide, setShowSide] = useState(false);

  const showNav = () => {
    setShowSide(!showSide);
  };

  return (
    <div className="App">
      <div className={`sidebar ${showSide ? "nav-toggle" : ""}`}>
        <Navbar />
      </div>
      <div className="nav-btn" onClick={showNav}>
        <div className="lines-1"></div>
        <div className="lines-2"></div>
        <div className="lines-3"></div>
      </div>
      <div className="home">
        <div className="content">
          <Switch>
            <Route path="/" exact>
              <Landing />
            </Route>
            <Route path="/about" exact>
              <About />
            </Route>
            <Route path="/projects" exact>
              <Projects />
            </Route>
            <Route path="/contact" exact>
              <Contact />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
