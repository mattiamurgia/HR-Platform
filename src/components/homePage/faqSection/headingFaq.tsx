import React from "react";

const HeadingFaq = () => {
  return (
    <div className="w-screen h-full px-2 text-center md:text-start md:w-10/12 text-second-green">
      <h5 className="mb-8 text-sm font-medium ">QUI PER AIUTARTI</h5>
      <h2 className="mb-5 text-6xl font-semibold tracking-wide">FAQ</h2>
      <p className="text-xl font-light">
        Trova qui le risposte alle tue domande
      </p>
      <div className="flex flex-col items-center justify-between mt-10 md:flex-row">
        <h6 className="text-sm font-semibold ">
          Hai bisogno di ulteriore supporto?
        </h6>
        <button
          type="button"
          className="btn-cta bg-second-green text-main-green mt-5 md:mt-0 hover:bg-[#00554E]"
        >
          Ottieni supporto
        </button>
      </div>
    </div>
  );
};
export default HeadingFaq;
