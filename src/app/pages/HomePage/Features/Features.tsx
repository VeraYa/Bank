import React from "react";
import "./Features.scss";
import FeaturesIcon from '@assets/icons/features.svg';

export const Features: React.FC = () => {
  return (
    <section className="features">
      <img src={FeaturesIcon} alt="Features Image" className="features__image" />
      <div className="features__content">
        <div className="features-content__text">
          <h2 className="features__title">We Provide Many Features You Can Use</h2>
          <p className="features__descr">
            You can explore the features that we provide with fun and have their own functions each feature
          </p>
          <ul className="features__list">
            <li className="features__list-item">Powerfull online protection.</li>
            <li className="features__list-item">Cashback without borders</li>
            <li className="features__list-item">Personal design</li>
            <li className="features__list-item">Work anywhere in the world</li>
          </ul>
        </div>
      </div>
    </section>
  );
};
