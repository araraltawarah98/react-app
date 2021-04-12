import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  logo,
  menuIcon,
  menuItems,
  profileImage,
  shoopingCardImage,
} from "../../../data";
import "./Header.css";

function Header({ active, onActive }) {
  const [isDisplayed, setIsDisplayed] = useState(false);

  /**
   * Checks the active value to add class "active"
   * @param {String} active
   * @param {String} item
   * @returns {String} If active value equal item name, return "active", else null
   */
  function addActiveClass(active, item) {
    return active === item ? "active" : "";
  }

  /**
   * Toggle display value
   */
  function onMenu() {
    setIsDisplayed(!isDisplayed);
  }

  /**
   * Checks display value to add class "display-toggle".
   * @returns {String} If the display is true, return "display-toggle", else null.
   */
  function toggleDisplay() {
    return isDisplayed ? "display-toggle" : "";
  }

  return (
    <div className="header">
      <div className="logo">
        <img alt={logo.alt} src={logo.src} />
      </div>
      <div className="menu-icon" onClick={() => onMenu()}>
        <img alt={menuIcon.alt} src={menuIcon.src} />
      </div>
      <div className={"menu " + toggleDisplay()}>
        <ul>
          {menuItems.map((element) => {
            return (
              <li
                className={"menu-item " + addActiveClass(active, element.name)}
                key={element.id}
                onClick={() => onActive(element.name)}
              >
                <a href="#">{element.label}</a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="wrapper-side">
        <img
          alt={shoopingCardImage.alt}
          className="shopping-card"
          src={shoopingCardImage.src}
        />
        <img
          alt={profileImage.alt}
          className="profile-picture"
          src={profileImage.src}
        />
      </div>
    </div>
  );
}

Header.protoTypes = {
  active: PropTypes.string.isRequired,
  onActive: PropTypes.func.isRequired,
};

export default Header;
