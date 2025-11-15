import React from "react";
import Button from "../shared/Button";
import "./Services.css";

type ServiceItem = {
  key: string;
  title: string;
  subtitle: string;
  imageUrl: string;
};

const items: ServiceItem[] = [
  {
    key: "featured",
    title: "Qëndisje logosh",
    subtitle: "Çdo detaj profesional që zgjat.",
    imageUrl: "/images/services/QendisjeLogosh.svg",
  },
  {
    key: "apron",
    title: "Kicelë",
    subtitle: "Praktik, rezistent dhe elegant.",
    imageUrl: "/images/services/Kicele.svg",
  },
  {
    key: "vest",
    title: "Jelek",
    subtitle: "Pamje serioze, rehati e plotë.",
    imageUrl: "/images/services/Jelek.svg",
  },
  {
    key: "shirt",
    title: "Këmishë",
    subtitle: "Rehati, cilësi dhe formë perfekte.",
    imageUrl: "/images/services/Kemishe.svg",
  },
];

const Services: React.FC = () => {
  return (
    <section className="services" aria-labelledby="services-title">
      <div className="container">
        <h2 id="services-title" className="services__title">
          Shërbimet tona
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
                <div
                  style={{ display: "flex", flexDirection: "row", gap: "10px" }}
                >
                  <h3 className="service-card__title">{item.title}</h3>
                  <p className="service-card__desc">{item.subtitle}</p>
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
            Shiko produktet
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
