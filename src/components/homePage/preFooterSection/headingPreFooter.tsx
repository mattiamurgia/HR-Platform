import React from "react";

const HeadingPreFooter = () => {
  return (
    <div className="flex flex-col items-start justify-center mb-20 md:items-center md:px-5 text-start md:text-center">
      <h5 className="mb-5 text-sm font-medium tracking-wider text-second-green">
        GET STARTED NOW
      </h5>
      <h1 className="font-semibold text-5xl tracking-wide text-second-green md:text-7xl md:leading-[80px] leading-[60px] mb-6">
        Crescere e prosperare senza confini
      </h1>
      <p className="mb-8 text-xl leading-10 w-12/12 md:w-8/12 test-start md:text-center text-second-green ">
        Unisciti a oltre 50k talenti e oltre 10k aziende provenienti da 120
        paesi per scoprire quanto può essere semplice il lavoro globale con le
        soluzioni smart worktech.
      </p>
      <div className="flex justify-start space-x-4 w-12/12 md:justify-center flex-column md:flex-row">
        <button className="mr-5 btn-cta bg-second-green text-main-green">
          Sono un talento
        </button>
        <button className="btn-cta bg-dirty-white text-second-green">
          Sono un'azienda
        </button>
      </div>
    </div>
  );
};

export default HeadingPreFooter;
