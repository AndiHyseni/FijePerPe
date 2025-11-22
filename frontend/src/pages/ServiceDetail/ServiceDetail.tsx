import React from "react";
import { useParams } from "react-router-dom";
import "./ServiceDetail.css";
import SectionHeader from "../../components/shared/SectionHeader";
import Button from "../../components/shared/Button";
import ContactCard from "../../components/shared/ContactCard";
import FAQ from "../../components/FAQ/FAQ";

type DetailConfig = {
  title: string;
  subtitle: React.ReactNode;
  images: string[]; // 9 items recommended
  ctaTitle: React.ReactNode;
};

const CONFIGS: Record<string, DetailConfig> = {
  kicele: {
    title: "Kicele",
    subtitle: (
      <>
        Kecelë të qepura me precizion, materiale cilësore dhe ngjyra
        <br /> që qëndrojnë për përdorim që zgjat.
      </>
    ),
    images: [
      "/images/services/Rectangle10246.svg",
      "/images/services/Rectangle10250.svg",
      "/images/services/Rectangle10251.svg",
      "/images/services/Rectangle10250.svg",
      "/images/services/Rectangle10251.svg",
      "/images/services/Rectangle10246.svg",
      "/images/services/Rectangle10251.svg",
      "/images/services/Rectangle10246.svg",
      "/images/services/Rectangle10250.svg",
    ],
    ctaTitle: (
      <>
        Personalizo{" "}
        <span style={{ color: "#EF8C16", fontStyle: "italic" }}>uniformat</span>{" "}
        për biznesin tënd!
      </>
    ),
  },
  jelek: {
    title: "Jelek",
    subtitle: (
      <>
        Jelekë me stil dhe funksionalitet, që kombinojnë personalizimin dhe
        qëndrueshmërinë.
      </>
    ),
    images: [
      "/images/services/Rectangle10246.svg",
      "/images/services/Rectangle10250.svg",
      "/images/services/Rectangle10251.svg",
      "/images/services/Rectangle10250.svg",
      "/images/services/Rectangle10251.svg",
      "/images/services/Rectangle10246.svg",
      "/images/services/Rectangle10251.svg",
      "/images/services/Rectangle10246.svg",
      "/images/services/Rectangle10250.svg",
    ],
    ctaTitle: (
      <>
        Personalizo{" "}
        <span style={{ color: "#EF8C16", fontStyle: "italic" }}>uniformat</span>{" "}
        për biznesin tënd!
      </>
    ),
  },
  kemishe: {
    title: "Këmishë",
    subtitle: (
      <>
        Këmisha të personalizuara për një paraqitje profesionale me materiale
        cilësore.
      </>
    ),
    images: [
      "/images/services/Rectangle10246.svg",
      "/images/services/Rectangle10250.svg",
      "/images/services/Rectangle10251.svg",
      "/images/services/Rectangle10250.svg",
      "/images/services/Rectangle10251.svg",
      "/images/services/Rectangle10246.svg",
      "/images/services/Rectangle10251.svg",
      "/images/services/Rectangle10246.svg",
      "/images/services/Rectangle10250.svg",
    ],
    ctaTitle: (
      <>
        Personalizo{" "}
        <span style={{ color: "#EF8C16", fontStyle: "italic" }}>uniformat</span>{" "}
        për biznesin tënd!
      </>
    ),
  },
  // optional: qendisje
  "qendisje-logosh": {
    title: "Qëndisje logosh",
    subtitle: (
      <>Qëndisje me makineri moderne dhe fije cilësore për cilësi që zgjat.</>
    ),
    images: Array(9).fill(""),
    ctaTitle: (
      <>
        Qëndise{" "}
        <span style={{ color: "#EF8C16", fontStyle: "italic" }}>logon</span>{" "}
        tuaj me kualitet!
      </>
    ),
  },
};

const ServiceDetail: React.FC = () => {
  const { slug = "" } = useParams();
  const cfg = CONFIGS[slug] ?? CONFIGS["kicele"];

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
          </SectionHeader>
        </div>
      </section>

      <section id="contact" className="service-detail__contacts">
        <div className="container service-detail__contacts-grid">
          <ContactCard label="Numri" value="+383 48 766 300" />
          <ContactCard label="Email" value="info@fijeperpe.com" />
          <ContactCard
            label="Adresa"
            value="Qamil Hoxha, Prishtinë"
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
            <p className="service-detail__cta-subtitle">
              Na kontakto dhe merr oferten për biznesin tënd.
            </p>
          </div>
          <Button
            as="a"
            href="/contact"
            variant="light"
            className="service-detail__cta-btn"
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
      </section>

      <FAQ />
    </main>
  );
};

export default ServiceDetail;
