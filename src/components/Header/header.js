import React, { Component } from "react";
import MenuItem from "./menuItems";

//Images
import coffeeBeans from "../../assets/images/coffee-beans.png";
import menuIcon from "../../assets/images/menu-button-of-three-horizontal-lines.png";
import profileImage from "../../assets/images/profile-image.png";
import shoppingCard from "../../assets/images/shopping-card.png";

//CSS
import "./header.css";

class Header extends Component {
  state = {
    menuItems: [
      { name: "Home", active: true },
      { name: "About Us", active: false },
      { name: "Our Lands", active: false },
      { name: "Our Suppliers", active: false },
      { name: "Product", active: false },
      { name: "Contact Us", active: false },
    ],
  };

  onMenuItemClick = (name) => {
    const actives = this.state.menuItems.map((element) => {
      return {name: element.name, active: false};
    });
    const item = actives.find((element) => element.name === name);
    item.active = true;
    this.setState({menuItems: actives});
  };

  render() {
    return (
      <div className="header">
        <div className="logo">
          <img src={coffeeBeans} alt={"Coffee Beans"} />
        </div>
        <div className="menu-icon">
          <img src={menuIcon} alt={"Menu Icon"} />
        </div>
        <div className="menu">
          <ul>
            {this.state.menuItems.map((element, index) => {
              return (
                <MenuItem
                  key={index}
                  active={element.active}
                  name={element.name}
                  onActive={this.onMenuItemClick}
                />
              );
            })}
          </ul>
        </div>
        <div className="wrapper-side">
          <img
            className="shopping-card"
            src={shoppingCard}
            alt={"Shopping Card"}
          />
          <img
            className="profile-picture"
            src={profileImage}
            alt={"Profile Image"}
          />
        </div>
      </div>
    );
  }
}

export default Header;
