import React from "react";

const HeadingForWho = () => {
  return (
    <div className="flex flex-col items-center justify-center md:px-16 mx-auto min-[992px]:flex-row pt-16 md:justify-around ">
      <div className="w-full min-[992px]:p-8  min-[992px]:w-10/12  px-10 text-start">
        <h1 className="font-semibold tracking-wide text-main-green text-[calc(43px+2vw)] md:leading-[80px] leading-[60px] mb-6">
          C'è un posto per tutti in Ruul
        </h1>
      </div>
      <div className="min-[992px]:w-4/12 md:self-center w-full flex flex-row justify-center min-[992px]:justify-end mt-10 min-[992px]:px-0 px-10">
        <button className="btn-cta text-lg font-bold bg-main-green text-second-green min-[992px]:w-auto w-screen">
          Contattaci
        </button>
      </div>
    </div>
  );
};

export default HeadingForWho;
