import React from "react";
import CardDescription from "./cardDescription";
import useGetTableDB from "../../../hook/useConnectDB";
import { CardPlan } from "../../../types/CardPlan";
import DescriptionSection from "./descriptionSection";
import Spinner from "../../mainComponents/spinner/spinner";

const ContainerSection = () => {
  const card: CardPlan[] = useGetTableDB(
    "Card Description"
  ) as unknown as CardPlan[];

  return (
    <div className="w-full px-1 md:px-10 py-28 bg-second-green ">
      <DescriptionSection />
      <div className="flex flex-col items-center justify-center space-x-0 md:space-x-8 md:justify-around md:flex-row gap-9">
        {card ? (
          card.map(
            ({
              image,
              title,
              description,
              subtitle,
              list_advantages,
              name_button,
              indicator_use,
              color,
            }: CardPlan) => (
              <CardDescription
                image={image}
                title={title}
                description={description}
                subtitle={subtitle}
                list_advantages={list_advantages}
                name_button={name_button}
                indicator_use={indicator_use}
                color={color}
              />
            )
          )
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
};

export default ContainerSection;
