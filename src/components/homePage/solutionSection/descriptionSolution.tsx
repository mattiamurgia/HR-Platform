import React from "react";

const DescriptionSolution = () => {
  return (
    <div className="flex flex-col items-center justify-between mb-18 lg:flex-row text-second-green">
      <div className="w-full p-5">
        <h5 className="text-sm font-medium mb-14">
          SOLUZIONI DI LAVORO PER OGGI
        </h5>
        <h2 className="text-5xl font-semibold tracking-wide text-start md:text-7xl">
          Rimedi per il nuovo panorama lavorativo
        </h2>
      </div>
      <div className="w-full p-8 md:mt-16">
        <p className="text-xl leading-10">
          Scopri le nostre soluzioni smart worktech e i prodotti progettati per
          rendere il tuo lavoro a prova di futuro e soddisfare le esigenze di
          oggi con facilità.
        </p>
      </div>
    </div>
  );
};

export default DescriptionSolution;
