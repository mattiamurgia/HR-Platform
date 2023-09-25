import React from "react";
import {
  faCircleCheck,
  faCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Spinner } from "@material-tailwind/react";
import { CardTalent } from "../../../types/CardTalent";

const SolutionCard = ({
  image,
  title,
  description,
  list_advantages,
  name_button,
  img_container,
}: CardTalent) => (
  <div className="flex flex-col items-start flex-column w-full px-5 rounded-lg py-8 bg-dirty-white text-second-green border-solid border-[1px] border-second-green md:w-11/12 h-min">
    <div className="border-[1px] border-r-4 border-b-4 border-solid rounded-md  border-second-green mb-10  bg-dirty-pink">
      <img src={image} alt="Logo Card" className="p-3 w-[80px] h-[80px] " />
    </div>
    <div className="text-start">
      <h3 className="text-3xl font-medium md:text-5xl">{title}</h3>
      <p className="mt-5 font-medium text-md md:text-lg">{description}</p>
    </div>
    <div className="border-[1px] border-solid border-second-green p-3 w-full mt-10 rounded-md flex flex-row justify-center items-start">
      <ul className="flex flex-col md:flex-wrap justify-center w-full min-[1200px]:flex-row md:justify-around text-sm md:text-base">
        {list_advantages ? (
          list_advantages.map((el) => (
            <li className="inline min-[1200px]:w-6/12 w-full py-2 border-white border-solid border-1">
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="mr-3 rounded-full bg-main-green text-second-green"
              />
              {el}
            </li>
          ))
        ) : (
          <Spinner />
        )}
      </ul>
    </div>
    <div className="mx-auto mt-10 ">
      <img
        src={img_container}
        alt=""
        className="object-contain w-full h-full border-second-green border-[1px] rounded-md"
      />
    </div>
    <div className="w-full ">
      <button className="w-full mt-8 btn-cta bg-second-green text-main-green">
        {name_button}
        <FontAwesomeIcon
          icon={faCircleRight}
          className="ml-3 text-sm align-middle border-2 border-solid rounded-full border-main-green bg-main-green text-second-green"
        />
      </button>
    </div>
  </div>
);

export default SolutionCard;
