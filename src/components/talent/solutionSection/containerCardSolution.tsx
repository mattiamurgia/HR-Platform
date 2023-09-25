import React from "react";
import SolutionCard from "./solutionCard";
import { CardTalent } from "../../../types/CardTalent";
import Spinner from "../../mainComponents/spinner/spinner";
import useGetTableDB from "../../../hook/useConnectDB";

const ContainerCardSolution = () => {
  const arrayCard: CardTalent[] = useGetTableDB(
    "Main Card Talent"
  ) as unknown as CardTalent[];

  return (
    <div className="flex flex-col h-full p-5 items-center gap-10 min-[992px]:w-6/12 w-screen min-[992px]:px-10 self-end px-5">
      {arrayCard ? (
        arrayCard.map(
          ({
            image,
            title,
            description,
            list_advantages,
            name_button,
            img_container,
          }: CardTalent) => (
            <SolutionCard
              image={image}
              title={title}
              description={description}
              list_advantages={list_advantages}
              name_button={name_button}
              img_container={img_container}
            />
          )
        )
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default ContainerCardSolution;
