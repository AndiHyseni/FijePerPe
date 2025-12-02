import React from "react";
import { useTranslation } from "react-i18next";
import Button from "../shared/Button";
import "./Catalogue.css";

const images = [
  { key: "a", url: "/images/catalogue/Frame%2061.svg", tile: "a" },
  { key: "b", url: "/images/catalogue/Frame%2062.svg", tile: "b" },
  { key: "c", url: "/images/catalogue/Frame%2063.svg", tile: "c" },
  { key: "d", url: "/images/catalogue/Frame%2064.svg", tile: "d" },
  { key: "e", url: "/images/catalogue/Frame%2065.svg", tile: "e" },
];

const Catalogue: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="catalogue" aria-labelledby="catalogue-title">
      <div className="container">
        <h2 id="catalogue-title" className="catalogue__title">
          {t("catalogue.title")}
        </h2>
        <div className="catalogue__grid">
          {images.map((img) => (
            <div
              key={img.key}
              className={["catalogue__tile", `catalogue__tile--${img.tile}`]
                .filter(Boolean)
                .join(" ")}
              style={{ backgroundImage: `url(${img.url})` }}
              aria-hidden="true"
            />
          ))}
        </div>
        <div className="catalogue__actions">
          <Button
            as="a"
            href="#catalogue"
            variant="outline"
            size="lg"
            className="catalogue__btn"
          >
            {t("catalogue.viewCatalogue")}
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M5 12h14M13 5l7 7-7 7"
                stroke="#511110"
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

export default Catalogue;
