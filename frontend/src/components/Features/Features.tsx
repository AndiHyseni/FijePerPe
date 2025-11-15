import React from "react";
import "./Features.css";

const Features: React.FC = () => {
  return (
    <section className="features" aria-label="Pse të zgjidhni FIJE PER PE">
      <div className="container">
        <div className="features__grid">
          <img
            src="/images/features/UniformaTePersonalizuara.svg"
            alt="Uniforma të personalizuara"
          />
          <img
            src="/images/features/MaterialeTeQendrueshme.svg"
            alt="Materiale të qëndrueshme"
          />
          <img
            src="/images/features/ProdhimDorezimIShpejte.svg"
            alt="Prodhim dhe dorëzim i shpejtë"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
