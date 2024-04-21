import React from "react";
import How from "../../components/how/How";
import Proposal from "../../components/proposal/Proposal";
import About from "../../components/about/About";
import Footer from "../../components/footer/Footer";
import Hero from "../../components/hero/Hero";

const Home = () => {
  return (
    <main className="bg-white h-screen container mx-auto">
      <section className="w-[100vw] md:w-[100%]   h-[100vh] bg-white">
      <div className="container mx-auto h-full">
        <Hero />
        <How />
        <Proposal />
        <About />
        
        <div className='w-screen'>
          <Footer />
        </div>
      </div>
      </section>
    </main>
  );
};

export default Home;
