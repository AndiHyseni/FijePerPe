import React from "react";
import Button from "../../components/shared/Button";
import SectionHeader from "../../components/shared/SectionHeader";
import ContactCard from "../../components/shared/ContactCard";
import TwoColumn from "../../components/shared/TwoColumn";
import "./About.css";
import FeatureShowcase from "../../components/shared/FeatureShowcase";
import Clients from "../../components/Clients/Clients";
import FAQ from "../../components/FAQ/FAQ";

const About: React.FC = () => {
  return (
    <main className="about">
      <section className="about__hero">
        <div className="container about__hero-inner">
          <SectionHeader
            title="About Us"
            subtitle={
              "Kombinojmë dizajnin, cilësinë dhe profesionalizmin në qdo qepje,\nPër uniforma që duken bukur dhe qëndrojnë gjatë."
            }
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

      <section className="about__contacts" id="contact">
        <div className="container about__contacts-grid">
          <ContactCard label="Numri" value="+383 48 766 300" />

          <ContactCard label="Email" value="info@fijeperpe.com" />

          <ContactCard
            label="Adresa"
            value="Qamil Hoxha, Prishtinë"
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
              <h2 className="about__section-title">Rreth nesh</h2>
              <p>
                Fije për Pe është një biznes i themeluar në Prishtinë, i nisur
                nga pasioni për qepje dhe dizajn profesional. Ne krijojmë dhe
                personalizojmë uniforma për biznese që kërkojnë cilësi, stil dhe
                funksionalitet. <br />
                <br />
                Çdo produkt qepet me materiale cilësore, ngjyra që qëndrojnë dhe
                makineri moderne për perfundim të përsosur. Besojmë se uniforma
                nuk është thjesht veshje; është pjesë e identitetit të çdo
                biznesi.
              </p>
              <Button
                as="a"
                href="#products"
                variant="outline"
                className="about__contact-btn"
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
            </>
          </TwoColumn>
        </div>
      </section>

      <section className="about__band">
        <div className="container about__band-inner">
          <div className="about__band-copy">
            <h3>
              Nga kicelja, këmisha e deri tek <br /> jeleku çdo detaj i qepur
              fije për pe
            </h3>
            <p>Të personalizuara për çdo profesion që kërkon stil.</p>
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
          <h2>
            Cilësi, ngjyrë, materiale dhe <br /> makineri profesionale!
          </h2>
          <FeatureShowcase
            image={<img src="/images/about/qesja_zmr.svg" alt="Pe Uniforma" />}
            features={[
              {
                iconSrc: "/images/about/Peri.svg",
                title: "Ngjyrë që qëndron",
                description:
                  "Përdorim materiale me ngjyrë rezistente që ruajnë ngjyrën e fortë dhe të freskët, edhe pas shumë larjesh dhe përdorimesh të përditshme.",
              },
              {
                iconSrc: "/images/about/Peri.svg",
                title: "Personalizim me logo",
                description:
                  "Falë makinerive moderne për qepje, ofrojmë logo të qëndrueshme dhe të sakta që e bëjnë uniformën pjesë të identitetit të biznesit tënd.",
              },
              {
                iconSrc: "/images/about/Peri.svg",
                title: "Materiale cilësore",
                description:
                  "Çdo copë përzgjidhet me kujdes për të siguruar rehati në veshje dhe cilësi të lartë  cilësi që ndihet në çdo prekje.",
              },
              {
                iconSrc: "/images/about/Peri.svg",
                title: "Punëdore me standard profesional",
                description:
                  "Çdo produkt kalon nëpër duar mjeshtërish që i japin formë perfekte, duke bashkuar stilin me qëndrueshmërinë në çdo qepje.",
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
