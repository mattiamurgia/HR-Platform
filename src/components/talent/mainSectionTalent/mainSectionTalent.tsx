import React from "react";
import HeadingTalent from "./headingTalent";
import TalentImage from "./talentImage";

const MainSectionTalent = () => {
  return (
    <div className="h-auto mt-[5%] text-3xl bg-main-green flex flex-col justify-center border-b-[1px] border-b-second-green w-screen py-10 ">
      <HeadingTalent />
      <TalentImage />
    </div>
  );
};

export default MainSectionTalent;
