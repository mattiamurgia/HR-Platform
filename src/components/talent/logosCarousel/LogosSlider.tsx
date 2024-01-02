import React, { useEffect } from "react";
import Glide from "@glidejs/glide";
import useGetTableDB from "../../../hook/useConnectDB";
import { Card } from "../../../types/Card";
import Spinner from "../../mainComponents/spinner/Spinner";

const LogosSlider = () => {
  const arrayLogos: Card[] = useGetTableDB("Companies Logos");

  useEffect(() => {
    setTimeout(() => {
      const slider = new Glide(".glide-09", {
        type: "carousel",
        autoplay: 1,
        animationDuration: 8000,
        animationTimingFunc: "linear",
        perView: 3,
        breakpoints: {
          1024: {
            perView: 2,
          },
          640: {
            perView: 1,
          },
        },
      }).mount();

      return () => {
        slider.destroy();
      };
    }, 2000);
  }, []);

  return (
    <div className="w-full px-5 py-20 glide-09">
      <div className="flex flex-col items-center justify-center w-full gap-5 p-10 text-center spacing-y-5 text-second-green">
        <h1 className="text-4xl font-semibold md:text-6xl">
          Scelto da più di
          <span className="text-[#ED955A] text-stroke-3"> 5200</span> aziende
        </h1>
        <p className="text-md md:text-xl">
          Organizzazioni di tutte le dimensioni si affidano a Ruul
        </p>
      </div>
      <div
        data-glide-el="track"
        className="px-3 mt-8 overflow-y-auto hide-scrollbar">
        <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] flex overflow-hidden ps-0 gap-20 w-full py-10">
          {arrayLogos ? (
            arrayLogos.map(({ title, image }, id) => (
              <li
                key={id}
                className="py-3 text-center border-[1px] rounded-2xl border-second-green border-b-8 border-l-8 hover:opacity-[0.2] hover:border-[#ED955A] hover:effect-card">
                <img
                  src={image}
                  className="h-20 max-h-full px-5 m-auto mb-3"
                  alt="Icon Compaines"
                />
                <p className="italic font-bold text-second-green text-md">
                  {title}
                </p>
              </li>
            ))
          ) : (
            <Spinner />
          )}
        </ul>
      </div>
    </div>
  );
};

export default LogosSlider;
