import React from "react";
import "./FeatureShowcase.css";

export type FeatureItem = {
  title: string;
  description: string;
  icon?: React.ReactNode;
  iconSrc?: string;
};

type FeatureShowcaseProps = {
  image: React.ReactNode; // center visual
  features: [FeatureItem, FeatureItem, FeatureItem, FeatureItem];
  className?: string;
  id?: string;
};

const FeatureCard: React.FC<FeatureItem> = ({
  title,
  description,
  icon,
  iconSrc,
}) => {
  return (
    <article className="fs-card">
      <div className="fs-card__icon" aria-hidden="true">
        {icon ? icon : iconSrc ? <img src={iconSrc} alt="" /> : null}
      </div>
      <div className="fs-card__inner">
        <h4 className="fs-card__title">{title}</h4>
        <p className="fs-card__desc">{description}</p>
      </div>
    </article>
  );
};

export const FeatureShowcase: React.FC<FeatureShowcaseProps> = ({
  image,
  features,
  className,
  id,
}) => {
  const [f1, f2, f3, f4] = features;

  return (
    <section
      id={id}
      className={["feature-showcase", className].filter(Boolean).join(" ")}
    >
      <div className="container">
        <div className="fs-grid">
          <div className="fs-col">
            <FeatureCard {...f1} />
            <FeatureCard {...f2} />
          </div>

          <div className="fs-image" aria-hidden="true">
            {image}
          </div>

          <div className="fs-col">
            <FeatureCard {...f3} />
            <FeatureCard {...f4} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureShowcase;
