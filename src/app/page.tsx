import React from "react";
import Carousel from "../components/Carousel";
import AboutCard from "@/components/Aboutcard";
import Header from "@/components/Header";
import IntroBanner from "@/components/Introbanner";
import ContactSection from "@/components/Contactsection";
import Gradientlayout from "@/components/Gradientlayout";
import PortfolioTitle from "@/components/Portfoliotitle";
import ClipsSection from "@/components/ClipsSection";
export default function Home() {
  return (
    <Gradientlayout>
      <Header></Header>

      <section id="portfolio" className="p-10 bg-gray-100">
        <PortfolioTitle></PortfolioTitle>
        <IntroBanner></IntroBanner>
        <div className="max-w-4xl mx-auto">
          <Carousel />
        </div>
      </section>
      <section className="p-10 text-center bg-white">
        <h2 id="about" className="text-3xl font-semibold mb-4">
          About Me
        </h2>
        <AboutCard></AboutCard>
      </section>
      <section id="clips" className="p-10 bg-white">
        <ClipsSection></ClipsSection>
      </section>
      <section id="contact" className="p-10 bg-white">
        <ContactSection></ContactSection>
      </section>
    </Gradientlayout>
  );
}
