import React, { Component } from "react";
import CoffeeItem from "../CoffeeItem/coffeeItem";

//Images
import DoubleEspresso from "../../assets/images/double-espresso.png";
import MochaLateBrown from "../../assets/images/mocha-late-brown.png";

//CSS
import "./gridItem.css";

class GridItem extends Component {
  state = {
    items: Array(8).fill(0),
  };

  render() {
    return (
      <div className="grid-items">
        {this.state.items.map((_, index) => {
          if (index < this.state.items.length / 2) {
            return (
              <CoffeeItem
                key={index}
                src={MochaLateBrown}
                alt={"Mocha Late Brown"}
              />
            );
          } else {
            return (
              <CoffeeItem
                key={index}
                src={DoubleEspresso}
                alt={"Double Espresso"}
              />
            );
          }
        })}
      </div>
    );
  }
}

export default GridItem;
