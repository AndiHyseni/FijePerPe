import React from "react";
import { useTranslation } from "react-i18next";
import "./Features.css";

const Features: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="features" aria-label={t("features.ariaLabel")}>
      <div className="container">
        <div className="features__grid">
          <img
            src="/images/features/UniformaTePersonalizuara.svg"
            alt={t("features.customUniforms")}
          />
          <img
            src="/images/features/MaterialeTeQendrueshme.svg"
            alt={t("features.durableMaterials")}
          />
          <img
            src="/images/features/ProdhimDorezimIShpejte.svg"
            alt={t("features.fastProduction")}
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
