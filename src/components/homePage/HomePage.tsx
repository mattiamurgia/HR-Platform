import React from "react";
import Navbar from "../mainComponents/navbar/Navbar";
import HeroSection from "./heroSection/HeroSection";
import ContainerCardUses from "./cardUses/ContainerCardUses";
import MainContent from "./mainContentSection/MainContent";
import ContainerSection from "./centralSection/ContainerSection";
import ContainerSolution from "./solutionSection/ContainerSolution";
import SectionFaq from "./faqSection/SectionFaq";
import ContainerCarousel from "./carouselSection/ContainerCarousel";
import ContainerPreFooter from "./preFooterSection/ContainerPreFooter";
import ContainerLastSection from "./lastSection/ContainerLastSection";
import ContainerFooter from "../mainComponents/footer/ContainerFooter";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ContainerCardUses />
      <MainContent />
      <ContainerSection />
      <ContainerSolution />
      <SectionFaq />
      <ContainerCarousel />
      <ContainerPreFooter />
      <ContainerLastSection />
      <ContainerFooter />
    </div>
  );
};

export default HomePage;
