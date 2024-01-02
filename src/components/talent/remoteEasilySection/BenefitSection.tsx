import React from "react";
import useGetTableDB from "../../../hook/useConnectDB";
import { Card } from "../../../types/Card";
import Spinner from "../../mainComponents/spinner/Spinner";

const BenefitSection = () => {
  const paragraphCard:Card[] = useGetTableDB("Paragraph Card Talent");

  return (
    <div className="border-b-[1px] border-second-green container mx-auto grid grid-rows-[auto] min-[992px]:grid-cols-4 max-[992px]:grid-cols-2 max-[480px]:grid-cols-1 w-11/12 text-second-green pb-10">
      {paragraphCard ? (
        paragraphCard.map(({ image, title, description }: Card) => (
          <div className="w-full px-3 py-5 ">
            <div>
              <img
                src={image}
                alt="Logo Card"
                className="w-14 h-14 p-3 rounded-full border-second-green border-r-4 border-b-4 border-[1px]"
              />
            </div>
            <h5 className="mt-4 mb-3 text-xl font-bold">{title}</h5>
            <p className="pb-3 text-lg font-light">{description}</p>
          </div>
        ))
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default BenefitSection;
