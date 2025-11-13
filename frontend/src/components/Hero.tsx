import React from "react";
import Button from "./shared/Button";

type HeroProps = {
  title: string;
  subtitle?: string;
  ctaText?: string;
  onCtaClick?: () => void;
  backgroundImageUrl?: string;
};

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  ctaText = "Shiko shërbimet",
  onCtaClick,
  backgroundImageUrl,
}) => {
  const style = backgroundImageUrl
    ? { backgroundImage: `url(${backgroundImageUrl})` }
    : undefined;
  const heroClass = ["hero", backgroundImageUrl ? "hero--with-image" : ""]
    .filter(Boolean)
    .join(" ");
  return (
    <section id="home" className={heroClass} style={style}>
      <div className="hero__overlay" />
      <div className="container hero__content">
        <span className="hero__eyebrow">FIJE PER PE</span>
        <h1 className="hero__title">{title}</h1>
        {subtitle ? <p className="hero__subtitle">{subtitle}</p> : null}
        {ctaText ? (
          <Button variant="light" size="lg" onClick={onCtaClick}>
            {ctaText}
          </Button>
        ) : null}
      </div>
    </section>
  );
};

export default Hero;
