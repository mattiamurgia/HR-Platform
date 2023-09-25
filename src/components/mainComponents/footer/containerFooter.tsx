import React from "react";
import useGetTableDB from "../../../hook/useConnectDB";
import IconFooter from "./iconFooter";
import { LinkText } from "../../../types/LinkText";

const ContainerFooter = () => {
  const dataFooter: LinkText[] = useGetTableDB("FooterData") as LinkText[];

  return (
    <footer className=" bg-second-green">
      <div className="max-w-5xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <a href="/">
            <img
              src="https://uploads-ssl.webflow.com/63fffb3513dd1b7acde9449c/6400030a281a43b4c0c93c4a_Logo3.svg"
              className="h-[40px] w-[70px]"
              alt=""
            />
          </a>
        </div>

        <p className="max-w-md mx-auto mt-6 leading-relaxed text-center text-main-green">
          La soluzione per le aziende che puntano a crescere risparmiando. Sarai
          uno dei nostri o dalla parte di chi guarda? Seguici sui nostri canali
        </p>

        <ul className="flex flex-wrap justify-center gap-6 mt-12 md:gap-8 lg:gap-12 text-main-green">
          {dataFooter.map(({ linkName }) => (
            <li>
              <a href="/">{linkName}</a>
            </li>
          ))}
        </ul>
        <IconFooter />
      </div>
    </footer>
  );
};
export default ContainerFooter;
