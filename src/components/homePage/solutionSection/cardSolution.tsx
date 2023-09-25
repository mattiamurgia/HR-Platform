import React from "react";
import {
  faCircleCheck,
  faCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CardSolutionType } from "../../../types/CardSolution";

const CardSolution = ({
  image,
  title,
  description,
  list_advantages,
  name_button,
}: CardSolutionType) => {
  return (
    <div className="flex flex-col items-start flex-column  h-auto w-10/12 px-5 rounded-lg py-6 bg-dirty-white text-second-green border-solid border-[1px] border-second-green md:w-5/12 md:h-[800px] xl:h-[700px]">
      <div className="border-[1px] border-r-4 border-b-4 border-solid rounded-md  border-second-green mb-10 bg-main-green">
        <img src={image} alt="Logo Card" className="p-3 w-[80px] h-[80px] " />
      </div>
      <div>
        <h3 className="text-5xl font-medium">{title}</h3>
      </div>
      <div className="w-11/12 py-5 mt-5 rounded-md ">
        <p className="text-xl font-medium leading-8 ">{description}</p>
      </div>
      <div className="flex flex-wrap items-center justify-around w-10/12 gap-4 mt-5 font-semibold text-start sm:flex-col lg:flex-row md:gap-0 md:justify-start md:items-start">
        {list_advantages?.map((el) => (
          <p className="mt-3 ml-1 text-sm whitespace-pre-wrap w-12/12 md:w-6/12 md:whitespace-nowrap md:space-x-2">
            <FontAwesomeIcon
              icon={faCircleCheck}
              className="mr-3 rounded-full bg-main-green text-second-green"
            />
            {el}
          </p>
        ))}
      </div>
      <button className="mt-8 w-12/12 btn-cta bg-second-green text-main-green">
        {name_button}
        <FontAwesomeIcon
          icon={faCircleRight}
          className="ml-3 text-sm align-middle border-2 border-solid rounded-full border-main-green bg-main-green text-second-green"
        />
      </button>
    </div>
  );
};
export default CardSolution;
