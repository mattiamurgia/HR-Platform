import React from 'react'
import { CardForWho } from '../../../types/CardForWho';

const SingleCardForWho = ({
  title_jobs,
  image_logo,
  image_back,
}: CardForWho) => {
  return (
    <div className="snap-center min-w-[290px] min-h-[370px] flex flex-col rounded-xl bg-[#001917] p-10 relative hover:bg-[#22242f] hover:opacity-75 hover:scale-[1.02] hover:translate-y-2 hover:transition hover:ease-in-out hover:delay-150 hover:duration-300">
      <div className="flex-auto ">
        <div className="flex flex-col items-start justify-between">
          <img
            src={image_logo}
            alt="logo-card"
            className="w-10 h-auto p-2 rounded-full bg-second-green"
          />
          <h4 className="text-4xl font-medium text-dirty-white mt-52">
            {title_jobs}
          </h4>
          <img
            src={image_back}
            alt="background-logo"
            className="absolute top-0 right-0 rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default SingleCardForWho