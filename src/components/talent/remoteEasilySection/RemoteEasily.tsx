import React from "react";
import HeadingRemoteEasily from "./HeadingRemoteEasily";
import BenefitSection from "./BenefitSection";

const RemoteEasily = () => {
  return (
    <div className="px-8 pb-20 md:px-10">
      <HeadingRemoteEasily />
      <BenefitSection />
      <div className="flex items-center justify-center mt-5 text-xs md:text-sm text-second-green">
        <p className="inline-block w-11/12 ">
          * Nessun costo per la configurazione iniziale o la manutenzione
          continua. I costi possono variare a seconda delle diverse soluzioni.
        </p>
      </div>
    </div>
  );
};

export default RemoteEasily;
