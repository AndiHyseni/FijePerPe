import React from "react";
import { useTranslation } from "react-i18next";
import "./Services.css";
import SectionHeader from "../../components/shared/SectionHeader";
import Button from "../../components/shared/Button";
import ContactCard from "../../components/shared/ContactCard";
import Clients from "../../components/Clients/Clients";
import ShowcaseGallery from "../../components/ShowcaseGallery/ShowcaseGallery";
import FAQ from "../../components/FAQ/FAQ";
import { useNavigate } from "react-router-dom";

type Service = {
  key: string;
  titleKey: string;
  subtitleKey: string;
};

const serviceKeys = ["qendisje-logosh", "kicele", "jelek", "kemishe"];

const ServicesPage: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const services: Service[] = serviceKeys.map((key) => ({
    key,
    titleKey: `services.list.${key}.title`,
    subtitleKey: `services.list.${key}.subtitle`,
  }));

  return (
    <main className="services-page">
      <section className="services-page__hero">
        <div className="container">
          <SectionHeader
            title={t("services.title")}
            subtitle={t("services.subtitle")}
            align="center"
            titleClassName="about__title"
            subtitleClassName="about__subtitle"
          >
            <Button
              as="a"
              href="#list"
              variant="light"
              className="services-page__contact-btn"
            >
              {t("common.viewServices")}
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

      <section className="services-page__contacts" id="contact">
        <div className="container services-page__contacts-grid">
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

      <section id="list" className="services-page__feature">
        <div className="container services-page__feature-grid">
          <div className="section-container">
            <h2
              className="services-page__section-title"
              dangerouslySetInnerHTML={{ __html: t("services.sectionTitle") }}
            />
            <p
              className="services-page__section-subtitle"
              dangerouslySetInnerHTML={{
                __html: t("services.sectionSubtitle"),
              }}
            />
          </div>
          <img
            className="services-page__feature-image"
            src="/images/catalogue/Frame%2062.svg"
            alt="Qëndisje logosh"
          />
          <div className="services-page__menu-container">
            <ul className="services-page__menu" role="list">
              {services.map((item) => (
                <li key={item.key} className="services-page__menu-item">
                  <button
                    type="button"
                    onClick={() => navigate(`/services/${item.key}`)}
                    className="services-page__menu-btn"
                  >
                    <div className="services-page__menu-content">
                      <span className="services-page__menu-title">
                        {t(item.titleKey)}
                      </span>
                      <Button
                        as="a"
                        href={`/services/${item.key}`}
                        variant="outline"
                        className="services-page__menu-btn-icon"
                      >
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
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
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Clients />

      <ShowcaseGallery
        title={t("services.gallery.qendisje-logosh.title")}
        subtitle={
          <span
            dangerouslySetInnerHTML={{
              __html: t("services.gallery.qendisje-logosh.subtitle").replace(
                /\n/g,
                "<br />"
              ),
            }}
          />
        }
        moreHref="/services/qendisje-logosh"
        images={[
          "/images/catalogue/Frame%2064.svg",
          "/images/about/maqina.svg",
          "/images/catalogue/Frame%2066.svg",
          "/images/catalogue/Frame%2067.svg",
        ]}
        ctaTitle={
          <span
            dangerouslySetInnerHTML={{
              __html: t("services.gallery.qendisje-logosh.ctaTitle"),
            }}
          />
        }
        ctaHref="/contact"
      />

      <ShowcaseGallery
        title={t("services.gallery.kicele.title")}
        subtitle={
          <span
            dangerouslySetInnerHTML={{
              __html: t("services.gallery.kicele.subtitle").replace(
                /\n/g,
                "<br />"
              ),
            }}
          />
        }
        moreHref="/services/kicele"
        images={[
          "/images/catalogue/Frame%2068.svg",
          "/images/catalogue/Frame%2070.svg",
          "/images/catalogue/Frame%2071.svg",
          "/images/catalogue/Frame%2069.svg",
        ]}
        ctaTitle={
          <span
            dangerouslySetInnerHTML={{
              __html: t("services.gallery.kicele.ctaTitle"),
            }}
          />
        }
        ctaHref="/contact"
      />

      <ShowcaseGallery
        title={t("services.gallery.jelek.title")}
        subtitle={
          <span
            dangerouslySetInnerHTML={{
              __html: t("services.gallery.jelek.subtitle").replace(
                /\n/g,
                "<br />"
              ),
            }}
          />
        }
        moreHref="/services/jelek"
        images={[
          "/images/catalogue/Frame%2072.svg",
          "/images/catalogue/Frame%2074.svg",
          "/images/catalogue/Frame%2075.svg",
          "/images/catalogue/Frame%2073.svg",
        ]}
        ctaTitle={
          <span
            dangerouslySetInnerHTML={{
              __html: t("services.gallery.jelek.ctaTitle"),
            }}
          />
        }
        ctaHref="/contact"
      />

      <ShowcaseGallery
        title={t("services.gallery.kemishe.title")}
        subtitle={
          <span
            dangerouslySetInnerHTML={{
              __html: t("services.gallery.kemishe.subtitle").replace(
                /\n/g,
                "<br />"
              ),
            }}
          />
        }
        moreHref="/services/kemishe"
        images={[
          "/images/catalogue/Frame%2076.svg",
          "/images/catalogue/Frame%2078.svg",
          "/images/catalogue/Frame%2079.svg",
          "/images/catalogue/Frame%2077.svg",
        ]}
        ctaTitle={
          <span
            dangerouslySetInnerHTML={{
              __html: t("services.gallery.kemishe.ctaTitle"),
            }}
          />
        }
        ctaHref="/contact"
      />

      <FAQ />
    </main>
  );
};

export default ServicesPage;
