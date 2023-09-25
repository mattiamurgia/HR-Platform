import React from "react";

const HeadingLastSection = () => {
  return (
    <div className="flex flex-col items-center justify-center px-8 py-20 md:justify-around md:space-x-0 lg:space-x-20 md:px-14 lg:flex-row text-second-green md:flex-col ">
      <div className="text-sm w-12/12">
        <h1 className="mb-10 text-5xl font-semibold tracking-wide text-wrap md:text-7xl">
          Esplora e diffondi: Ruul Blog
        </h1>
        <p className="text-xl font-medium leading-10 whitespace-normal">
          Ruul Blog funge da centro di conoscenza per le tendenze attuali nella
          cultura del lavoro contemporanea.
        </p>
      </div>
      <div className="flex flex-row items-center justify-center w-screen md:w-8/12">
        <div className="w-[90vw] md:w-full p-2 ">
          <div className="relative mt-2 rounded-md shadow-sm">
            <input
              type="text"
              className="block w-full py-6 pr-20 border-0 rounded-md pl-7 text-second-green ring-1 ring-inset ring-second-green placeholder:text-second-green placeholder:text-lg bg-dirty-white focus:ring-inset sm:text-sm sm:leading-6 focus:ring-second-green"
              placeholder="Indirizzo email"
            />
            <div className="absolute inset-y-0 right-0 flex items-center">
              <button className="mr-2 btn-cta bg-second-green text-main-green">
                Iscriviti
              </button>
            </div>
          </div>
          <label className="block p-1 mt-1 text-sm font-medium leading-6 text-second-green">
            Iscriviti alla nostra newsletter per tenere d'occhio le ultime
            novità.
          </label>
        </div>
      </div>
    </div>
  );
};

export default HeadingLastSection;
