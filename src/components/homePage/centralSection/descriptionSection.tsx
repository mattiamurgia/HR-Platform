import React from "react";

const DescriptionSection = () => {
  return (
    <div className="flex flex-col items-center justify-between mb-20 lg:flex-row text-main-green">
      <div className="w-full p-5">
        <h5 className="text-sm font-medium mb-14 ">
          IL NUOVO MODO DI LAVORARE
        </h5>
        <h2 className="text-5xl font-semibold tracking-wide text-start md:text-7xl">
          Su misura per la nuova economia
        </h2>
      </div>
      <div className="w-full p-8 md:mt-16">
        <p className="text-xl leading-10">
          La tecnologia che soddisfa le esigenze uniche dei talenti e delle
          imprese moderne. La nostra missione è potenziare l'agilità,
          l'autonomia e la conformità per rimanere all'avanguardia in
          un'economia in rapida evoluzione.
        </p>
      </div>
    </div>
  );
};

export default DescriptionSection;
