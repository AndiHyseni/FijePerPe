import React from "react";
import "./ShowcaseGallery.css";
import Button from "../shared/Button";

type ShowcaseGalleryProps = {
  title: string;
  subtitle: React.ReactNode;
  moreHref?: string;
  images: [string, string, string, string]; // a, b, c, d
  ctaTitle: React.ReactNode;
  ctaHref?: string;
  className?: string;
};

const ImgBox: React.FC<{ src: string; alt: string; className: string }> = ({
  src,
  alt,
  className,
}) => {
  if (!src) {
    return (
      <div className={["sg__img", className].join(" ")} aria-hidden="true" />
    );
  }
  return (
    <img className={["sg__img", className].join(" ")} src={src} alt={alt} />
  );
};

const ShowcaseGallery: React.FC<ShowcaseGalleryProps> = ({
  title,
  subtitle,
  moreHref,
  images,
  ctaTitle,
  ctaHref,
  className,
}) => {
  const [a, b, c, d] = images;

  return (
    <section className={["sg", className].filter(Boolean).join(" ")}>
      <div className="container">
        <img
          src="/images/bizneset/qepja_negative.svg"
          alt={title}
          className="sg__icon"
          style={{ width: "100%", marginBottom: "24px" }}
        />
        <div className="sg__header">
          <div className="sg__header-content">
            <h2 className="sg__title">{title}</h2>
            <p className="sg__subtitle">{subtitle}</p>
          </div>
          <Button as="a" href={moreHref} variant="light" className="sg__more">
            Shiko më shumë
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 12h14M13 5l7 7-7 7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
        </div>

        <div className="sg__grid">
          <ImgBox src={a} alt={`${title} 1`} className="sg__a" />
          <ImgBox src={b} alt={`${title} 2`} className="sg__b" />
          <ImgBox src={c} alt={`${title} 3`} className="sg__c" />
          <ImgBox src={d} alt={`${title} 4`} className="sg__d" />
        </div>

        <div className="sg__cta">
          <div className="sg__cta-title">
            {ctaTitle}
            <br />
            <p className="sg__cta-subtitle">
              Na kontakto dhe merr oferten për biznesin tënd.
            </p>
          </div>

          <Button
            as="a"
            href={ctaHref}
            variant="outline"
            className="sg__cta-btn"
          >
            Kontakto tani
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 12h14M13 5l7 7-7 7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseGallery;
