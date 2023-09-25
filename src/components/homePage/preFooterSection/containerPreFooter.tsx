import React from "react";
import HeadingPreFooter from "./headingPreFooter";
import ImagePreFooter from "./imagePreFooter";

const ContainerPreFooter = () => {
  return (
    <div className="w-screen h-auto px-6 bg-main-green py-24 border-solid border-b-[1px] border-second-green">
      <HeadingPreFooter />
      <ImagePreFooter />
    </div>
  );
};

export default ContainerPreFooter;
