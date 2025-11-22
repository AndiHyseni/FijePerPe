import React from "react";
import "./Businesses.css";

const Businesses: React.FC = () => {
  return (
    <section className="businesses" aria-label="Bizneset tona">
      <div className="container">
        <h2 className="businesses__title">Për çdo brend, për çdo biznes</h2>
        {/* Desktop: Single image */}
        <img
          src="/images/bizneset/Bizneset.svg"
          alt="Businesses"
          className="businesses__desktop-image"
        />
        {/* Mobile: Two images */}
        <div className="businesses__images">
          <img src="/images/bizneset/Bizneset1.svg" alt="Businesses" />
          <img src="/images/bizneset/Bizneset2.svg" alt="Businesses" />
        </div>
      </div>
    </section>
  );
};

export default Businesses;
