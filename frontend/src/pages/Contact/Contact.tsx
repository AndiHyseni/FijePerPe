import React from "react";
import "./Contact.css";
import Button from "../../components/shared/Button";
import SectionHeader from "../../components/shared/SectionHeader";
import ContactCard from "../../components/shared/ContactCard";
import FAQ from "../../components/FAQ/FAQ";

const Contact: React.FC = () => {
  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    alert("Mesazhi u dërgua! (demo)");
  };

  return (
    <main className="contact-page">
      <section className="contact__hero">
        <div className="container">
          <SectionHeader
            title="Na kontaktoni"
            subtitle={
              "Na kontaktoni për porosi, bashkëpunime ose pyetje,\n ekipi ynë është gati t’ju ndihmojë me zgjedhjen e më të mirës për biznesin tuaj."
            }
            align="center"
            titleClassName="about__title"
            subtitleClassName="about__subtitle"
          >
            <Button
              as="a"
              href="#form"
              variant="light"
              className="contact__contact-btn"
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

      <section className="contact__cards">
        <div className="container contact__cards-grid">
          <ContactCard label="Numri" value="+383 48 766 300" />
          <ContactCard label="Email" value="info@fijeperpe.com" />
          <ContactCard
            label="Adresa"
            value="Qamil Hoxha, Prishtinë"
            className="about__contacts-last"
          />
        </div>
      </section>

      <section id="form" className="contact__form">
        <div className="container">
          <form className="form" onSubmit={onSubmit}>
            <div className="form__row">
              <label className="form__field">
                <span>Emri</span>
                <input
                  type="text"
                  name="firstName"
                  placeholder="John"
                  required
                />
              </label>
              <label className="form__field">
                <span>Mbiemri</span>
                <input type="text" name="lastName" placeholder="Doe" required />
              </label>
            </div>
            <div className="form__row">
              <label className="form__field">
                <span>Email</span>
                <input
                  type="email"
                  name="email"
                  placeholder="johndoe@email.com"
                  required
                />
              </label>
              <label className="form__field">
                <span>Numri</span>
                <input type="tel" name="phone" placeholder="+383 00 000 000" />
              </label>
            </div>
            <label className="form__field">
              <span>Subject</span>
              <textarea
                name="subject"
                rows={6}
                placeholder="Leave us a message..."
              />
            </label>
            <label className="form__checkbox">
              <input
                type="checkbox"
                style={{ width: "16px", height: "16px", margin: "0px" }}
              />{" "}
              <span>You agree to our friendly privacy policy.</span>
            </label>
            <Button variant="outline" size="lg" className="contact__submit-btn">
              Dërgo mesazhin
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
          </form>
        </div>
      </section>

      <section className="contact__visit">
        <div className="container contact__visit-grid">
          <div className="contact__visit-card">
            <h3 className="contact__visit-title">Na vizitoni në Prishtinë</h3>
            <p>
              Jemi të vendosur në zemër të qytetit, gati për t’ju ndihmuar{" "}
              <br />
              me çdo porosi apo personalizim. Ejani të shihni nga afër <br />
              procesin e qepjes dhe cilësinë e produkteve tona.
            </p>
            <Button variant="outline" size="md" className="contact__visit-btn">
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
          <div className="contact__map" aria-label="Harta e zyrës">
            <iframe
              title="Harta e Prishtinës"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2655.1017710806404!2d21.160867212476344!3d42.661716400275736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13549f0c3b1dd3ab%3A0x2d4a63b652188da0!2sFije%20per%20Pe!5e1!3m2!1sen!2s!4v1763505411689!5m2!1sen!2s"
            />
          </div>
        </div>
      </section>

      <FAQ />
    </main>
  );
};

export default Contact;
