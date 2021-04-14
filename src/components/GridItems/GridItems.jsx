import React from "react";
import { Link } from "react-router-dom";
import CoffeeItem from "../CoffeeItem/CoffeeItem";
import { coffeeItems } from "../../data";
import "./GridItems.css";

function GridItems() {
  return (
    <div className="grid-items">
      {coffeeItems.map((element) => {
        return (
          <CoffeeItem
            alt={element.alt}
            key={element.id}
            src={element.src}
            title={element.alt}
          >
            <Link to={"/about-us/" + element.id}>Click</Link>
          </CoffeeItem>
        );
      })}
    </div>
  );
}

export default GridItems;
