import React from "react";
import Button from "../shared/Button";
import "./Hero.css";

type HeroProps = {
  title: string;
  subtitle?: string;
  ctaText?: string;
  onCtaClick?: () => void;
  backgroundImageUrl?: string;
};

const Hero: React.FC<HeroProps> = ({
  title,
  ctaText = "Shiko shërbimet",
  onCtaClick,
  backgroundImageUrl = "/images/banner.svg",
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
        <span className="hero__eyebrow">FIJE PËR PE</span>
        <h1 className="hero__title">{title}</h1>
        {ctaText ? (
          <Button variant="outline" size="lg" onClick={onCtaClick}>
            <span className="cta-text">{ctaText}</span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M5 12h14M13 5l7 7-7 7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
        ) : null}
      </div>
    </section>
  );
};

export default Hero;
