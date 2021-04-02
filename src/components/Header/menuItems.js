import React, { Component } from "react";

class MenuItem extends Component {
  isActive = () => {
    let classes = "menu-item ";
    return classes += this.props.active === true ? "active" : "";
  };
  render() {
    return (
      <li
        className={this.isActive()}
        onClick={() => this.props.onActive(this.props.name)}
      >
        <a href={"#"}>{this.props.name}</a>
      </li>
    );
  }
}

export default MenuItem;
