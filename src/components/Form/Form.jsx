import React, { Component } from "react";
import "./Form.css";

class Form extends Component {
  render() {
    const { children } = this.props;
    return <>{children}</>;
  }
}

export default Form;
