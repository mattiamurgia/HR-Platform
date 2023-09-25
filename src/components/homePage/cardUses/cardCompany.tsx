import React from "react";
import { Card } from "../../../types/Card";

const CardCompany = ({ image, title }: Card) => {
  return (
    <div className="flex">
      <div className="relative mx-8 w-52">
        <div className="card-uses">
          <img
            loading="lazy"
            className="h-[20px] w-[95px]"
            src={image}
            alt={title}
          />
        </div>
        <div className="absolute py-[3.6rem] rounded-md w-[13.5rem] bg-second-green hover:hidden top-2 hover:transition-opacity"></div>
      </div>
    </div>
  );
};
export default CardCompany;
