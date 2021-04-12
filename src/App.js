import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./components";
import { HomePage } from "./pages";
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
          <Route exact path={["/home", "/"]} component={HomePage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
