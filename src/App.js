import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./components";
import { HomePage } from "./pages";
import "./App.css";

class App extends Component {
  state = {
    active: "home",
  };

  /**
   * Sets the active value to show a page depends on the active value.
   * @param {String}
   */
  handleActive = (active) => {
    this.setState({ active });
  };

  render() {
    return (
      <Router>
        <div className="wrapper">
          <Header onActive={this.handleActive} active={this.state.active} />
          <Switch>
            <Route exact path={["/home", "/"]} component={HomePage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
