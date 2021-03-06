import React from "react";
import PropTypes from "prop-types";
import "./CoffeeItem.css";

function CoffeeItem({ alt, children, src, title }) {
  return (
    <div className="coffee-item">
      <img alt={alt} src={src} />
      <h4 className="text-center">{title}</h4>
      <p className="text-center light-brown-color">
        Coffee is a brewed drink prepared from roasted coffee beans, the seeds
        of berries from certain Coffea species.
      </p>
      {children}
    </div>
  );
}

CoffeeItem.protoTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.element,
};

CoffeeItem.defaultProps = {
  children: null,
};

export default CoffeeItem;
