import React from "react";

const HeadingRemoteEasily = () => {
  return (
    <div className="flex flex-col items-center justify-center md:px-10 mx-auto min-[992px]:flex-row py-20 md:justify-around ">
      <div className="w-full min-[992px]:p-8  min-[992px]:w-9/12  md:text-start text-center">
        <h5 className="mb-5 text-sm font-medium text-second-green">
          EMPOWERING MODERN TALENTS
        </h5>
        <h1 className="font-semibold  tracking-wide text-second-green text-[calc(43px+2vw)] md:leading-[80px] leading-[60px] mb-6">
          La realtà remota resa senza problemi
        </h1>
        <p className="mb-8 text-xl leading-7 text-center md:text-justify md:w-3/4 text-second-green">
          Semplifica e rafforza i tuoi legami con le aziende utilizzando le
          nostre soluzioni flessibili realizzate per il nuovo modo di lavorare.
        </p>
      </div>
      <div className="min-[992px]:w-4/12 md:self-center w-full flex flex-row justify-center min-[992px]:justify-end mt-10 min-[992px]:px-0 px-10">
        <button className="btn-cta bg-second-green text-main-green min-[992px]:w-auto w-screen">
          Inizia Adesso
        </button>
      </div>
    </div>
  );
};

export default HeadingRemoteEasily;
