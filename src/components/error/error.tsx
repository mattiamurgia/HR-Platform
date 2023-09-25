import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-5 md:space-y-8 bg-dirty-white">
      <img
        className="object-contain w-full h-[50vh] px-5 mt-20 md:mt-24"
        src="https://uploads-ssl.webflow.com/63fffb3513dd1b7acde9449c/64931981a2683a2b01e6d3f0_Group%202.svg"
        alt=""
      />
      <h6 className="px-5 text-4xl font-bold text-center text-second-green">
        Pagina non trovata, forse il nostro team può aiutarti!!
      </h6>
      <div className="flex justify-start space-x-4 mb-14 bg-dark-50 flex-column md:flex-row">
        <Link to="/">
          <button className="btn-cta bg-second-green text-main-green">
            Torna alla Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
