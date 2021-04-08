import React, { Component } from "react";
import CoffeeItem from "../CoffeeItem/CoffeeItem";
import CoffeItems from "../../data/coffeeItems.js";
import "./GridItems.css";

class GridItems extends Component {
  state = {
    items: CoffeItems,
  };

  render() {
    return (
      <div className="grid-items">
        {this.state.items.map((element) => {
          return (
            <CoffeeItem alt={element.alt} key={element.id} src={element.src} />
          );
        })}
      </div>
    );
  }
}

export default GridItems;
