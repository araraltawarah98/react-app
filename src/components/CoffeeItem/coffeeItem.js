import React from "react";
import "./coffeeItem.css";

const CoffeeItem = (props) => {
  return (
    <div className="coffee-item">
      <img src={props.src} alt={props.alt} />
      <h4 className="text-center">{props.alt}</h4>
      <p className="text-center">
        Coffee is a brewed drink prepared from roasted coffee beans, the seeds
        of berries from certain Coffea species.
      </p>
    </div>
  );
};

export default CoffeeItem;
