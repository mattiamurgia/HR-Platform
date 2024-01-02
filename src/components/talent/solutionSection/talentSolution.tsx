import React from "react";
import SolutionDescription from "./SolutionDescription";
import ContainerCardSolution from "./ContainerCardSolution";

const TalentSolution = () => {
  return (
    <div className="flex flex-col items-center lg:items-start md:items-start justify-center w-screen py-8 space-x-5 lg:justify-between md:p-20 md:flex-row bg-dirty-yellow border-b-[1px] border-b-second-green">
      <SolutionDescription />
      <ContainerCardSolution />
    </div>
  );
};

export default TalentSolution;
