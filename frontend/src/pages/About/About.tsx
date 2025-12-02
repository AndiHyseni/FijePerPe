import React from "react";
import { useTranslation } from "react-i18next";
import Button from "../../components/shared/Button";
import SectionHeader from "../../components/shared/SectionHeader";
import ContactCard from "../../components/shared/ContactCard";
import TwoColumn from "../../components/shared/TwoColumn";
import "./About.css";
import FeatureShowcase from "../../components/shared/FeatureShowcase";
import Clients from "../../components/Clients/Clients";
import FAQ from "../../components/FAQ/FAQ";

const About: React.FC = () => {
  const { t } = useTranslation();
  return (
    <main className="about">
      <section className="about__hero">
        <div className="container about__hero-inner">
          <SectionHeader
            title={t("about.title")}
            subtitle={t("about.subtitle")}
            align="center"
            titleClassName="about__title"
            subtitleClassName="about__subtitle"
          >
            <Button
              as="a"
              href="#contact"
              variant="outline"
              className="about__contact-btn"
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

      <section className="about__contacts" id="contact">
        <div className="container about__contacts-grid">
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

      <section className="about__two-col">
        <div className="container">
          <TwoColumn
            image={<img src="/images/about/maqina.svg" alt="Makinë qepje" />}
          >
            <>
              <h2 className="about__section-title">
                {t("about.sectionTitle")}
              </h2>
              <p
                dangerouslySetInnerHTML={{
                  __html: t("about.description").replace(/\n/g, "<br />"),
                }}
              />
              <Button
                as="a"
                href="#products"
                variant="outline"
                className="about__contact-btn"
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
            </>
          </TwoColumn>
        </div>
      </section>

      <section className="about__band">
        <div className="container about__band-inner">
          <div className="about__band-copy">
            <h3 dangerouslySetInnerHTML={{ __html: t("about.bandTitle") }} />
            <p>{t("about.bandSubtitle")}</p>
          </div>
          <img
            src="/images/about/grupi_kiceleve.svg"
            alt="Band"
            style={{ justifySelf: "center" }}
          />
        </div>
      </section>

      <section className="about__closing">
        <div>
          <h2 dangerouslySetInnerHTML={{ __html: t("about.closingTitle") }} />
          <FeatureShowcase
            image={<img src="/images/about/qesja_zmr.svg" alt="Pe Uniforma" />}
            features={[
              {
                iconSrc: "/images/about/Peri.svg",
                title: t("about.features.colorTitle"),
                description: t("about.features.colorDescription"),
              },
              {
                iconSrc: "/images/about/Peri.svg",
                title: t("about.features.logoTitle"),
                description: t("about.features.logoDescription"),
              },
              {
                iconSrc: "/images/about/Peri.svg",
                title: t("about.features.materialTitle"),
                description: t("about.features.materialDescription"),
              },
              {
                iconSrc: "/images/about/Peri.svg",
                title: t("about.features.workTitle"),
                description: t("about.features.workDescription"),
              },
            ]}
          />
        </div>
      </section>

      <Clients />
      <FAQ />
    </main>
  );
};

export default About;
