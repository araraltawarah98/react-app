import React, { Component } from "react";
import CoffeeItem from "../CoffeeItem/CoffeeItem";
import gridItems from "../../data/gridItems.js";
import "./GridItems.css";

class GridItems extends Component {
  state = {
    items: Array(8).fill(0),
  };

  render() {
    return (
      <div className="grid-items">
        {this.state.items.map((_, index) => {
          const id = index < this.state.items.length / 2 ? 1 : 0;
          return (
            <CoffeeItem
              key={index}
              src={gridItems[id].src}
              alt={gridItems[id].alt}
            />
          );
        })}
      </div>
    );
  }
}

export default GridItems;
