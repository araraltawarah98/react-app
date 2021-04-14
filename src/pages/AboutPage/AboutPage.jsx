import React from "react";
import { useParams } from "react-router-dom";
import { CoffeeItem } from "../../components";
import { coffeeItems } from "../../data";

function AboutUs() {
  const { id } = useParams();

  const getCoffeeItem = () => {
    return coffeeItems.find((element) => element.id === Number(id));
  };

  return (
    <CoffeeItem
      alt={getCoffeeItem().alt}
      src={getCoffeeItem().src}
      title={getCoffeeItem().alt}
    />
  );
}

export default AboutUs;
