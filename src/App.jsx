import React from "react";

// Components
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Universities from "./components/Universities";
import Benefits from "./components/Benefits";
import Logos from "./components/Logos";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <header className="relative">
        <Header />
        <Navbar />
      </header>
      <main>
        <Hero />
        <Universities />
        <Benefits />
        <Logos />
      </main>
      <Footer />
    </>
  );
}

export default App;
