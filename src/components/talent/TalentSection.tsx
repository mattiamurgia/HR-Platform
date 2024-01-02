import React from "react";
import Navbar from "../mainComponents/navbar/Navbar";
import MainSectionTalent from "./mainSectionTalent/MainSectionTalent";
import TalentSolution from "./solutionSection/TalentSolution";
import RemoteEasily from "./remoteEasilySection/RemoteEasily";
import ForWhoSection from "./forWhoSection/ForWhoSection";
import LogosSlider from "./logosCarousel/LogosSlider";
import ContainerFooter from "../mainComponents/footer/ContainerFooter";

const TalentSection = () => {
  return (
    <div>
      <Navbar />
      <MainSectionTalent />
      <TalentSolution />
      <RemoteEasily />
      <ForWhoSection />
      <LogosSlider />
      <ContainerFooter />
    </div>
  );
};

export default TalentSection;
