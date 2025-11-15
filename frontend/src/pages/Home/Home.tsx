import React from "react";
import Hero from "../../components/Hero/Hero";
import Features from "../../components/Features/Features";
import Services from "../../components/Services/Services";
import Businesses from "../../components/Businesses/Businesses";

const Home: React.FC = () => {
  return (
    <>
      <Hero title="Qepim më shumë se veshje, krijojmë përfaqësimin tënd në punë" />
      <Features />
      <Services />
      <Businesses />
    </>
  );
};

export default Home;
