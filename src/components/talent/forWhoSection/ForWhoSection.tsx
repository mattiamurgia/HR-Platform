import React from "react";
import HeadingForWho from "./HeadingForWho";
import CarouselCardForWho from "./CarouselCardForWho";
import BottomDescription from "./BottomDescription";

const ForWhoSection = () => {
  return (
    <div className="px-6 pb-20 bg-second-green">
      <HeadingForWho />
      <CarouselCardForWho />
      <BottomDescription />
    </div>
  );
};
export default ForWhoSection;
