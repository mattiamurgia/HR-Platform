import React from "react";
import CarouselControlsOutside from "./carouselControlsOutside";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContainerCarousel = () => {
  return (
    <div className="w-full px-8 py-10 pb-20 bg-second-green">
      <div className="pt-8 md:ml-8 text-main-green md:text-start">
        <h5 className="mb-10 text-sm font-medium tracking-wide text-center md:text-start">
          USER STORIES
        </h5>
        <div className="flex flex-row items-center justify-center md:justify-start">
          <h2 className="mb-10 text-4xl font-semibold tracking-wide text-center md:text-start md:text-5xl">
            Chi ci ha scelto
          </h2>

          <FontAwesomeIcon
            icon={faCircleUser}
            className="hidden mx-5 text-4xl mb-7 text-dirty-yellow md:inline "
          />
        </div>
      </div>
      <CarouselControlsOutside />
    </div>
  );
};

export default ContainerCarousel;
