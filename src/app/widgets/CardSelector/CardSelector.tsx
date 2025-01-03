import React from "react";
import "./CardSelector.scss";
import { Button } from "@ui/Button/Button";
import { card1, card2, card3, card4 } from "@assets/index";

export const CardSelector: React.FC = () => {

  return (
    <section className="card-selector">
      <div className="card-selector__left">
        <h1 className="card-selector__title">Choose the design you like and apply for card right now</h1>
        <Button theme="accent" className="card-selector__btn">Choose the card</Button>
      </div>
      <div className="card-selector__right">
        <img src={card1} alt='Card design' />
        <img src={card2} alt='Card design' />
        <img src={card3} alt='Card design' />
        <img src={card4} alt='Card design' />
      </div>
    </section>
  );
};
