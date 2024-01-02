import React from "react";
import BelowDescription from "./BelowDescription";
import useGetTableDB from "../../../hook/useConnectDB";
import { Card } from "../../../types/Card";
import ColBenefits from "./ColBenefits";
import Spinner from "../../mainComponents/spinner/Spinner";

const DescriptionComponent = () => {
  const items:Card[] = useGetTableDB("Card Main Content");

  return (
    <div className="w-screen mr-5 md:text-start">
      <div className="p-5">
        <h5 className="mb-5 text-sm font-medium text-second-green">
          AGENCY OF RECORD
        </h5>
        <h1 className="font-semibold text-5xl tracking-wide text-second-green md:text-7xl md:leading-[80px] leading-[60px] mb-6">
          Un nuovo protocollo di connessione per il lavoro
        </h1>
        <p className="mb-8 text-xl leading-10 text-justify text-second-green">
          Dì addio al vecchio e obsoleto sistema di buste paga. Lavoro moderno
          chiede un nuovo protocollo di occupazione tra talenti e imprese. Ruul
          è il pioniere di questa trasformazione rivoluzionaria.
        </p>
      </div>
      <BelowDescription />
      <div className="flex flex-col flex-wrap justify-around p-2 mt-10 md:flex-row ">
        {items ? (
          items.map(({ title, image, description }: Card) => (
            <ColBenefits
              title={title}
              image={image}
              description={description}
            />
          ))
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
};

export default DescriptionComponent;
