import React from "react";
import "./CoffeeItem.css";

const CoffeeItem = ({ src, alt, title }) => {
  return (
    <div className="coffee-item">
      <img src={src} alt={alt} />
      <h4 className="text-center">{title}</h4>
      <p className="text-center">
        Coffee is a brewed drink prepared from roasted coffee beans, the seeds
        of berries from certain Coffea species.
      </p>
    </div>
  );
};

export default CoffeeItem;
