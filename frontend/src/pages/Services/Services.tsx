import React from "react";
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
  title: string;
  subtitle: string;
};

const services: Service[] = [
  {
    key: "qendisje-logosh",
    title: "Qëndisje logosh",
    subtitle: "Çdo detaj profesional që zgjat.",
  },
  {
    key: "kicele",
    title: "Kicelë",
    subtitle: "Praktik, rezistent dhe elegant.",
  },
  { key: "jelek", title: "Jelek", subtitle: "Pamje serioze, rehati e plotë." },
  {
    key: "kemishe",
    title: "Këmishë",
    subtitle: "Rehati, cilësi dhe formë perfekte.",
  },
];

const ServicesPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <main className="services-page">
      <section className="services-page__hero">
        <div className="container">
          <SectionHeader
            title="Shërbimet tona"
            subtitle={
              "Ofrojmë qepje profesionale të jelekëve, këmishave dhe\n kiceleve, si edhe qendisje logosh me cilësi të lartë."
            }
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
              Shiko shërbimet
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
          <ContactCard label="Numri" value="+383 48 766 300" />

          <ContactCard label="Email" value="info@fijeperpe.com" />

          <ContactCard
            label="Adresa"
            value="Qamil Hoxha, Prishtinë"
            className="about__contacts-last"
          />
        </div>
      </section>

      <section id="list" className="services-page__feature">
        <div className="section-container">
          <h2 className="services-page__section-title">
            Cilësi, ngjyrë, materiale dhe <br /> makineri profesionale!
          </h2>
          <p className="services-page__section-subtitle">
            Nga materiali deri te qepja çdo detaj është i <br /> realizuar me
            mjeshtëri, qepje profesionale, <br /> materiale cilësore dhe kujdes
            që bën dallimin.
          </p>
        </div>
        <div className="container services-page__feature-grid">
          <img
            className="services-page__feature-image"
            src="/images/catalogue/Frame%2062.svg"
            alt="Qëndisje logosh"
          />

          <ul className="services-page__menu" role="list">
            {services.map((item) => (
              <li key={item.key} className="services-page__menu-item">
                <button
                  type="button"
                  onClick={() => navigate(`/services/${item.key}`)}
                  className="services-page__menu-btn"
                >
                  <img
                    src={`/images/services/qendisje_services.svg`}
                    alt={item.title}
                    style={{ width: "100%" }}
                  />
                  <div className="services-page__menu-content">
                    <span className="services-page__menu-title">
                      {item.title}
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
      </section>

      <Clients />

      <ShowcaseGallery
        title="Qëndisje logosh"
        subtitle={
          <>
            Te Fije për Pe, qendisja e logove bëhet me makineri moderne dhe fije
            cilësore,
            <br />
            me precizion që garanton cilësi, qëndrueshmëri dhe përfaqësim të
            përsosur të brendit.
          </>
        }
        moreHref="/services/qendisje-logosh"
        images={[
          "/images/catalogue/Frame%2064.svg",
          "/images/about/maqina.svg",
          "/images/catalogue/Frame%2066.svg",
          "/images/catalogue/Frame%2067.svg",
        ]}
        ctaTitle={
          <>
            Qëndise{" "}
            <span style={{ color: "#EF8C16", fontStyle: "italic" }}>logon</span>{" "}
            tuaj me kualitet!
          </>
        }
        ctaHref="/contact"
      />

      <ShowcaseGallery
        title="Kicele"
        subtitle={
          <>
            Te Fije për Pe, ofrojmë kicele për çdo lloj biznesi nga restorantet
            te dyqanet, me mundësi
            <br />
            personalizimi sipas brendit tuaj, për një paraqitje profesionale dhe
            unike.
          </>
        }
        moreHref="/services/kicele"
        images={[
          "/images/catalogue/Frame%2068.svg",
          "/images/catalogue/Frame%2070.svg",
          "/images/catalogue/Frame%2071.svg",
          "/images/catalogue/Frame%2069.svg",
        ]}
        ctaTitle={
          <>
            Personalizo{" "}
            <span style={{ color: "#EF8C16", fontStyle: "italic" }}>
              kicelën
            </span>{" "}
            për biznesin tënd!
          </>
        }
        ctaHref="/contact"
      />

      <ShowcaseGallery
        title="Jelek"
        subtitle={
          <>
            Te Fije për Pe, jelekët tanë kombinojnë personalizimin, stilin unik
            dhe materialet e forta
            <br />
            për një pamje profesionale që zgjat gjatë dhe përfaqëson brendin me
            klas.
          </>
        }
        moreHref="/services/jelek"
        images={[
          "/images/catalogue/Frame%2072.svg",
          "/images/catalogue/Frame%2074.svg",
          "/images/catalogue/Frame%2075.svg",
          "/images/catalogue/Frame%2073.svg",
        ]}
        ctaTitle={
          <>
            Personalizo{" "}
            <span style={{ color: "#EF8C16", fontStyle: "italic" }}>
              jelekë
            </span>{" "}
            për biznesin tënd!
          </>
        }
        ctaHref="/contact"
      />

      <ShowcaseGallery
        title="Këmishë"
        subtitle={
          <>
            Ne Fije për Pe, ofrojmë këmisha të personalizuara për çdo lloj
            biznesi, me stil unik,
            <br />
            materiale cilësore dhe qëndrueshmëri që përfaqësojnë brendin me
            elegancë.
          </>
        }
        moreHref="/services/kemishe"
        images={[
          "/images/catalogue/Frame%2076.svg",
          "/images/catalogue/Frame%2078.svg",
          "/images/catalogue/Frame%2079.svg",
          "/images/catalogue/Frame%2077.svg",
        ]}
        ctaTitle={
          <>
            Personalizo{" "}
            <span style={{ color: "#EF8C16", fontStyle: "italic" }}>
              këmishë
            </span>{" "}
            për biznesin tënd!
          </>
        }
        ctaHref="/contact"
      />

      <FAQ />
    </main>
  );
};

export default ServicesPage;
