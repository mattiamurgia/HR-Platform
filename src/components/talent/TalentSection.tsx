import React from "react";
import Navbar from "../mainComponents/navbar/Navbar";
import MainSectionTalent from "./mainSectionTalent/mainSectionTalent";
import TalentSolution from "./solutionSection/talentSolution";

const TalentSection = () => {
  return (
    <div>
      <Navbar />
      <MainSectionTalent />
      <TalentSolution />
    </div>
  );
};

export default TalentSection;
