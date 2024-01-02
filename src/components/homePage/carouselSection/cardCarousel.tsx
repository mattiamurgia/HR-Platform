import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Spinner from "../../mainComponents/spinner/Spinner";
import { CardReview } from "../../../types/CardReview";

const CardCarousel: React.FC<CardReview> = ({ arrayCardDB }) => {
  return (
    <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
      {arrayCardDB ? (
        arrayCardDB.map(({ image, title, description, rules, logo, star }) => (
          <li>
            <div className="px-5 bg-dirty-white pt-8 pb-10 rounded-3xl flex flex-col w-[80vw] md:w-auto h-52">
              <div className="flex flex-row">
                <img
                  className="rounded-full w-14 h-14 ring-2 ring-second-green"
                  src={image}
                  alt=""
                />
                <div className="flex flex-col w-10/12 ml-3">
                  <div className="flex flex-row items-center justify-between space-y-2">
                    <h1 className="font-semibold text-second-green">{title}</h1>
                    <p className="pb-2 space-x-1 text-yellow-300 fa-xs">
                      {[...Array(star)].map((_, index) => (
                        <FontAwesomeIcon key={index} icon={faStar} bounce />
                      ))}
                    </p>
                  </div>
                  <div className="flex flex-row items-center justify-start">
                    <p className="mr-2 italic font-light text-start">{rules}</p>
                    <img src={logo} alt="" className="w-6 h-6 mb-1" />
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <p className="font-medium text-gray-700">"{description}"</p>
              </div>
            </div>
          </li>
        ))
      ) : (
        <Spinner />
      )}
    </ul>
  );
};

export default CardCarousel;
