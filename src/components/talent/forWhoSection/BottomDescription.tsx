import React from "react";

const BottomDescription = () => {
  return (
    <div className="container flex justify-center px-0 py-3 mx-auto mt-3 md:px-3 md:justify-end text-dirty-white">
      <div className="flex flex-row items-center justify-between w-screen md:w-6/12">
        <div className="flex items-start space-x-0 md:space-x-3">
          <img
            src="https://res.cloudinary.com/dnckkupc5/image/upload/v1696331675/HR-Platform/Per-Chi/triangle-logo.svg"
            alt=""
          />
          <div className="flex flex-col w-full md:w-10/12">
            <p className="text-sm font-semibold">
              50.000
              <span className="text-[#ED955A] tracking-wider">
                + professionisti
              </span>
            </p>
            <p className="text-xs text-[#9c9eab] font-light tracking-wider mt-1">
              semplificare il lavoro, la finanza e la conformità
            </p>
          </div>
        </div>
        <div className="flex items-start p-2 space-x-3">
          <img
            src="https://res.cloudinary.com/dnckkupc5/image/upload/v1696331675/HR-Platform/Per-Chi/dollar-icon.svg"
            alt=""
          />
          <div className="flex flex-col w-full md:w-10/12">
            <p className="text-sm font-semibold">
              10.000
              <span className="text-[#86c1a0] tracking-wider">
                + organizzazioni
              </span>
            </p>
            <p className="text-xs text-[#9c9eab] font-light tracking-wider mt-1">
              lavorare in sintonia con i talenti di tutto il mondo
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomDescription;
