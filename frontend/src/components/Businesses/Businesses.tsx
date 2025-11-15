import React from "react";
import "./Businesses.css";

const Businesses: React.FC = () => {
  return (
    <section className="businesses" aria-label="Bizneset tona">
      <div className="container">
        <h2 className="businesses__title">Për çdo brend, për çdo biznes</h2>
        <img src="/images/bizneset/Bizneset.svg" alt="Businesses" />
        <img src="/images/bizneset/Bottom_qepja.svg" alt="Businesses Slogan" />
      </div>
    </section>
  );
};

export default Businesses;
