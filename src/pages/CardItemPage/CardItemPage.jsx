import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { CardItem } from "../../components";

function CardItemPage() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((data) => {
        const items = data
          .slice(0, 30)
          .find((element) => element.id === Number(id));
        setItem(items);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      {!item ? (
        <></>
      ) : (
        <CardItem
          alt={item.thumbnailUrl}
          id={item.id}
          key={item.id}
          src={item.url}
          text={item.title}
          title={item.title}
        />
      )}
    </>
  );
}

export default CardItemPage;
