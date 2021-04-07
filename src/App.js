import React, { Component } from "react";
import { Header } from "./components";
import HomePage from "./pages/HomePage/HomePage";
import "./App.css";

class App extends Component {
  state = {
    active: "Home",
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
      <div className="wrapper">
        <Header onActive={this.handleActive} active={this.state.active} />
        <HomePage />
      </div>
    );
  }
}

export default App;
