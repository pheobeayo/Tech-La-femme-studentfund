import React from "react";
import Footer from "../../components/footer/Footer";
import About from "../../components/about/About";

const Aboutus = () => {
  return (
    <main class="w-[100vw] h-[120vh]">
      <section class="w-screen h-full mt-2">
        <About/>
      </section>

      <Footer />
    </main>
  );
};

export default Aboutus;
