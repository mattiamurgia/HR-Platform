import React from "react";
import HeadingPreFooter from "./HeadingPreFooter";
import ImagePreFooter from "./ImagePreFooter";

const ContainerPreFooter = () => {
  return (
    <div className="w-screen h-auto px-6 bg-main-green py-24 border-solid border-b-[1px] border-second-green">
      <HeadingPreFooter />
      <ImagePreFooter />
    </div>
  );
};

export default ContainerPreFooter;
