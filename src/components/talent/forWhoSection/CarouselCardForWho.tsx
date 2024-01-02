import React from "react";
import useGetTableDB from "../../../hook/useConnectDB";
import Spinner from "../../mainComponents/spinner/Spinner";
import { CardForWho } from "../../../types/CardForWho";
import SingleCardForWho from "./CardForWho";

const CarouselCardForWho = () => {
  const arrayJobs: CardForWho[] = useGetTableDB("Per Chi");

  return (
    <div className="flex w-full px-10 py-6 mt-12 space-x-24 overflow-y-auto snap-x snap-mandatory md:px-16 hide-scrollbar">
      {arrayJobs ? (
        arrayJobs.map(({ title_jobs, image_back, image_logo }, id) => (
          <SingleCardForWho
            key={id}
            title_jobs={title_jobs}
            image_back={image_back}
            image_logo={image_logo}
          />
        ))
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default CarouselCardForWho;
