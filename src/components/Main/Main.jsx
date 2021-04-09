import React from "react";
import CoffeeItem from "../CoffeeItem/CoffeeItem";
import { bannerImages, heroImage, hotCupImage } from "../../data";
import "./Main.css";

const Main = () => {
  return (
    <div className="main">
      <div className="hero-image">
        <img alt={heroImage.alt} src={heroImage.src} />
        <h4 className="text-center">Mocha Late</h4>
        <p className="text-center light-brown-color">
          Coffee is a brewed drink prepared from roasted coffee beans, the seeds
          of berries from certain Coffea species.
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
          {bannerImages.map((element) => {
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
              <img alt={hotCupImage.alt} src={hotCupImage.src} />
              <h4 className="text-center">View More </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
