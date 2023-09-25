import React from "react";
import { Card } from "../../../types/Card";

const ColBenefits = ({ title, image, description }: Card) => {
  return (
    <div className="flex flex-row items-start justify-center px-3 py-10 md:w-2/4 w-4/4 ">
      <img
        src={image}
        className="h-[45px] w-[45px] mr-5 border-solid border-[1px] border-second-green border-e-[6px] border-b-[6px] rounded-full p-2"
        alt={title}
      />
      <div className="flex flex-col justify-start">
        <h5 className="font-semibold leading-6 text-second-green">{title}</h5>
        <p className="leading-7 text-second-green">{description}</p>
      </div>
    </div>
  );
};

export default ColBenefits;
