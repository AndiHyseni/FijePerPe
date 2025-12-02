import React from "react";
import { useTranslation } from "react-i18next";
import Button from "../shared/Button";
import "./Services.css";

type ServiceItem = {
  key: string;
  translationKey: string;
  imageUrl: string;
};

const items: ServiceItem[] = [
  {
    key: "featured",
    translationKey: "qendisje-logosh",
    imageUrl: "/images/services/QendisjeLogosh.svg",
  },
  {
    key: "apron",
    translationKey: "kicele",
    imageUrl: "/images/services/Kicele.svg",
  },
  {
    key: "vest",
    translationKey: "jelek",
    imageUrl: "/images/services/Jelek.svg",
  },
  {
    key: "shirt",
    translationKey: "kemishe",
    imageUrl: "/images/services/Kemishe.svg",
  },
];

const Services: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="services" aria-labelledby="services-title">
      <div className="container">
        <h2 id="services-title" className="services__title">
          {t("homeServices.title")}
        </h2>
        <div className="services__grid">
          {items.map((item, index) => (
            <article
              key={item.key}
              className={[
                "service-card",
                index === 0 ? "service-card--featured" : "",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <div
                className="service-card__image"
                aria-hidden="true"
                style={{ backgroundImage: `url(${item.imageUrl})` }}
              />
              <div className="service-card__meta">
                <div className="service-card__text">
                  <h3 className="service-card__title">
                    {t(`services.list.${item.translationKey}.title`)}
                  </h3>
                  <p className="service-card__desc">
                    {t(`services.list.${item.translationKey}.subtitle`)}
                  </p>
                </div>
                <Button
                  as="a"
                  href="#products"
                  variant="outline"
                  size="lg"
                  className="services__show-btn"
                >
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
            </article>
          ))}
        </div>
        <div className="services__actions">
          <Button
            as="a"
            href="#products"
            variant="outline"
            size="lg"
            className="services__products-btn"
          >
            {t("homeServices.viewProducts")}
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

export default Services;
