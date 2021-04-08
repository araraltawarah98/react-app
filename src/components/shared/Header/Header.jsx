import React, { Component } from "react";
import PropTypes from "prop-types";
import { images, menuItems } from "../../../data/header";
import "./Header.css";

class Header extends Component {
  state = {
    isDisplayed: false,
    menuItems,
  };

  /**
   * Checks the active value to add class "active"
   * @param {String} active
   * @param {String} item
   * @returns {Boolean} If active value equal item name, return "active", else null
   */
  isActive = (active, item) => {
    return active === item ? "active" : "";
  };

  /**
   * Toggle display value
   */
  onMenu = () => {
    this.setState({ isDisplayed: !this.state.isDisplayed });
  };

  /**
   * Checks display value to add class "display-toggle".
   * @returns {Boolean} If the display is true, return "display-toggle", else null.
   */
  toggleDisplay = () => {
    return this.state.isDisplayed === true ? "display-toggle" : "";
  };

  render() {
    const { active, onActive } = this.props;
    return (
      <div className="header">
        <div className="logo">
          <img alt={images[0].alt} src={images[0].src} />
        </div>
        <div className="menu-icon" onClick={() => this.onMenu()}>
          <img alt={images[1].alt} src={images[1].src} />
        </div>
        <div className={"menu " + this.toggleDisplay()}>
          <ul>
            {this.state.menuItems.map((element, index) => {
              return (
                <li
                  className={"menu-item " + this.isActive(active, element)}
                  key={index}
                  onClick={() => onActive(element)}
                >
                  <a href="#">{element}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="wrapper-side">
          <img
            alt={images[3].alt}
            className="shopping-card"
            src={images[3].src}
          />
          <img
            alt={images[2].alt}
            className="profile-picture"
            src={images[2].src}
          />
        </div>
      </div>
    );
  }
}

Header.protoTypes = {
  active: PropTypes.string.isRequired,
  onActive: PropTypes.func.isRequired,
};

export default Header;
