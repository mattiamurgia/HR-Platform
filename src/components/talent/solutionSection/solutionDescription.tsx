import React from "react";

const SolutionDescription = () => {
  return (
    <div className="w-full min-[992px]:p-8 min-[992px]:w-6/12 md:sticky md:top-[15vh] mb-10 px-5 ">
      <h5 className="mb-3 text-sm font-medium text-second-green">
        WORKTECH SOLUTION
      </h5>
      <h1 className="font-semibold text-5xl text-second-green md:text-5xl md:leading-tight leading-[60px] mb-3">
        Soluzioni per il lavoro individuale e l'autonomia
      </h1>
      <p className="mb-5 text-xl leading-7 text-second-green">
        Scopri la nostra gamma di soluzioni finanziarie e di conformità per
        professionisti indipendenti, talenti fuori busta paga e collaboratori
        esterni.
      </p>
      <div className="flex min-[992px]:justify-start justify-center space- x-4 flex-column md:flex-row px-5 md:px-0">
        <button className="w-full md:w-auto btn-cta bg-second-green text-main-green">
          Iscriviti Ora
        </button>
      </div>
    </div>
  );
};

export default SolutionDescription;
