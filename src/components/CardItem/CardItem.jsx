import React, { useState } from "react";
import PropTypes from "prop-types";
import "./CardItem.css";
import { Link } from "react-router-dom";

function CardItem({ alt, handleIncrement, id, src, text, title }) {
  const [activeCard, setActiveCard] = useState("");

  function handleActive() {
    setActiveCard((oldActiveCard) =>
      oldActiveCard === "active-card" ? "" : "active-card"
    );
  }

  return (
    <div className={"card-item " + activeCard}>
      <img alt={alt} src={src} />
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{text}</p>
        <button
          className="card-button"
          onClick={() => {
            handleActive();
            handleIncrement(id);
          }}
        >
          BUTTON
        </button>
        <Link to={"/items/" + id}>click</Link>
      </div>
    </div>
  );
}

export default CardItem;

CardItem.protoTypes = {
  alt: PropTypes.string.isRequired,
  handleIncrement: PropTypes.func,
  id: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

CardItem.defaultProps = {
  handleIncrement: null,
};
