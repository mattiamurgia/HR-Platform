import React from "react";
import CardLastSection from "./cardLastSection";

const ImageContainerLastSection = () => {
  return (
    <div className="pb-32 px-[5%]">
      <div className="bg-[url(https://uploads-ssl.webflow.com/63fffb3513dd1b7acde9449c/642af93bbd288356a0c7921c_blog_background.jpg)] bg-no-repeat bg-cover bg-center w-full h-auto border-solid border-[1px] border-second-green rounded-md object-cover py-20 flex flex-col min-[996px]:flex-row justify-center min-[996px]:justify-around p-5 min-[996px]:items-end items-center md:space-x-10 bg-yellow-300">
        <CardLastSection />
        <div className="flex flex-col items-center justify-center w-full p-3 mt-10 space-y-10 md:w-8/12 min-[996px]:space-x-3 min-[996px]:items-end min-[996px]:justify-end min-[996px]:flex-row min-[996px]:align-self">
          <button className="w-full min-[996px]:w-auto btn-cta bg-second-green text-main-green">
            Iscriviti
          </button>
          <button className="w-full min-[996px]:w-auto btn-cta bg-main-green text-second-green">
            Iscriviti
          </button>
        </div>
      </div>
    </div>
  );
};
export default ImageContainerLastSection;
