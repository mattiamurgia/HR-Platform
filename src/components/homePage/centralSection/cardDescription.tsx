import {
  faCircleCheck,
  faCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { CardPlan } from "../../../types/CardPlan";
import Spinner from "../../mainComponents/spinner/Spinner";

const CardDescription = ({
  image,
  title,
  description,
  subtitle,
  list_advantages,
  name_button,
  indicator_use,
  color,
}: CardPlan) => {
  return (
    <div
      className={`flex flex-col items-center justify-center w-10/12 px-5 rounded-lg md:w-6/12 py-14 flex-column bg-${color} bg-dirty-pink text-second-green`}
    >
      <div className="border-[1px] border-r-4 border-b-4 border-solid rounded-md  border-second-green mb-10 bg-dirty-white">
        <img src={image} alt="Logo Card" className="p-3 w-[80px] h-[80px]" />
      </div>
      <div className="text-center">
        <h3 className="text-5xl font-medium">{title}</h3>
        <p className="mt-5 text-sm tracking-[0.5em] font-medium">{subtitle}</p>
      </div>
      <div className="border-[1px] border-solid border-second-green p-5 w-11/12 mt-10 rounded-md">
        <p className="text-xl font-medium leading-8 text-center">
          {description}
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-around w-10/12 gap-4 mt-5 font-semibold text-start sm:flex-col lg:flex-row md:gap-0 md:justify-start md:items-start">
        {list_advantages ? (
          list_advantages?.map((el) => (
            <p className="mt-3 ml-1 text-sm whitespace-pre-wrap w-12/12 md:w-5/12 md:whitespace-nowrap md:space-x-2">
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="mr-3 rounded-full bg-main-green text-second-green"
              />
              {el}
            </p>
          ))
        ) : (
          <Spinner />
        )}
      </div>
      <button className="w-11/12 mt-10 btn-cta bg-second-green text-main-green">
        {name_button}
        <FontAwesomeIcon
          icon={faCircleRight}
          className="ml-3 text-sm align-middle border-2 border-solid rounded-full border-main-green bg-main-green text-second-green"
        />
      </button>
      <p className="mt-10 text-sm">
        <span className="font-semibold">{indicator_use?.slice(0, 4)}</span>
        {indicator_use?.slice(4)}
      </p>
    </div>
  );
};

export default CardDescription;
