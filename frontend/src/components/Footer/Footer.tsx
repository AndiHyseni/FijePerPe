import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <section className="footer__newsletter">
        <div className="container footer__newsletter-inner">
          <h3 className="footer__newsletter-title">
            Regjistrohu për oferta të personalizuara!
          </h3>
          <form
            className="footer__newsletter-form"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="footer__input">
              <span className="footer__input-icon" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z"
                    stroke="#F7E0C6"
                    strokeWidth="1.5"
                  />
                  <path
                    d="m22 8-10 7L2 8"
                    stroke="#F7E0C6"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <input
                type="email"
                placeholder="Enter your email address"
                aria-label="Email address"
              />
            </div>
          </form>
        </div>
      </section>

      <section className="footer">
        <div className="container footer__grid">
          <div className="footer__brand">
            <img
              src="/images/footer/footer_logo.svg"
              alt="FIJE PER PE"
              className="footer__logo"
            />
            <p className="footer__tagline">Uniforma juaj, qepur fije për pe.</p>
            <div className="footer__socials" aria-label="Social">
              <a href="#" aria-label="Facebook">
                <svg width="22.5" height="22.5" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M22 12.06C22 6.48 17.52 2 11.94 2S2 6.48 2 12.06c0 5 3.66 9.14 8.44 9.94v-7.03H7.9v-2.9h2.54V9.41c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.22.2 2.22.2v2.44h-1.25c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.9h-2.34v7.03C18.34 21.2 22 17.06 22 12.06Z"
                    fill="#511110"
                  />
                </svg>
              </a>
              <a href="#" aria-label="Instagram">
                <svg width="22.5" height="22.5" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Z"
                    stroke="#511110"
                    strokeWidth="1.5"
                  />
                  <circle cx="12" cy="12" r="3.5" stroke="#511110" />
                  <circle cx="17.5" cy="6.5" r="1" fill="#511110" />
                </svg>
              </a>
              <a href="#" aria-label="Twitter">
                <svg width="22.5" height="22.5" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M22 5.92c-.75.33-1.56.56-2.4.66a4.16 4.16 0 0 0 1.82-2.3 8.3 8.3 0 0 1-2.63 1A4.14 4.14 0 0 0 11.2 8.1a11.76 11.76 0 0 1-8.54-4.33 4.13 4.13 0 0 0 1.28 5.53c-.64-.02-1.24-.2-1.77-.49v.05a4.15 4.15 0 0 0 3.32 4.06c-.3.08-.62.12-.95.12-.23 0-.46-.02-.68-.06a4.15 4.15 0 0 0 3.87 2.88A8.3 8.3 0 0 1 2 18.58a11.72 11.72 0 0 0 6.35 1.86c7.62 0 11.79-6.31 11.79-11.79 0-.18-.01-.35-.02-.53A8.41 8.41 0 0 0 22 5.92Z"
                    fill="#511110"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="footer__col">
            <h4 className="footer__heading">Kompania</h4>
            <ul className="footer__links" role="list">
              <li>
                <a href="#">Rreth nesh</a>
              </li>
              <li>
                <a href="#">Çfarë ofrojmë</a>
              </li>
              <li>
                <a href="#">Projektet tona</a>
              </li>
              <li>
                <a href="#">Kariera</a>
              </li>
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__heading">Ndihmë</h4>
            <ul className="footer__links" role="list">
              <li>
                <a href="#">Mbështetje për klientë</a>
              </li>
              <li>
                <a href="#">Detajet e dorëzimit</a>
              </li>
              <li>
                <a href="#">Kushtet e përdorimit</a>
              </li>
              <li>
                <a href="#">Politika e privatësisë</a>
              </li>
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__heading">Pyetje të shpeshta</h4>
            <ul className="footer__links" role="list">
              <li>
                <a href="#">Llogaria juaj</a>
              </li>
              <li>
                <a href="#">Menaxhimi</a>
              </li>
              <li>
                <a href="#">Porositë</a>
              </li>
              <li>
                <a href="#">Pagesat</a>
              </li>
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__heading">Burimet</h4>
            <ul className="footer__links" role="list">
              <li>
                <a href="#">Libra elektronikë falas</a>
              </li>
              <li>
                <a href="#">Udhëzues për zhvillim</a>
              </li>
              <li>
                <a href="#">Blog me udhëzime</a>
              </li>
              <li>
                <a href="#">Lista jonë në YouTube</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <div className="container">
            <p className="footer__copyright">
              fijeperpe © 2000–{year}, All Rights Reserved
            </p>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
