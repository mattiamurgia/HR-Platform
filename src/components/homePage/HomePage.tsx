import React from "react";
import Navbar from "../mainComponents/navbar/Navbar";
import HeroSection from "./heroSection/HeroSection";
import ContainerCardUses from "./cardUses/containerCardUses";
import MainContent from "./mainContentSection/mainContent";
import ContainerSection from "./centralSection/containerSection";
import ContainerSolution from "./solutionSection/containerSolution";
import SectionFaq from "./faqSection/sectionFaq";
import ContainerCarousel from "./carouselSection/containerCarousel";
import ContainerPreFooter from "./preFooterSection/containerPreFooter";
import ContainerLastSection from "./lastSection/containerLastSection";
import ContainerFooter from "../mainComponents/footer/containerFooter";

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
