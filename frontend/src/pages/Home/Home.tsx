import React from "react";
import { useTranslation } from "react-i18next";
import Hero from "../../components/Hero/Hero";
import Features from "../../components/Features/Features";
import Services from "../../components/Services/Services";
import Businesses from "../../components/Businesses/Businesses";
import Catalogue from "../../components/Catalogue/Catalogue";
import Clients from "../../components/Clients/Clients";
import Reviews from "../../components/Reviews/Reviews";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <>
      <Hero
        title={t("hero.title")}
        ctaText={t("hero.cta")}
        onCtaClick={() => navigate("/services")}
      />
      <Features />
      <Services />
      <Businesses />
      <Catalogue />
      <Clients />
      <Reviews />
    </>
  );
};

export default Home;
