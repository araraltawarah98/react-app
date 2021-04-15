import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AboutPage, CardsPage, HomePage, SignUpPage } from "./pages";
import { Header } from "./components";
import "./App.css";

function App() {
  const [active, setActive] = useState("home");

  /**
   * Sets the active value to show a page depends on the active value.
   * @param {String}
   */
  function handleActive(active) {
    setActive(active);
  }

  return (
    <Router>
      <div className="wrapper">
        <Header onActive={handleActive} active={active} />
        <Switch>
          <Route exact path={"/about-us/:id"} component={AboutPage} />
        </Switch>
        <Switch>
          <Route exact path={["/home", "/"]} component={HomePage} />
        </Switch>
        <Switch>
          <Route exact path={"/signup"} component={SignUpPage} />
        </Switch>
        <Switch>
          <Route exact path={"/items"} component={CardsPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
