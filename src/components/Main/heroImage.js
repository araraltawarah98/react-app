import React, { Component } from "react";
import CoffeeItem from "../CoffeeItem/coffeeItem";

//Images
import Caramelfrappe from "../../assets/images/caramel-frappe.png";
//import HotCup from "../../assets/images/hot-cup.png";
import IcedCoffee from "../../assets/images/iced-coffee.png";
import MochaLate from "../../assets/images/mocha-late.png";
import MochaLateBrown from "../../assets/images/mocha-late-brown.png";

//CSS
import "./heroImage.css";

class HeroImage extends Component {
  state = {
    images: [
      {
        src: IcedCoffee,
        alt: "Iced Coffee",
      },
      {
        src: Caramelfrappe,
        alt: "Caramel Frappe",
      },
      {
        src: MochaLateBrown,
        alt: "Mocha Late Brown",
      },
    ],
  };

  render() {
    return (
      <div className="main">
        <div className="hero-image">
          <img src={MochaLate} alt="Mocha Late" />
          <h4 className="text-center">Mocha Late</h4>
          <p className="text-center">
            Coffee is a brewed drink prepared from roasted coffee beans, the
            seeds of berries from certain Coffea species.
          </p>
          <div className="details">
            <span>1 Bag</span>
            <span>$69.99</span>
          </div>
        </div>
        <div className="hero-banner">
          <div className="text-banner">
            <p className="be-active">Be Active</p>
            <h2>Barnsley Brew Coffee</h2>
            <p>
              Coffee is a brewed drink prepared from roasted coffee beans, the
              seeds of berries from certain Coffea species. When coffee berries
              turn from.
            </p>
            <p>Top Packs</p>
          </div>
          <div className="coffee-list">
            {this.state.images.map((element, index) => {
              return (
                <CoffeeItem
                  key={element.src}
                  src={element.src}
                  alt={element.alt}
                  title={element.alt}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default HeroImage;
