import React from "react";
import "./Features.scss";
import FeaturesIcon from '@assets/icons/features.svg';

const features = [
  "Powerful online protection.",
  "Cashback without borders",
  "Personal design",
  "Work anywhere in the world",
];

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
            {features.map((feature, index) => (
              <li key={index} className="features__list-item">
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
