import React from "react";
import AvatarIcon from "./avatarIcon";

const HeadingTalent = () => {
  return (
    <div>
      <div className="flex flex-col items-start justify-center px-8 mx-auto min-[992px]:flex-row mt-14 md:px-20 md:justify-around">
        <div className="w-full min-[992px]:p-8  min-[992px]:w-9/12">
          <h5 className="mb-5 text-sm font-medium text-second-green">
            RUUL PER I TALENTI
          </h5>
          <h1 className="font-semibold text-5xl tracking-wide text-second-green md:text-7xl md:leading-[80px] leading-[60px] mb-6">
            Collabora con qualsiasi azienda a livello globale
          </h1>
          <p className="mb-8 text-xl leading-7 text-justify md:w-3/4 text-second-green">
            Scopri il nuovo protocollo di connessione per la forza lavoro
            moderna. Salta burocrazia e costi aggiuntivi, lavora in modo
            conforme.
          </p>
          <div className="flex min-[992px]:justify-start justify-center space- x-4 flex-column md:flex-row">
            <button className="mr-5 btn-cta bg-second-green text-main-green ">
              Iscriviti Adesso
            </button>
            <button className="btn-cta bg-dirty-white text-second-green">
              Contattaci
            </button>
          </div>
        </div>
        <AvatarIcon />
      </div>
    </div>
  );
};
export default HeadingTalent;
