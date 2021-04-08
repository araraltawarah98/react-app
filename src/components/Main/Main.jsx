import React, { Component } from "react";
import CoffeeItem from "../CoffeeItem/CoffeeItem";
import { bannerImages, heroImage, hotCupImage } from "../../data/main";
import "./Main.css";

class Main extends Component {
  state = {
    bannerImages,
  };

  render() {
    return (
      <div className="main">
        <div className="hero-image">
          <img src={heroImage.src} alt={heroImage.alt} />
          <h4 className="text-center">Mocha Late</h4>
          <p className="text-center light-brown-color">
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
            <p className="light-brown-color">
              Coffee is a brewed drink prepared from roasted coffee beans, the
              seeds of berries from certain Coffea species. When coffee berries
              turn from.
            </p>
            <p className="light-brown-color">Top Packs</p>
          </div>
          <div className="coffee-list">
            {this.state.bannerImages.map((element, index) => {
              return (
                <CoffeeItem
                  alt={element.alt}
                  key={element.id}
                  src={element.src}
                  title={element.alt}
                />
              );
            })}
            <div className="coffee-item coffee-cup">
              <div className="view-more">
                <img src={hotCupImage.src} alt={hotCupImage.alt} />
                <h4 className="text-center">View More </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
