import React from "react";
import How from "../../components/how/How";
import Proposal from "../../components/proposal/Proposal";
import About from "../../components/about/About";
import Footer from "../../components/footer/Footer";
import Hero from "../../components/hero/Hero";

const Home = () => {
  return (
    <main className="bg-white h-screen">
      <Hero />
      <div className="mt-48">
        <How />
      </div>
      <div>
        <Proposal />
      </div>
      <div>
        <About />
      </div>
      <div>
        <Footer />
      </div>
    </main>
  );
};

export default Home;
