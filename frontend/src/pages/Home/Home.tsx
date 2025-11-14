import React from "react";
import Hero from "../../components/Hero/Hero";
import Features from "../../components/Features/Features";

const Home: React.FC = () => {
  return (
    <>
      <Hero title="Qepim më shumë se veshje, krijojmë përfaqësimin tënd në punë" />
      <Features />
    </>
  );
};

export default Home;
