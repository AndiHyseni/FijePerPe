import React from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero
          title="Qepim më shumë se veshje, krijojmë përfaqësimin tënd në punë"
          subtitle="Uniforma të personalizuara për biznese — cilësi, përshtatje dhe dorëzim i shpejtë."
        />
        <Features />
      </main>
      <Footer />
    </>
  );
}

export default App;
