import React from "react";

const HeroSection = () => {
  return (
    <div className="h-[85vh] mt-[5%] text-3xl bg-main-green relative flex justify-center border-b-[1px] border-b-second-green">
      <div className="container absolute flex flex-col items-start justify-center min-w-full mt-5 top-8 md:justify-between md:flex-row">
        <div className="p-8">
          <h5 className="mb-5 text-sm font-medium text-second-green">
            WORKTECH
          </h5>
          <h1 className="font-semibold text-5xl tracking-wide text-second-green md:text-7xl md:leading-[80px] leading-[60px] mb-6">
            L'infrastruttura del lavoro moderno
          </h1>
          <p className="mb-8 text-xl leading-7 text-justify md:w-3/4 text-second-green">
            Progettare nuovi modi per connettere talenti e organizzazioni a
            migliorare le loro prestazioni finanziarie e semplificare la
            conformità.
          </p>
          <div className="flex justify-start space- x-4 bg-dark-50 flex-column md:flex-row">
            <button className="mr-5 btn-cta bg-second-green text-main-green">
              Sono un talento
            </button>
            <button className="btn-cta bg-dirty-white text-second-green">
              Sono un'azienda
            </button>
          </div>
        </div>
        <div className="hidden min-[992px]:inline w-full md:w-3/4 p-14">
          <div>
            <img
              loading="eager"
              className="w-[500px] h-[340px] "
              rel="preload"
              decoding="sync"
              src="https://res.cloudinary.com/dnckkupc5/image/upload/v1690206029/HR-Platform/Section/Image-Hero_Section.svg"
              alt="HR-Platform Hero Section"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
