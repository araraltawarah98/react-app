import React, { useEffect, useState } from "react";
import CardItem from "../CardItem/CardItem";
import "./GridCards.css";

function GridCards() {
  const [items, setItems] = useState([]);
  const [counter, setCounter] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((data) => {
        setItems(data.slice(0, 10));
      })
      .catch((error) => console.log(error));
  }, []);

  function handleIncrement(id, active) {
    if (active === "") {
      setCounter([...counter, { id, active }]);
    } else {
      setCounter(
        counter.filter((element) => element.id === id && element.active === "")
      );
    }
  }

  return (
    <>
      {"Counter " + counter.length}
      <div className="grid-cards">
        {items.map((element) => {
          return (
            <CardItem
              alt={element.alt}
              handleIncrement={handleIncrement}
              id={element.id}
              key={element.id}
              src={element.url}
              text={element.text}
              title={element.title}
            />
          );
        })}
      </div>
    </>
  );
}

export default GridCards;
