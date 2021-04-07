import React, { Component } from "react";
import { images, menuItems } from "../../../data/header";
import "./Header.css";

class Header extends Component {
  state = {
    menuItems,
    display: false,
  };

  /**
   * Checks the active value to add class "active"
   * @param {String} item
   * @param {String} active
   * @returns {Boolean} If active value equal item name, return "active", else null
   */
  isActive = (active, item) => {
    return active === item ? "active" : "";
  };

  /**
   * Toggle display value
   */
  onMenu = () => {
    this.setState({ display: !this.state.display });
  };

  /**
   * Checks display value to add class "display-toggle".
   * @returns {Boolean} If the display is true, return "display-toggle", else null.
   */
  toggleDisplay = () => {
    return this.state.display === true ? "display-toggle" : "";
  };

  render() {
    const { active, onActive } = this.props;
    return (
      <div className="header">
        <div className="logo">
          <img src={images[0].src} alt={images[0].alt} />
        </div>
        <div className="menu-icon" onClick={() => this.onMenu()}>
          <img src={images[1].src} alt={images[1].alt} />
        </div>
        <div className={"menu " + this.toggleDisplay()}>
          <ul>
            {this.state.menuItems.map((element, index) => {
              return (
                <li
                  className={"menu-item " + this.isActive(active, element)}
                  onClick={() => onActive(element)}
                  key={index}
                >
                  <a href="#">{element}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="wrapper-side">
          <img
            className="shopping-card"
            src={images[3].src}
            alt={images[3].alt}
          />
          <img
            className="profile-picture"
            src={images[2].src}
            alt={images[2].alt}
          />
        </div>
      </div>
    );
  }
}

export default Header;
