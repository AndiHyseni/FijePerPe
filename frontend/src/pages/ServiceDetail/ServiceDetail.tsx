import React from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import "./ServiceDetail.css";
import SectionHeader from "../../components/shared/SectionHeader";
import Button from "../../components/shared/Button";
import ContactCard from "../../components/shared/ContactCard";
import FAQ from "../../components/FAQ/FAQ";

const ServiceDetail: React.FC = () => {
  const { t } = useTranslation();
  const { slug = "" } = useParams();

  const getConfig = (key: string) => {
    const images = [
      "/images/services/Rectangle10246.svg",
      "/images/services/Rectangle10250.svg",
      "/images/services/Rectangle10251.svg",
      "/images/services/Rectangle10250.svg",
      "/images/services/Rectangle10251.svg",
      "/images/services/Rectangle10246.svg",
      "/images/services/Rectangle10251.svg",
      "/images/services/Rectangle10246.svg",
      "/images/services/Rectangle10250.svg",
    ];

    return {
      title: t(`services.detail.${key}.title`),
      subtitle: (
        <span
          dangerouslySetInnerHTML={{
            __html: t(`services.detail.${key}.subtitle`).replace(
              /\n/g,
              "<br />"
            ),
          }}
        />
      ),
      images: key === "qendisje-logosh" ? Array(9).fill("") : images,
      ctaTitle: (
        <span
          dangerouslySetInnerHTML={{
            __html: t(`services.detail.${key}.ctaTitle`),
          }}
        />
      ),
      ctaSubtitle: t(`services.detail.${key}.ctaSubtitle`),
    };
  };

  const cfg = getConfig(slug || "kicele");

  return (
    <main className="service-detail">
      <section className="service-detail__hero">
        <div className="container">
          <SectionHeader
            title={cfg.title}
            subtitle={cfg.subtitle}
            align="center"
            titleClassName="about__title"
            subtitleClassName="about__subtitle"
          >
            <Button
              as="a"
              href="/contact"
              variant="outline"
              className="service-detail__contact-btn"
            >
              {t("common.contactNow")}
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
          </SectionHeader>
        </div>
      </section>

      <section id="contact" className="service-detail__contacts">
        <div className="container service-detail__contacts-grid">
          <ContactCard
            label={t("common.phone")}
            value={t("common.phoneValue")}
          />
          <ContactCard
            label={t("common.email")}
            value={t("common.emailValue")}
          />
          <ContactCard
            label={t("common.address")}
            value={t("common.addressValue")}
            className="about__contacts-last"
          />
        </div>
      </section>

      <section className="service-detail__gallery">
        <div className="container service-detail__grid">
          {cfg.images.map((src, idx) =>
            src ? (
              <img
                key={idx}
                src={src}
                alt={`${cfg.title} ${idx + 1}`}
                className="service-detail__img"
              />
            ) : (
              <div
                key={idx}
                className="service-detail__img"
                aria-hidden="true"
              />
            )
          )}
        </div>
      </section>

      <section className="service-detail__cta">
        <div className="container service-detail__cta-inner">
          <div className="service-detail__cta-title">
            {cfg.ctaTitle}
            <br />
            <p className="service-detail__cta-subtitle">{cfg.ctaSubtitle}</p>
          </div>
          <Button
            as="a"
            href="/contact"
            variant="light"
            className="service-detail__cta-btn"
          >
            {t("common.contactNow")}
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
      </section>

      <FAQ />
    </main>
  );
};

export default ServiceDetail;
