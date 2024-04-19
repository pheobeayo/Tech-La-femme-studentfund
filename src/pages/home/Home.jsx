import React from "react";
import How from "../../components/how/How";
import Proposal from "../../components/proposal/Proposal";
import About from "../../components/about/About";
import Footer from "../../components/footer/Footer";
import Hero from "../../components/hero/Hero";

const Home = () => {
  return (
    <main className="bg-white h-screen">
      <div className="container mx-auto h-full">
        <Hero />
        <div className="mt-72">
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
      </div>
    </main>
  );
};

export default Home;
