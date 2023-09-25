import React from "react";
import CardCompany from "./cardCompany";
import { Card } from "../../../types/Card";
import Spinner from "../../mainComponents/spinner/spinner";
import useGetTableDB from "../../../hook/useConnectDB";

const ContainerCardUses = () => {
  const cardsCompaines = useGetTableDB("Loghi Aziende") as unknown as Card[];
  return (
    <div className="flex flex-wrap md:justify-center lg:flex-row items-center justify-center mt-20 mb-10 min-[1135px]:gap-0 gap-[6em]">
      {cardsCompaines ? (
        cardsCompaines?.map(({ image, title }: Card) => (
          <CardCompany image={image} title={title} />
        ))
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default ContainerCardUses;
