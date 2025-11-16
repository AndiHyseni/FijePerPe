import React from "react";
import "./Clients.css";

const logos = [
  { alt: "Savor", src: "/images/clients/savor.svg" },
  { alt: "Green & Protein", src: "/images/clients/greenprotein.svg" },
  { alt: "LA TARTE", src: "/images/clients/latarte.svg" },
  { alt: "Seven Gym", src: "/images/clients/sevengym.svg" },
  { alt: "MiMi", src: "/images/clients/mimi.svg" },
  { alt: "Dioren", src: "/images/clients/dioren.svg" },
];

const Clients: React.FC = () => {
  return (
    <section className="clients" aria-labelledby="clients-title">
      <div className="container">
        <h2 id="clients-title" className="clients__title">
          Klientët tanë
        </h2>
        <ul className="clients__list" role="list">
          {logos.map((logo) => (
            <li key={logo.alt} className="clients__item">
              <div className="clients__card">
                <img src={logo.src} alt={logo.alt} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Clients;
