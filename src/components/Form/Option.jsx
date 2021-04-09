import React, { Component } from "react";

class Option extends Component {
  render() {
    const { city } = this.props;
    return <option value={city}>{city}</option>;
  }
}

export default Option;
