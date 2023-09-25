import React, { useEffect, createContext, useState } from "react";
import DescriptionSolution from "./descriptionSolution";
import Toggle from "./toggle";
import CardSolution from "./cardSolution";
import useGetTableDB from "../../../hook/useConnectDB";
import { CardSolutionType } from "../../../types/CardSolution";
import Spinner from "../../mainComponents/spinner/spinner";

export const stateToggle = createContext<Function>(() => {});

const ContainerSolution = () => {
  const useDB = (dbName: "Talents Solution" | "Business Solution") => {
    const card: CardSolutionType[] = useGetTableDB(
      `${dbName}`
    ) as unknown as CardSolutionType[];
    return card;
  };

  const cardTalents = useDB("Talents Solution");
  const cardBusiness = useDB("Business Solution");

  const [state, setState] = useState(false);
  const [card, setCard] = useState<CardSolutionType[]>(cardBusiness);

  useEffect(() => {
    state ? setCard(cardTalents) : setCard(cardBusiness);
    console.log("sono state dentro useEfect ✅: ", state, card);
  }, [state, card, cardTalents, cardBusiness]);

  return (
    <stateToggle.Provider value={setState}>
      <div className="w-full px-1 md:px-8 pt-16 pb-24 h-full bg-[#FEEECA] border-solid border-b-[1px] border-second-green ">
        <DescriptionSolution />
        <div className="flex items-center justify-center px-2 py-10">
          <Toggle />
          <img
            src="https://res.cloudinary.com/dnckkupc5/image/upload/v1690978618/HR-Platform/arrow.png"
            className="w-16 ml-8 mt-10 rotate-[260deg] hidden md:inline"
            alt=""
          />
        </div>

        {card ? (
          card.map(
            (
              {
                image,
                title,
                description,
                list_advantages,
                name_button,
                bg_image,
              }: CardSolutionType,
              index
            ) => (
              <div
                className={`flex flex-col items-center justify-center gap-24 mt-7 md:mt-14  ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } w-12/12`}
              >
                <CardSolution
                  image={image}
                  title={title}
                  description={description}
                  list_advantages={list_advantages}
                  name_button={name_button}
                />
                <img
                  src={bg_image}
                  alt=""
                  className="hidden min-[992px]:inline w-10/12  md:w-5/12 md:h-[800px] xl:h-[700px] rounded-lg bg-main-green border-solid border-[1px] border-second-green object-fill bg-center bg-no-repeat "
                />
              </div>
            )
          )
        ) : (
          <Spinner />
        )}
      </div>
    </stateToggle.Provider>
  );
};
export default ContainerSolution;
