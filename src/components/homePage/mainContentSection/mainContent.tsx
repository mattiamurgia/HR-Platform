import React from "react";
import DescriptionComponent from "./descriptionComponent";
import DescriptionImage from "./descriptionImage";

const MainContent = () => {
  return (
    <div className="flex flex-row items-start justify-around p-5 mt-40 md:space-x-14">
      <DescriptionImage />
      <DescriptionComponent />
    </div>
  );
};

export default MainContent;
