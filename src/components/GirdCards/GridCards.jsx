import React, { useEffect, useState } from "react";
import CardItem from "../CardItem/CardItem";
import "./GridCards.css";

function GridCards() {
  const [counter, setCounter] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((data) => {
        setItems(data.slice(0, 10));
      })
      .catch((error) => console.log(error));
  }, []);

  function handleIncrement(id) {
    if (counter.some((element) => element === id)) {
      setCounter(counter.filter((element) => element !== id));
    } else {
      setCounter([...counter, id]);
    }
  }

  return (
    <>
      <h3>{"Counter " + counter.length}</h3>
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
