import React from "react";
import CoffeeItem from "../CoffeeItem/CoffeeItem";
import { coffeeItems } from "../../data";
import "./GridItems.css";

const GridItems = () => {
  return (
    <div className="grid-items">
      {coffeeItems.map((element) => {
        return (
          <CoffeeItem alt={element.alt} key={element.id} src={element.src} />
        );
      })}
    </div>
  );
};

export default GridItems;
